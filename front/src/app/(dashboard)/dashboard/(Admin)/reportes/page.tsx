// 'use client'
// import { SiteHeader } from "@/components/site-header"
// import { useEffect, useState } from 'react'

// import { IUser } from '@/types/users'


// export default function Reportes() {
//   return (
//     // <SidebarProvider>
//     //   {/* /sidebar */}
//     //   {/* <AppSidebar variant="inset" /> */}
      
//     //   <SidebarInset>
//     //     <SiteHeader label="Reportes" />
//     //     <div className="flex flex-col flex-1">
//     //       <div className="@container/main flex flex-1 flex-col gap-2">
//     //         <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//     //           <SectionCards />
//     //           <div className="px-4 lg:px-6">
//     //             <ChartAreaInteractive />
//     //           </div>
//     //           <DataTable data={data} />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </SidebarInset>
//     // </SidebarProvider>
//     <>
//       <SiteHeader label="Reportes" />
//       <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-gradient-to-br from-orange-50 to-blue-50">
//         <p className="text-lg font-semibold text-gray-700">🚧 Página en construcción 🚧</p>
//       </main>
//     </>
//   )
// }
'use client'

import {  useEffect, useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { getAllUsers } from '@/services/admin'
import { IUser } from '@/types/users'
import { useAuth } from '@/context/authcontext'

export default function Reportes() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)
  const {token} = useAuth() 

  useEffect(() => {
  if (!token) return // Evita ejecutar el fetch sin token

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers(token)
      if (data) setUsers(data)
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
    } finally {
      setLoading(false)
    }
  }

  fetchUsers()
}, [token])
  
  console.log("este es el array",users)
  return (
    <>
      <SiteHeader label="Reportes" />
      <main className="flex flex-col w-full min-h-screen px-4 py-8 bg-gradient-to-br from-orange-50 to-blue-50">
        {loading ? (
          <p className="text-lg font-semibold text-center text-gray-700">Cargando usuarios...</p>
        ) : users.length === 0 ? (
          <p className="text-lg font-semibold text-center text-gray-700">No se encontraron usuarios.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map(user => (
              <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={user.imageProfile ?? 'https://via.placeholder.com/300x200'}
                    alt={user.name}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
                <p className="text-sm text-gray-600"><strong>Rol:</strong> {user.role}</p>
                <p className="text-sm text-gray-600"><strong>Verificado:</strong> {user.isVerified ? '✅' : '❌'}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}