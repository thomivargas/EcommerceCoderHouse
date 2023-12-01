'use client';
import Link from "next/link";
import { formatter } from "@/utils/Formatter";
import { useAppSelector } from "@/redux/hooks";
import ProductCart from "@/components/Cart/productCart";


const ListaProducto = () => {
    const itemsCart = useAppSelector(state => state.cart)

    const Subtotal = () => {
        const itemCart = useAppSelector((state) => state.cart.data);
        const subtotal = itemCart.reduce((total, item) => {
          return total + (item.cantidad === undefined ? item.price * 1 : item.price * item.cantidad);
        }, 0);
        const total = formatter.format(subtotal)
        return total;
    };

    return (
        <>
            <div className="w-full lg:w-[60%] flex flex-col gap-10">
                {itemsCart.data.map(item => (
                    <ProductCart key={item.slug} item={item} />
                ))}
            </div>
            <div className="bg-[#F9F1E7] w-full lg:w-[400px] h-[250px] rounded-md flex flex-col gap-5 items-center py-5">
                <h1 className="text-2xl font-bold uppercase">Cart Total</h1>
                <div className="mt-3 flex flex-col gap-5">
                    <h2 className="font-semibold">Subtotal: <span className="text-gray-400 font-medium pl-7">{Subtotal()}</span></h2>
                    <h2 className="font-semibold">Total: <span className="text-[#B88E2F] font-semibold text-xl pl-10 ">{Subtotal()}</span></h2>
                </div>
                <Link href={'/checkout'} className="cursor-pointer border border-black hover:border-[#B88E2F] hover:text-[#B88E2F] rounded-xl px-7 py-1">
                    checkout
                </Link>
            </div>
        </>
    )
}

export default ListaProducto
