"use client"
import Image from "next/image";
import menuIcon from "@/assets/menu.svg"
import { useState } from "react";
import MenuList from "./menuList";


const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return ( 
        <div>
            <div onClick={handleMenu}>
                <Image
                    alt="menu"
                    src={menuIcon}
                    width={45}
                    height={45}
                />
            </div>

            <MenuList open={open} setOpen={setOpen}/>
        </div>
     );
}
 
export default Menu;