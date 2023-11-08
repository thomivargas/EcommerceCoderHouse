import Link from "next/link";

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const MenuList = ({open, setOpen}: MenuProps ) => {



    return ( 
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} z-50 transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all h-[200px] w-52 bg-gray-800`}>
                <div 
                    className="text-white text-right py-1 px-4 text-2xl cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    x
                </div>

                <nav className="flex flex-col gap-5 px-4 text-white text-center text-xl">
                    { links.map( link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
     );
}
 
export default MenuList;