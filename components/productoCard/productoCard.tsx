"use client"
import { formatter } from "@/utils/Formatter"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useState } from "react"

interface itemProducto {
    title: string,
    description: string,
    inStock: number,
    original_price: number,
    price: number,
    cuotas: {cantidad: number, precioCuota: number, descuento: number},
    slug: string,
    image: StaticImageData,
    imageHover: StaticImageData,
    type: string,
    nuevo: boolean,
    size?: string[],
    calificacion: number,
    review: number
}

const ProductoCard = ({item} : { item: itemProducto }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/productos/detail/${item.slug}`} 
      className="bg-white h-[400px] mx-auto cursor-pointer w-80 shadow-sm hover:shadow-lg hover:shadow-[#9b9b9b] shadow-[#9b9b9b] rounded-lg flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[270px] grid place-items-center">
        <Image
            src={isHovered ? item.imageHover : item.image}
            width={250}
            alt=""
        />
        <div className={`absolute top-3 right-3 opacity-80 h-9 w-9 rounded-full grid place-items-center ${item.nuevo ? 'bg-green-600' : 'bg-red-600'}`}>
          <p className="text-xs text-white font-medium">
            {item.nuevo ? 'New' 
            : `%${item.cuotas.descuento}`}
          </p>
        </div>
      </div>
      <div className="px-3 h-28 flex flex-col justify-between gap-2">
        <h1 className="max-w-[300px] text-sm font-medium">{item.title}</h1>
        <p className="text-[#7c7c7c] text-sm">En {item.cuotas.cantidad} X {formatter.format(item.cuotas.precioCuota)}</p>
        <div className="flex gap-2">
          <p className="text-2xl font-bold">{formatter.format(item.price)}</p>
          {item.original_price > 0 && 
          <p className="text-xs text-[#7c7c7c] line-through">{formatter.format(item.original_price)}</p>}
        </div>
      </div>
    </Link>
  )
}

export default ProductoCard
