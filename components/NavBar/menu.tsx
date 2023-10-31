"use client"
import Image from "next/image";
import menuIcon from "@/assets/menu.svg"
import userIcon from "@/assets/header/user.png"
import searchIcon from "@/assets/header/search.png"
import heartIcon from "@/assets/header/heart.png"
import cartIcon from "@/assets/header/cart.png"
import { useState } from "react";
import MenuList from "./menuList";
import Link from "next/link";


const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return ( 
        <>
            <div className="hidden md:flex gap-8 xl:gap-16 text-sm font-semibold">
                <Link href={"#"} className="cursor-pointer hover:text-[#B88E2F]">Inicio</Link>
                <Link href={"#"} className="cursor-pointer hover:text-[#B88E2F]">Tienda</Link>
                <Link href={"#"} className="cursor-pointer hover:text-[#B88E2F]">Contacto</Link>
            </div>
            <div className="hidden md:flex gap-5 xl:gap-10 items-center">
                <Image
                    alt="userIcon"
                    src={userIcon}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
                <Image
                    alt="searchIcon"
                    src={searchIcon}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
                <Image
                    alt="heartIcon"
                    src={heartIcon}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
                <Image
                    alt="cartIcon"
                    src={cartIcon}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
            </div>
            <div onClick={handleMenu} className="flex md:hidden cursor-pointer">
                <Image
                    alt="menu"
                    src={menuIcon}
                    width={35}
                    height={35}
                />
            </div>
            <MenuList open={open} setOpen={setOpen}/>
        </>
     );
}
 
export default Menu;