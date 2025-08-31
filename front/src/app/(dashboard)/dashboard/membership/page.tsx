"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { SiteHeader } from "@/components/site-header";
import { GetMembershipInfo, PutMembershCancel } from "@/services/Stripe";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Star, CheckCircle, XCircle, ShieldAlert } from "lucide-react";
import Swal from "sweetalert2";
import { routes } from "@/routes";
import { membresias } from "@/helpers/membresias";

interface MembershipInfo {
  active: boolean;
  remaining: number;
  endDate: Date | null;
  isCancelled: boolean;
  subscriptionId: string | null;
  priceId?: string | null;
}

export default function MembershipPage() {
  const { token } = useAuth();
  const router = useRouter();
  const [info, setInfo] = useState<MembershipInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMembershipInfo = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const response = await GetMembershipInfo(token);
      
      // --- AÑADIDO PARA DIAGNÓSTICO ---
      console.log("Respuesta COMPLETA de la API:", response);
      // ------------------------------------

      if (response.data) {
        const receivedData = {
          ...response.data,
          endDate: response.data.endDate ? new Date(response.data.endDate) : null,
        };
        setInfo(receivedData);
      }
    } catch (error) {
      console.error("Error al obtener la información de la membresía:", error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchMembershipInfo();
  }, [fetchMembershipInfo]);

  const handleCancelSubscription = async () => {
    // ... (esta función no cambia)
    if (!info?.subscriptionId || !token) return;

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Tu membresía permanecerá activa hasta el final del período de facturación actual.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await PutMembershCancel(token, info.subscriptionId!);
          Swal.fire('Cancelada', 'Tu suscripción ha sido programada para cancelación.', 'success');
          fetchMembershipInfo();
        } catch (error) {
          Swal.fire('Error', 'No se pudo cancelar la suscripción. Por favor, intenta de nuevo.', 'error');
        }
      }
    });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-hero-orange" />
        </div>
      );
    }

    if (!info || !info.active) {
      return (
        <Card className="text-center p-8">
          <CardHeader>
            <CardTitle>No tienes una membresía activa</CardTitle>
            <CardDescription>Explora nuestros planes para acceder a todos los beneficios.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push(routes.membership)}>Ver Planes</Button>
          </CardContent>
        </Card>
      );
    }
    
    // --- AÑADIDO PARA DIAGNÓSTICO ---
    console.log("Planes disponibles en el frontend (membresias.tsx):", membresias);
    // ------------------------------------

    const endDate = info.endDate;
    const currentPlan = info.priceId ? membresias.find(p => p.priceId === info.priceId) : null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ... (el resto del JSX no cambia) ... */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Star className="text-yellow-500" />
                {currentPlan ? `Tu ${currentPlan.name}` : 'Estado de tu Membresía'}
              </CardTitle>
              <CardDescription>
                Aquí puedes ver y gestionar los detalles de tu plan actual.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Estado</span>
                <Badge variant={info.isCancelled ? "destructive" : "default"} className={info.isCancelled ? "" : "bg-green-500"}>
                  {info.isCancelled ? "Cancelación Pendiente" : "Activa"}
                </Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Válida hasta</span>
                <span>{endDate ? endDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</span>
              </div>
               <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Días restantes</span>
                <span>{info.remaining} días</span>
              </div>
              {info.isCancelled && (
                 <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="h-6 w-6"/>
                      <p className="font-semibold">
                          Tu suscripción se cancelará el {endDate?.toLocaleDateString('es-ES')}. Seguirás teniendo acceso a todos los beneficios hasta esa fecha.
                      </p>
                    </div>
                 </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Beneficios del Plan</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              {currentPlan ? (
                currentPlan.features.map((feature, index) => (
                  <p key={index} className="flex items-center">
                    {feature.included ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500"/>
                    ) : (
                      <XCircle className="h-4 w-4 mr-2 text-gray-400"/>
                    )}
                    {feature.name}
                  </p>
                ))
              ) : (
                <p>Beneficios no disponibles.</p>
              )}
            </CardContent>
          </Card>
           <Card>
            <CardHeader><CardTitle>Acciones</CardTitle></CardHeader>
            <CardContent className="space-y-3">
               <Button className="w-full" onClick={() => router.push(routes.membership)}>Cambiar de Plan</Button>
               {!info.isCancelled && (
                <Button className="w-full" variant="destructive" onClick={handleCancelSubscription}>
                  <XCircle className="h-4 w-4 mr-2"/>
                  Cancelar Membresía
                </Button>
               )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <>
      <SiteHeader label="Mi Membresía" />
      <main className="w-full px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </>
  );
}