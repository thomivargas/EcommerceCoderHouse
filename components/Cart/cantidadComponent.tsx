'use client'
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { useState } from "react"

const CantidadComponent = ({item} : {item : Producto }) => {
    const [ nuevaCantidad, setNuevaCantidad ] = useState(item.cantidad);
    const dispatch = useAppDispatch()

    const handleCantidadChange = (item : Producto , cantidad : number) => {
        setNuevaCantidad(cantidad);
        dispatch(addToCart({...item, cantidad}));
    };

    return (
        <div className="flex gap-2 md:gap-5 text-xs md:text-base border border-[#aaa] rounded-xl px-2 py-2">
            <button
                className="cursor-pointer"
                onClick={() => handleCantidadChange(item, nuevaCantidad > 1 ? nuevaCantidad - 1 : 1)}
            >-</button>
            <p>{nuevaCantidad}</p>
            <button
                className="cursor-pointer"
                onClick={() => handleCantidadChange(item, item.inStock > nuevaCantidad ? nuevaCantidad + 1 : item.inStock)}
            >+</button>
        </div>
    )
}

export default CantidadComponent
