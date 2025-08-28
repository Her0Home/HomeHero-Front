import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";


 
const DialogCliente = () => {
  return ( 
    <Dialog>
          <DialogTrigger asChild>
          <Button size="sm" variant="outline">
              Ver más
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>info de la cita </DialogTitle>

              <p>Nombre Cliente</p>
              <p>Diereccion</p>
              <p>Id</p>
            </DialogHeader>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fuga
              consequatur expedita omnis sapiente et tenetur voluptatum. Aspernatur
              exercitationem quis possimus incidunt totam unde accusantium! Magnam
              placeat obcaecati facilis labore?
            </DialogDescription>
            <DialogFooter>
              <Button variant={"destructive"}>
                Cancelar
              </Button>

              <Dialog>
          <DialogTrigger asChild>
          <Button size="sm" variant="outline">
              Re-Agendar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> Agenda Una Fecha Diferente </DialogTitle>

              <p>Nombre Cliente</p>
              <p>Diereccion</p>
              <p>Id</p>
              <Input/>
              <Input/>

              <Input/>
              <Input/>
              <Input/>

            </DialogHeader>
          
            <DialogFooter>
              <Button variant={"primary"}>
                Re-Agendar
              </Button>
            
            </DialogFooter>
          </DialogContent>

      </Dialog>
            
            </DialogFooter>
          </DialogContent>

      </Dialog>


   );
}
 
export default DialogCliente;