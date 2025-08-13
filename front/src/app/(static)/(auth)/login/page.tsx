import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import NameLogo from "@/components/Logo/logo"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
          <NameLogo/>
          </a>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="w-full max-w-xs">
            <Card>
              <CardContent>

            <LoginForm />
              </CardContent>

            </Card>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="https://ik.imagekit.io/ankxi835d/Home%20Hero/limpieza.jpg"
          alt="Image"
          fill
          className="object-cover"
          sizes="100vw, 100vh"
        />
      </div>
    </div>
  )
}
