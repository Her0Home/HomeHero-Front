'use client'
import React from 'react'
import { FormPro } from '../components/formPro'
import { FormClient } from '../components/formClient'
import { useAuth } from '@/context/authcontext'
import { SiteHeader } from '@/components/site-header'


const EditPerfil = () => {
  const { user } = useAuth()

  return (
    <div>
            <SiteHeader label="EditarPerfil" />
      
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-gradient-to-br from-orange-50 to-blue-50">
      {user?.role === 'profesional' ? <FormPro /> : user?.role === 'cliente' ? <FormClient /> : <p>Cargando perfil...</p>}
    </main>

    </div>
  )
}

export default EditPerfil