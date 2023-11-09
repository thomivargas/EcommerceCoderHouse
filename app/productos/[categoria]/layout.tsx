import Link from "next/link"
import { mockData } from "@/data/products"
import Footer from "@/components/Footer/footer";
import Image from "next/image";
import unoIcono from '@/assets/Icon/trofeoIcon.png'
import dosIcono from '@/assets/Icon/checkIcon.png'
import tresIcono from '@/assets/Icon/cajaIcon.png'
import cuatroIcono from '@/assets/Icon/asistenciaIcon.png'

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

const divs = [
    {
        icono: unoIcono,
        titulo: 'High Quality',
        texto: 'crafted from top materials'
    },
    {
        icono: dosIcono,
        titulo: 'Warranty Protection',
        texto: 'Over 2 years'
    },
    {
        icono: tresIcono,
        titulo: 'Free Shipping',
        texto: 'Order over 150 $'
    },
    {
        icono: cuatroIcono,
        titulo: '24 / 7 Support',
        texto: 'Dedicated support'
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
                <div className="text-center cursor-default">
                    <h1 className="text-3xl font-semibold">Tienda</h1>
                    <p className="font-semibold">Inicio {'>'} Tienda</p>
                </div>
            </div>
            <div className="bg-[#faedde] py-4">
                <div className="container md:mx-auto flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0 py-2 md:py-0">
                    <div className="md:w-[500px] flex flex-col md:flex-row">
                        <nav className="flex gap-5 px-2 md:border-r border-[#ccc]">
                            <li className="font-bold list-none hidden md:flex cursor-default">Categorias:</li>
                            {categoriaLinks.map(link => (
                                <Link key={link.name} href={link.href} className={`${categoria === link.name ? 'text-[#B88E2F] font-bold border-b border-[#B88E2F]' : ''} cursor-pointer hover:text-[#B88E2F]`}>{link.name}</Link>
                            ))}
                        </nav>
                        <p className="hidden md:block pl-2">{items.length} resultados</p>
                    </div>
                    <div>
                        <select className="bg-[#faedde] outline-none cursor-pointer">
                            <option value="">Más Relevante</option>
                            <option value="">Mayor Precio</option>
                            <option value="">Menor Precio</option>
                        </select>
                    </div>
                </div>
            </div>
            {children}
            <div className="bg-[#EBEBEB] cursor-default">
                <div className="container mx-auto grid justify-center md:grid-cols-2 2xl:grid-cols-4 gap-14 md:gap-10 py-4">
                    { divs.map(elemento => (
                        <div key={elemento.titulo} className="flex gap-4">
                            <Image
                                src={elemento.icono}
                                alt=""
                                width={50}
                            />
                            <div>
                                <h1 className="font-bold text-xl">{elemento.titulo}</h1>
                                <h2 className="text-sm text-[#919191]">{elemento.texto}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
        )
}

export default ProductosLayout