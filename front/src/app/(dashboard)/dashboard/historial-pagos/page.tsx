import { SidebarInset } from "@/components/ui/sidebar";

 
const DatosPage = () => {
  return ( 
    <SidebarInset>

    <div className="@container/main flex flex-1 flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4">Historial de pagos</h1>
      <p>Aquí puedes ver el Historial de pagos.</p>
    </div>

    </SidebarInset>
   );
}
 
export default DatosPage;