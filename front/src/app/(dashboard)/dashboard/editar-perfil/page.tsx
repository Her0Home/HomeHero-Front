'use client'
import React from 'react'
import { FormPro } from '../components/formPro'
import { FormClient } from '../components/formClient'
import { useAuth } from '@/context/authcontext'
import { SiteHeader } from '@/components/site-header'


const EditPerfil = () => {
  const { user } = useAuth()

  const renderContent = () => {
    if (!user) return <p>Cargando perfil...</p>

    if (user.isVerified) {
      return <p className="text-lg font-semibold text-green-700">✅ Tu perfil ya fue completado.</p>
    }

    if (user.role === 'profesional') return <FormPro />
    if (user.role === 'cliente') return <FormClient />

    return <p>Rol desconocido.</p>
  }

  return (
    <div>
      <SiteHeader label="EditarPerfil" />
      <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-gradient-to-br from-orange-50 to-blue-50">
        {renderContent()}
      </main>
    </div>
  )
}

export default EditPerfil