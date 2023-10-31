import Image from "next/image";
import logo from "@/assets/logo.svg"
import Menu from "./menu";

const NavBar = () => {

    return ( 
        <header>
            <div className="flex justify-between">
                <Image 
                    src={logo}
                    width={50}
                    height={25}
                    alt="logo"
                />
                <Menu />
            </div>
        </header>
     );
}
 
export default NavBar;