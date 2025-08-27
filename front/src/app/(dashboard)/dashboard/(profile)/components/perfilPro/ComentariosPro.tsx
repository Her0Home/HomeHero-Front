import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ComentarisoProfile from "./CardComentariosProfile";

// interface ComentariosProProps {

// }

const ComentariosPro = () => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title ">comentarios </p>
          </CardHeader>
          <CardContent className="p-8 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">
              <ComentarisoProfile />
              <ComentarisoProfile />
              <ComentarisoProfile />
              <ComentarisoProfile />
              <ComentarisoProfile />
              <ComentarisoProfile />
              <ComentarisoProfile />
            </div>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ComentariosPro;
