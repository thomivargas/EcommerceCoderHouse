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
import { usePathname } from "next/navigation";

const imagenes = [
    {
        nombre: 'userIcon',
        img: userIcon
    },
    {
        nombre: 'searchIcon',
        img: searchIcon
    },
    {
        nombre: 'heartIcon',
        img: heartIcon
    },
    {
        nombre: 'cartIcon',
        img: cartIcon
    }
]

const links = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Tienda',
        href: '/productos/todos'
    },
    {
        label: 'Contactanos',
        href: '/contacto'
    }
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()

    const handleMenu = () => {
        setOpen(!open)
    }

    return ( 
        <>
            <div className="hidden md:flex gap-8 xl:gap-16">
                { links.map( link => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`cursor-pointer hover:text-[#B88E2F]`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex gap-5 xl:gap-10 items-center">
                { imagenes.map( imagen => (
                    <Image
                        key={imagen.nombre}
                        alt={imagen.nombre}
                        src={imagen.img}
                        width={25}
                        className="cursor-pointer"
                    />
                ))}
            </div>
            <div onClick={handleMenu} className="flex md:hidden cursor-pointer">
                <Image
                    alt="menu"
                    src={menuIcon}
                    width={35}
                />
            </div>
            <MenuList open={open} setOpen={setOpen}/>
        </>
     );
}
 
export default Menu;