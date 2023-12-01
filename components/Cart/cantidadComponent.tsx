'use client'

import { useState } from "react"

const CantidadComponent = () => {
    const [cantidad, setCantidad] = useState(2)

    return (
        <div className="flex gap-2 md:gap-5 text-xs md:text-base border border-[#aaa] rounded-xl px-2 py-2">
            <button
                className="cursor-pointer"
                onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
            >-</button>
            <p>{cantidad}</p>
            <button
                className="cursor-pointer"
                onClick={() => setCantidad(cantidad + 1)}
            >+</button>
        </div>
    )
}

export default CantidadComponent
