
import { FC } from "react";
import { CardSelectPro } from "./cardSelectPro";
import { CardSelectClient } from "./cardSelectClient";


const SelectRole: FC = () => {
  return (
    <div className="p-5 ">
      
      <h2 className="text-center font-Text font-semibold tracking-widest   text-xl ">
        Selecciona el servicio que deseas utilizar
      </h2>
      <div className="flex flex-row justify-evenly p-3">
        <CardSelectPro/>
        
        <CardSelectClient/>

        
      </div>
    </div>
  );
};

export default SelectRole;
