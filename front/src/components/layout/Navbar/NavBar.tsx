import { NavMenu } from "./NavigationMenur";

 
const Navbar= () => {
  return ( 
  <div className="flex  flex-row justify-between p-3 items-center bg-gray-300">
    <div>
      <h1>Home Hero</h1>
    </div>
    <NavMenu/>

  </div>

   );
}
 
export default Navbar;