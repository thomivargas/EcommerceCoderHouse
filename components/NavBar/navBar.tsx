import Image from "next/image";
import logo from "@/assets/header/logo.png"
import Menu from "./menu";

const NavBar = () => {

    return ( 
        <header className="mx-2 md:mx-0">
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center cursor-pointer">
                    <Image 
                        src={logo}
                        width={50}
                        alt="logo"
                    />
                    <h1 className="font-extrabold text-3xl">Funiro</h1>
                </div>
                <Menu />
            </div>
        </header>
     );
}
 
export default NavBar;