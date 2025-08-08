import { NavMenu } from "./NavigationMenu";

 
const Navbar= () => {
  return ( 
  <div className="flex  flex-row justify-between p-3 items-center bg-gray-300">
    <div>
      <h1 className="font-Name font-bold logo text-3xl ">Home Hero</h1>
    </div>
    <NavMenu/>

  </div>

   );
}
 
export default Navbar;