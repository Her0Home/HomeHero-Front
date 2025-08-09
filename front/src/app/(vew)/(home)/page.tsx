import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// import { NavigationMenuList } from "@/components/ui/navigation-menu";
// import { NavigationMenu, NavigationMenuItem } from "@radix-ui/react-navigation-menu";

export default function Home() {
  return (
    <>
    <div className="p-4 bg-gray-100   ">
      <h1 className=" text-3xL">Viendindo a Home Hero</h1>
      <Card className="w-1/5 ">
        <CardHeader>
          <h2 className="text-2xl font-bold font-Title">Hola mundo</h2>
          <p className="text-sm text-gray-500">
            Esta es una tarjeta de ejemplo
          </p>
        </CardHeader>
         <CardContent className="">
          <p className="text-gray-700">
            Aquí puedes agregar cualquier contenido que desees. Esta tarjeta
            utiliza componentes reutilizables para una mejor organización del
            código.....
          </p>
         </CardContent>
        <CardFooter>Foter</CardFooter>
        <div className="flex flex-col gap-1 justify-center mb-2">

        <Button variant={"primary"} >
          AGENDAR 1
        </Button>
        <Button variant={"secundary"} >
          AGENDAR 1
        </Button>
        <Button variant={"destructive"} >
          AGENDAR 2
        </Button>

        <Button variant={"outline"} >
          AGENDAR 3
        </Button>
        <Button variant={"outlineGradient"} >
          AGENDAR 4
        </Button>
        <div className="bg-content-gradient p-2 ">
        <Button variant={"ghost"} >
          AGENDAR 5
        </Button>

        </div>
        <Button variant={"link"} >
          AGENDAR 6 
        </Button>
    
     

        </div>
      </Card>

      <Card className="flex flex-row w-5/6">
        <CardHeader>
          <h2 className="text-2xl font-bold">Hola mundo</h2>
          <p className="text-sm text-gray-500">
            Esta es una tarjeta de ejemplo
          </p>
        </CardHeader>
         <CardContent className="bg-red-500">
          <p className="text-gray-700">
            Aquí puedes agregar cualquier contenido que desees. Esta tarjeta
            utiliza componentes reutilizables para una mejor organización del
            código.
          </p>
         </CardContent>
        <CardFooter>Foter</CardFooter>
      </Card>
      
    </div>
    </>
  );
}
