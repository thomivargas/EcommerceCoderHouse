import Link from "next/link"
import { mockData } from "@/data/products"

type Params = {
    categoria: string; 
}

const categoriaLinks = [
    {
        href: '/productos/todos',
        name: 'todos'
    },
    {
        href: '/productos/dining',
        name: 'dining'
    },
    {
        href: '/productos/living',
        name: 'living'
    },
    {
        href: '/productos/bedroom',
        name: 'bedroom'
    },
]

export async function generateMetadata({params} : {params: Params}) {
    return {
        title: `FuniroApp - ${params.categoria}`,
    }
}

const ProductosLayout = ({
    children, params
}: {
    children: React.ReactNode,
    params: Params
}) => {
    const { categoria } = params
    const items = categoria === 'todos'
    ? mockData
    : mockData.filter(product => product.type === categoria)

if (items.length === 0) return

    return (
        <>
            <div className="h-[250px] w-full flex justify-center items-center bg-cover bg-center bg-[url('/fondoTienda.png')]">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Tienda</h1>
                    <p className="font-semibold">Inicio {'>'} Tienda</p>
                </div>
            </div>
            <div className="bg-[#faedde] py-4">
                <div className="container md:mx-auto flex flex-col md:flex-row justify-around items-center">
                    <div className="md:w-[500px] flex flex-col md:flex-row gap-2">
                        <nav className="flex gap-5 px-2 md:border-r-2 border-[#ccc]">
                            <li className="font-bold list-none hidden md:flex">Categorias:</li>
                            {categoriaLinks.map(link => (
                                <Link key={link.name} href={link.href} className={`${categoria === link.name ? 'text-[#B88E2F] font-bold border-b border-[#B88E2F]' : ''} cursor-pointer hover:text-[#B88E2F]`}>{link.name}</Link>
                            ))}
                        </nav>
                        <p className="cursor-default">{items.length} resultados</p>
                    </div>
                    <div>
                        <select>
                            <option value="">Más relevante</option>
                            <option value="">Mayor precio</option>
                            <option value="">Menor precio</option>
                        </select>
                    </div>
                </div>
            </div>
            {children}
        </>
        )
}

export default ProductosLayout