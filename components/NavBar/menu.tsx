"use client"
import Image from "next/image";
import menuIcon from "@/assets/menu.svg"
import userIcon from "@/assets/header/user.png"
import cartIcon from "@/assets/header/cart.png"
import { useState } from "react";
import MenuList from "./menuList";
import Link from "next/link";
import MenuCart from "../Cart/menuCart";
import { useAppSelector } from "@/redux/hooks";

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
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)
    const itemsCart = useAppSelector( state => state.cart.data)

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
                <Link
                    href={'/admin'}
                >
                    <Image
                        alt=''
                        src={userIcon}
                        width={28}
                        height={28}
                        className="cursor-pointer"
                    />
                </Link>
                <div className="relative flex flex-col justify-between">
                    <div className={`${itemsCart.length > 0 && 'absolute bottom-6 left-2 bg-[#B88E2F] w-5 h-5 rounded-full text-white flex items-center justify-center text-xs'}`}>{itemsCart.length > 0 ? itemsCart.length : ''}</div>
                    <Image
                        alt=''
                        src={cartIcon}
                        width={28}
                        height={28}
                        className="cursor-pointer"
                        onClick={mostrarCart}
                    />
                </div>
            </div>
            <div className="flex md:hidden cursor-pointer">
                <Image
                    alt="menu"
                    src={menuIcon}
                    width={28}
                    height={28}
                    onClick={handleMenu}
                />
            </div>
            <MenuList open={open} setOpen={setOpen} openCart={openCart} setOpenCart={setOpenCart} />
            <MenuCart openCart={openCart} setOpenCart={setOpenCart}/>
        </>
     );
}
 
export default Menu;