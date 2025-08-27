import BeneficiosPro from "@/components/membresias/beneficios"
import ComparacionPlanes from "@/components/membresias/comparacionPlanes"
import PreguntasPro from "@/components/membresias/FAQ"
import HeroMembresias from "@/components/membresias/heroMembresias"
import InvitacionPro from "@/components/membresias/invitacionPro"
import PlansGrid from "@/components/membresias/plansGrid"


export default function ProfessionalMembershipsPage() {


  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="container px-4 py-12 mx-auto">
        {/* Hero Section */}
        <HeroMembresias/>

        {/* Plans Grid */}
        <div id="membresias">
        <PlansGrid  />

        </div>

        {/* Features Comparison */}
        <ComparacionPlanes/>

        {/* Benefits Section */}
        <BeneficiosPro/>

        {/* FAQ Section */}
        
        <PreguntasPro/>
        
        {/* CTA Section */}
        <InvitacionPro/>
        


      </div>
    </div>
  )
}
