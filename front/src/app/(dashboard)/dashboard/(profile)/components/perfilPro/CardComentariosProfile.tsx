import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const ComentarioProfile = () => {
  return (
    <Card >
      <CardHeader className="flex  flex-row justify-between">
        <p>Nombre del usuario</p>
        <p>Calificación</p>
      </CardHeader>

      <CardContent>
      

        <Collapsible>
          <CollapsibleTrigger asChild>
          <div className="flex flex-row gap-4">
          <p>Comentario {" "} </p>
            <Button size="sm" variant="outline">
              Ver más
            </Button>

          </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fuga
              consequatur expedita omnis sapiente et tenetur voluptatum. Aspernatur
              exercitationem quis possimus incidunt totam unde accusantium! Magnam
              placeat obcaecati facilis labore?
            </p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

    </Card>
  );
};

export default ComentarioProfile;
