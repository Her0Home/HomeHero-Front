"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { useAuth } from "@/context/authcontext";
import { getPaymentHistory } from "@/services/Stripe";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";


interface Payment {
  UniqueID: string;
  amount: number;
  date: string;
  status: boolean;
  stripePaymentId: string;
}

export default function HistorialPagosPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setError("Inicia sesión para ver tu historial de pagos.");
      return;
    }

    const fetchPayments = async () => {
      try {
        const data = await getPaymentHistory(token);
        setPayments(data);
      } catch (err) {
        setError("No se pudo cargar el historial de pagos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [token]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  const renderContent = () => {
    if (loading) {
      return <p className="text-center text-gray-600">Cargando historial...</p>;
    }

    if (error) {
      return <p className="text-center text-red-600">{error}</p>;
    }

    if (payments.length === 0) {
      return <p className="text-center text-gray-600">Aún no tienes pagos registrados.</p>;
    }

    return (
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">ID de Transacción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.UniqueID}>
                <TableCell className="font-medium">{formatDate(payment.date)}</TableCell>
                <TableCell>{formatAmount(payment.amount)}</TableCell>
                <TableCell>
                  <Badge variant={payment.status ? "default" : "destructive"} className={payment.status ? "bg-green-500" : ""}>
                    {payment.status ? "Completado" : "Fallido"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-xs text-gray-500">{payment.stripePaymentId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <>
      <SiteHeader label="Historial de Pagos" />
      <main className="w-full px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </>
  );
}