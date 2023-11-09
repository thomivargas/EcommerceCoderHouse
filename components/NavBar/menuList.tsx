import Image from "next/image";
import Link from "next/link";
import cartIcon from '@/assets/header/cart.png'

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openCart: boolean;
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleCloseOff = (e : React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
}

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

const MenuList = ({open, setOpen, openCart, setOpenCart}: MenuProps ) => {

    const handleCloseMenu = () => {
        setOpen(false);
    };
    const handleMenu = () => {
        setOpenCart(!openCart)
    }

    return ( 
        <div
            onClick={handleCloseMenu}
            className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} z-50 transition-all fixed inset-0 bg-black/50 flex justify-end`}
        >
            <aside onClick={HandleCloseOff} className={`${!open ? 'translate-x-48' : ''} transition-all h-[200px] w-52 bg-gray-800`}>
            <div className="absolute right-1 p-3 text-2xl text-white cursor-pointer" onClick={() => setOpen(false)}>
                X
            </div>

                <nav className="flex flex-col gap-5 px-4 mt-4 text-white items-center text-xl">
                    { links.map( link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => setOpen(false)}
                    >
                        <Image
                            src={cartIcon}
                            width={30}
                            alt=""
                            className="invert"
                            onClick={handleMenu}
                        />
                    </button>
                </nav>
            </aside>
        </div>
     );
}
 
export default MenuList;