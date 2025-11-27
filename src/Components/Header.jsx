import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Header() {
    
  return (
   <>


 <Navbar fluid rounded>
      <NavbarBrand  href="#">
       
        <span className="self-center whitespace-nowrap text-xl font-bold">John Babu</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" id="home" className="self-center whitespace-nowrap text-xl font-bold">
          Home
        </NavbarLink>
        <NavbarLink  href="#about" id="about" className="self-center whitespace-nowrap text-xl font-bold">
          About
        </NavbarLink>
        <NavbarLink href="#"className="self-center whitespace-nowrap text-xl font-bold">Services</NavbarLink>
        <NavbarLink href="#"className="self-center whitespace-nowrap text-xl font-bold">Projects</NavbarLink>
        <NavbarLink href="#"className="self-center whitespace-nowrap text-xl font-bold">Contact</NavbarLink>
        <Button className="text-center"><IoIosMoon/> <IoSunnySharp/></Button>
      </NavbarCollapse>
      
    </Navbar>

   </>
  )
}

export default Header