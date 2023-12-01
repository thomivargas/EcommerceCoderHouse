import Image from "next/image";
import eliminar from '@/assets/Icon/eliminarIcon.png'
import CantidadComponent from "@/components/Cart/cantidadComponent";
import { removeToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

const ProductCart = ({item} : {item : Producto}) => {
    const dispatch = useAppDispatch()

    const eliminarCarrito = (slug : string) => {
        dispatch(removeToCart({slug}))
    }

    return (
        <div className="h-[100px] cursor-default flex items-center justify-between shadow shadow-gray-400 rounded-xl px-4 py-2">
            <Image
                src={`/products/${item.image}`}
                width={100}
                height={100}
                alt=""
            />
            <h1 className="max-w-[100px] lg:max-w-[250px] text-xs lg:text-sm">{item.title}</h1>
            <p className="text-xs md:text-base">{item.price}</p>
            <CantidadComponent item={item}/>
            <Image
                src={eliminar}
                width={30}
                height={30}
                alt=""
                className="cursor-pointer w-[5%] lg:w-[3%]"
                onClick={() => eliminarCarrito(item.slug)}
            />
        </div>
    )
}

export default ProductCart
