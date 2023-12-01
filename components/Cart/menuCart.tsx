'use client'
import Image from "next/image";
import Link from "next/link";
import { formatter } from "@/utils/Formatter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { removeToCart } from "@/redux/slices/cartSlice";
import cancel from '@/assets/Icon/cancel.svg'
import cancelRelleno from '@/assets/Icon/cancel-relleno.svg'

interface MenuProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuCart = ({ openCart, setOpenCart }: MenuProps) => {
    const itemCart = useAppSelector((state) => state.cart.data)
    const dispatch = useAppDispatch()
    
    const handleCloseMenu = () => {
        setOpenCart(false);
    };
    const HandleCloseOff = (e : React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    const eliminarCarrito = (slug : string) => {
        dispatch(removeToCart({slug}))
    }

    const Subtotal = () => {
        const itemCart = useAppSelector((state) => state.cart.data);
        const subtotal = itemCart.reduce((total, item) => {
          return total + (item.cantidad === undefined ? item.price * 1 : item.price * item.cantidad);
        }, 0);
        const total = formatter.format(subtotal)
        return total;
    };

  return (
    <div
      onClick={handleCloseMenu}
      className={`${openCart ? 'visible opacity-100' : 'invisible opacity-0'} z-50 transition-all fixed inset-0 bg-black/50 flex justify-end`}
    >
      <aside onClick={HandleCloseOff} className={`${!openCart ? 'translate-x-48' : ''} transition-all h-[400px] w-[400px] rounded-md bg-white`}>
        <div className="absolute right-1 p-3 text-2xl cursor-pointer" onClick={() => setOpenCart(false)}>
            <Image
                src={cancel}
                width={25}
                height={25}
                alt=""
            />         
        </div>
        <div className="h-full flex flex-col justify-between cursor-default">
            <div>
                <h1 className="p-5 text-xl font-semibold">Shopping Cart</h1>
                <div className="h-[200px] flex flex-col gap-5 overflow-auto">
                    { itemCart?.map( item => (
                        <div className="mt-3 flex gap-2 justify-between items-center px-5">
                            <Image
                                src={`/products/${item.image}`}
                                width={100}
                                height={100}
                                alt=""
                            />
                            <div className="text-xs flex flex-col gap-2">
                                <h1 className="max-w-[150px]">{item.title}</h1>
                                <p>{item.cantidad} x <span className="text-[#B88E2F]">{item.cantidad === undefined ? formatter.format(item.price * 1) : formatter.format(item.price * item.cantidad)}</span></p>
                            </div>
                            <Image
                                src={cancelRelleno}
                                width={25}
                                height={25}
                                alt=""
                                className="cursor-pointer"
                                onClick={() => eliminarCarrito(item.slug)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-3 flex flex-col gap-5">
                <div className="w-full flex gap-16 px-5">
                    <h1>Subtotal: {Subtotal()}</h1>
                    <p className="text-[#B88E2F]"></p>
                </div>
                <div className="px-5 flex gap-5">
                    <Link href={'/cart'} onClick={() => setOpenCart(false)} className="cursor-pointer border border-black hover:border-[#B88E2F] hover:text-[#B88E2F] rounded-xl px-7 py-1">
                        carrito
                    </Link>
                    <Link href={'/checkout'} onClick={() => setOpenCart(false)} className="cursor-pointer border border-black hover:border-[#B88E2F] hover:text-[#B88E2F] rounded-xl px-7 py-1">
                        checkout
                    </Link>
                </div>
            </div>
        </div>
      </aside>
    </div>
  );
};

export default MenuCart;
