import { Button } from "@/components/ui/button"
import React from "react"
import { banUser } from "@/services/admin"

interface BotonBanProps {
  userId: string
  token: string | null
  onSuccess?: (userId: string) => void
  onError?: (error: unknown) => void
}

const BotonBan: React.FC<BotonBanProps> = ({ userId, token, onSuccess, onError }) => {
  const handleBan = async () => {
    if (!userId || !token) {
      alert("⚠️ Faltan datos para banear al usuario")
      return
    }

    const success = await banUser(userId, token)
    if (success) {
      alert(`✅ Usuario ${userId} baneado correctamente`)
      onSuccess?.(userId)
    } else {
      alert(`❌ No se pudo banear al usuario ${userId}`)
      onError?.(`Falló el baneo`)
    }
  }

  return (
    <Button variant="destructive" onClick={handleBan}>
      Ban
    </Button>
  )
}

export default BotonBan