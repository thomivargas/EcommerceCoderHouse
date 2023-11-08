import Image from "next/image";
import logo from "@/assets/header/logo.png"
import Menu from "./menu";
import Link from "next/link";

const NavBar = () => {

    return ( 
        <header className="mx-2 md:mx-0">
            <div className="flex items-center justify-between">
                <Link href={'/'} className="flex gap-1 items-center cursor-pointer">
                    <Image 
                        src={logo}
                        width={50}
                        alt="logo"
                    />
                    <h1 className="font-extrabold text-3xl">Funiro</h1>
                </Link>
                <Menu />
            </div>
        </header>
     );
}
 
export default NavBar;