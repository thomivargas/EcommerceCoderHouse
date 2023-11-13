"use client"
import { formatter } from "@/utils/Formatter"
import Image, { StaticImageData } from "next/image"
import estrella from '@/assets/Icon/estrella.svg'
import estrellaMedia from '@/assets/Icon/mediaestrella.svg'
import estrellaVacia from '@/assets/Icon/estrellavacia.svg'
import Link from "next/link"
import { useState } from "react"

interface itemProducto {
    title: string,
    description: string,
    inStock: number,
    original_price: number,
    price: number,
    cuotas: { cantidad: number, precioCuota: number, descuento: number },
    slug: string,
    image: StaticImageData,
    imageHover: StaticImageData,
    type: string,
    nuevo: boolean,
    size?: string[],
    calificacion: number,
    review: number
}

const DetailCard = ({ item }: { item: itemProducto }) => {
    const numEstrellas = 5
    const [sizeClik, setSizeClik] = useState<string | null>(null);
    const [cantidad, setCantidad] = useState(1)
    const [isHovered, setIsHovered] = useState(false);

    const manejarClick = (letra: string) => {
        setSizeClik(letra === sizeClik ? null : letra);
    };

    const obtenerEstrellas = () => {
        const estrellas = [];
        const calificacion = item.calificacion

        for (let i = 1; i <= numEstrellas; i++) {
            if (i <= calificacion) {
                estrellas.push(<EstrellaCompleta key={i} />);
            } else if (i - 0.5 === calificacion) {
                estrellas.push(<MediaEstrella key={i} />);
            } else {
                estrellas.push(<EstrellaVacia key={i} />);
            }
        }

        return estrellas;
    };

    return (
        <>
            <div className="text-gray-600 text-xs px-2 lg:px-0 cursor-default">
                <Link href={'/'}> Home </Link>
                {'>'}
                <Link href={'/productos/todos'}> Shop </Link>
                {'> '}
                <p className="max-w-lg">{item.title}</p>
            </div>
            <section className="lg:w-4/5 mx-2 lg:mx-auto my-10 cursor-default">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
                    <div
                        className="h-[500px] w-full md:w-[500px] relative grid place-items-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src={isHovered ? item.imageHover : item.image}
                            width={500}
                            alt=""
                        />
                        <div className={`absolute top-3 right-3 opacity-80 h-10 w-10 rounded-full grid place-items-center ${item.nuevo ? 'bg-green-600' : 'bg-red-600'}`}>
                            <p className="text-xs text-white font-medium">
                                {item.nuevo ? 'New'
                                    : `${item.cuotas.descuento}%`}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="max-w-lg font-semibold text-2xl lg:text-3xl">{item.title}</h1>
                        <div className="flex gap-1">
                            <h2 className="text-gray-400 text-2xl font-semibold">{formatter.format(item.price)}</h2>
                            {item.original_price > 0 &&
                                <p className="text-xs text-[#7c7c7c] line-through">{formatter.format(item.original_price)}</p>}
                        </div>
                        <p className="text-[#7c7c7c] text-sm">En {item.cuotas.cantidad} X {formatter.format(item.cuotas.precioCuota)}</p>
                        <div className="flex">
                            {obtenerEstrellas()}
                            <p className="text-gray-400">{`| ${item.review} vistas`}</p>
                        </div>
                        <p className="max-w-xl lg:max-w-md text-sm">{item.description}</p>
                        <h3 className="text-[#B88E2F]">En Stock: <span className="text-black">{item.inStock} unidaddes</span></h3>
                        {item?.size &&
                            <div>
                                <h3 className="text-gray-400">Size</h3>
                                <div className="flex gap-5 my-2">
                                    {item.size.map(itemSize => (
                                        <div
                                            key={itemSize}
                                            onClick={() => manejarClick(itemSize)}
                                            className={`h-10 w-10 cursor-pointer grid place-items-center rounded ${sizeClik === itemSize ? 'bg-[#B88E2F] text-white' : ''
                                                }`}
                                        >
                                            <p>{itemSize}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                        <div className="mt-10 flex gap-5">
                            <div className="flex gap-5 text-xl border border-[#aaa] rounded-xl px-4 py-2">
                                <button
                                    className="cursor-pointer"
                                    onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                                >-</button>
                                <p>{cantidad}</p>
                                <button
                                    className="cursor-pointer"
                                    onClick={() => setCantidad(item.inStock > cantidad ? cantidad + 1 : item.inStock)}
                                >+</button>
                            </div>
                            <button className="cursor-pointer text-xl border border-black hover:border-[#B88E2F] hover:text-[#B88E2F] rounded-xl px-4 py-2">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
const EstrellaCompleta: React.FC = () => (
    <Image src={estrella} width={25} alt="" />
);

const MediaEstrella: React.FC = () => (
    <Image src={estrellaMedia} width={25} alt="" />
);

const EstrellaVacia: React.FC = () => (
    <Image src={estrellaVacia} width={25} alt="" />
);

export default DetailCard
