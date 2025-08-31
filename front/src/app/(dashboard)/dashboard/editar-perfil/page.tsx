'use client'
import React, { useEffect, useState } from 'react'
import { FormPro } from '../components/formPro'
import { FormClient } from '../components/formClient'
import { useAuth } from '@/context/authcontext'
import { SiteHeader } from '@/components/site-header'
import { getUser } from '@/services/users'
import { IUser } from '@/types/users'
import { Role } from '@/types'

const EditPerfil = () => {
  const { user, token } = useAuth()
  const [fullUserData, setFullUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id && token) {
      const fetchFullUser = async () => {
        try {
          const response = await getUser(user.id, token);
          if (response?.data) {
            setFullUserData(response.data);
          }
        } catch (error) {
          console.error("Error fetching full user data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchFullUser();
    } else {
      setLoading(false);
    }
  }, [user, token]);

  const renderContent = () => {
    if (loading) {
      return <p>Cargando perfil...</p>;
    }

    if (!user || !fullUserData) {
      return <p>No se pudo cargar la información del perfil.</p>;
    }


    if (fullUserData.dni) {
      return <p className="text-lg font-semibold text-green-700">✅ Tu perfil ya fue completado.</p>;
    }

    if (user.role === Role.PROFESSIONAL) return <FormPro />;
    if (user.role === Role.CLIENTE) return <FormClient />;

    return <p>Rol desconocido o perfil incompleto.</p>;
  }

  return (
    <div>
      <SiteHeader label="Editar Perfil" />
      <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-gradient-to-br from-orange-50 to-blue-50">
        {renderContent()}
      </main>
    </div>
  )
}

export default EditPerfil