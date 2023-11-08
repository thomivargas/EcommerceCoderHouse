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
        href: '/tienda'
    },
    {
        label: 'Contactanos',
        href: '/productos/todos'
    }
]

const MenuList = ({open, setOpen}: MenuProps ) => {



    return ( 
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-72 bg-gray-800`}>
                <div 
                    className="text-white text-right py-2 px-8 text-2xl cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    X
                </div>

                <nav className="flex flex-col gap-5 px-4 text-white">
                    { links.map( link => (
                        <Link
                            key={link.label}
                            href={link.href}
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