import { formatter } from "@/utils/Formatter"
import Image, { StaticImageData } from "next/image"

interface itemProducto {
    title: string,
    description: string,
    inStock: number,
    original_price: number,
    price: number,
    cuotas: {cantidad: number, precioCuota: number, descuento: number},
    slug: string,
    image: StaticImageData,
    type: string,
    nuevo: boolean
}

const ProductoCard = ({item} : { item: itemProducto }) => {
  return (
    <div className="bg-white h-[400px] mx-auto w-80 shadow-sm hover:shadow-lg hover:shadow-[#9b9b9b] shadow-[#9b9b9b] rounded-lg flex flex-col">
      <div className="relative h-[280px] grid place-items-center">
        <Image
            src={item.image}
            width={300}
            alt=""
        />
        <div className={`absolute top-3 right-3 opacity-80 h-10 w-10 rounded-full grid place-items-center ${item.nuevo ? 'bg-green-600' : 'bg-red-600'}`}>
          <p className="text-xs text-white font-medium">
            {item.nuevo ? 'NEW'
            : `%${item.cuotas.descuento}`}
          </p>
        </div>
      </div>
      <div className="p-3 h-28 flex flex-col justify-between">
        <h1 className="max-w-[300px] text-sm font-medium">{item.title}</h1>
        <div className="px-2 flex gap-2">
          <p className="text-2xl font-bold">{formatter.format(item.price)}</p>
          {item.original_price > 0 && 
          <p className="text-xs text-[#7c7c7c] line-through">{formatter.format(item.original_price)}</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductoCard
