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
import MenuCart from "../Cart/menuCart";

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
    },
    {
        label: 'Posts',
        href: '/posts'
    }
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    const mostrarCart = () => {
        setOpenCart(!openCart)
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
                <Image
                    alt=''
                    src={userIcon}
                    width={25}
                    className="cursor-pointer"
                />
                <Image
                    alt=''
                    src={searchIcon}
                    width={25}
                    className="cursor-pointer"
                />
                <Image
                    alt=''
                    src={heartIcon}
                    width={25}
                    className="cursor-pointer"
                />
                <Image
                    alt=''
                    src={cartIcon}
                    width={25}
                    className="cursor-pointer"
                    onClick={mostrarCart}
                />
            </div>
            <div className="flex md:hidden cursor-pointer">
                <Image
                    alt="menu"
                    src={menuIcon}
                    width={35}
                    onClick={handleMenu}
                />
            </div>
            <MenuList open={open} setOpen={setOpen} openCart={openCart} setOpenCart={setOpenCart} />
            <MenuCart openCart={openCart} setOpenCart={setOpenCart}/>
        </>
     );
}
 
export default Menu;