import { Suspense } from "react";
import Servicios from "./components/Servicios";

export default function ServiciosPage() {
  return (
    <Suspense fallback={<p>Cargando servicios...</p>}>
      <Servicios/>
    </Suspense>
  );
}
