import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardAppoiment } from "./components/cardapoiment";

const Citas = () => {
  return (
    <div>
      <SiteHeader label="Citas" />
      <div className="flex flex-col  p-5 gap-2 bg-gradient-to-br from-orange-50 to-blue-50">
        <p className="text-center font-Title text-3xl">
          Vista de todas tus Citas{" "}
        </p>

        <div className=" grid grid-cols-2 gap-2">
          <div className="text-center ">
            <Card>
              <CardHeader>
                <p className="font-Title  text-2xl text-hero-orange ">
                  Solicitudes
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <CardAppoiment />
                <CardAppoiment />
                <CardAppoiment />
              </CardContent>
            </Card>
          </div>
          <div className="text-center ">
            <Card>
              <CardHeader>
                <p className="font-Title text-2xl text-hero-orange">
                  Citas Pendientes
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <CardAppoiment />
                <CardAppoiment />
                <CardAppoiment />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center ">
          <Card>
            <CardHeader>
              <p className="font-Title text-2xl text-hero-blue">
                Citas Finalizadas
              </p>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <CardAppoiment />
              <CardAppoiment />
              <CardAppoiment />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Citas;
