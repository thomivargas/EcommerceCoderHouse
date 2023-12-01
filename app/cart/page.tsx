import Image from "next/image";
import camaUno from '@/public/products/cama-uno.webp'
import eliminar from '@/assets/Icon/eliminarIcon.png'
import CantidadComponent from "@/components/Cart/cantidadComponent";
import Link from "next/link";

const Cart = () => {
    return ( 
        <section className="mb-40 container mx-auto">
        <h1 className="p-5 text-xl font-semibold">Shopping Cart</h1>
            <div className="min-h-[80vh] lg:min-h-[45vh] flex flex-col lg:flex-row gap-10 justify-between">
                {/* { itemCart\} */}
                <div className="w-full lg:w-[60%] flex flex-col gap-10">
                    <div className="h-[100px] cursor-default flex items-center justify-between shadow shadow-gray-400 rounded-xl px-4 py-2">
                        <Image
                            src={camaUno}
                            width={100}
                            alt=""
                            className="w-[15%]"
                        />
                        <h1 className="max-w-[100px] lg:max-w-[250px] text-xs lg:text-sm">Box De Cama Base Somier Con Cajonera</h1>
                        <p className="text-xs md:text-base">$ 129.399</p>
                        <CantidadComponent/>
                        <Image
                            src={eliminar}
                            width={30}
                            alt=""
                            className="cursor-pointer w-[5%] lg:w-[3%]"
                        />
                    </div>
                </div>
                <div className="bg-[#F9F1E7] w-full lg:w-[400px] h-[250px] rounded-md flex flex-col gap-5 items-center py-5">
                    <h1 className="text-2xl font-bold uppercase">Cart Total</h1>
                    <div className="mt-3 flex flex-col gap-5">
                        <h2 className="font-semibold">Subtotal: <span className="text-gray-400 font-medium pl-7">$ 129.399</span></h2>
                        <h2 className="font-semibold">Total: <span className="text-[#B88E2F] font-semibold text-xl pl-10 ">$ 129.399</span></h2>
                    </div>
                    <Link href={'/checkout'} className="cursor-pointer border border-black hover:border-[#B88E2F] hover:text-[#B88E2F] rounded-xl px-7 py-1">
                        checkout
                    </Link>
                </div>
            </div>
        </section>
     );
}
 
export default Cart;