import {NavLink} from "react-router-dom";
import { useState } from "react";
import {Menu, X} from "lucide-react";



function Navlinks(){

    return (
        <>
        <NavLink className="p-3" to="/">Home</NavLink>
        <NavLink className="p-3" to="/locations">Locations</NavLink>
        <NavLink className="p-3" to="/about">About</NavLink>
        <NavLink className="p-3" to="/register">Register</NavLink>

        </>
    
    )
    
}




function Nav(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () =>{
        setIsOpen(!isOpen);
    }

    return (
     <> 
          <nav className="w-1/4 flex justify-end">
            <div className=" hidden md:flex justify-between w-full">
                <Navlinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavBar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav> 
       {isOpen && (
        <div className="flex flex-col items-center basis-full">
            <Navlinks /> 
        </div>
       ) }

     </>
        

    );
    
}

export default Nav;