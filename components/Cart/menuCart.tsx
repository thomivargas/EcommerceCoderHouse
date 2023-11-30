import Image from "next/image";
import cancel from '@/assets/Icon/cancel.svg'
import cancelRelleno from '@/assets/Icon/cancel-relleno.svg'

import camaUno from '@/public/products/cama-uno.webp'
import Link from "next/link";

interface MenuProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleCloseOff = (e : React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
}

const MenuCart = ({ openCart, setOpenCart }: MenuProps) => {

    const handleCloseMenu = () => {
        setOpenCart(false);
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
                {/* Esto es hasta que haga la logica del carrito */}
                <div className="mt-3 flex gap-2 items-center px-5">
                    <Image
                        src={camaUno}
                        width={100}
                        alt=""
                    />
                    <div className="text-xs flex flex-col gap-2">
                        <h1 className="max-w-[150px]">Box De Cama Base Somier Con Cajonera</h1>
                        <p>1 x <span className="text-[#B88E2F]">$ 129.399</span></p>
                    </div>
                    <Image
                        src={cancelRelleno}
                        width={25}
                        alt=""
                        className="cursor-pointer"
                    />
                </div>
                <div className="mt-3 flex gap-2 items-center px-5">
                    <Image
                        src={camaUno}
                        width={100}
                        alt=""
                    />
                    <div className="text-xs flex flex-col gap-2">
                        <h1 className="max-w-[150px]">Box De Cama Base Somier Con Cajonera</h1>
                        <p>1 x <span className="text-[#B88E2F]">$ 129.399</span></p>
                    </div>
                    <Image
                        src={cancelRelleno}
                        width={25}
                        alt=""
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div className="my-3 flex flex-col gap-5">
                <div className="w-full flex gap-16 px-5">
                    <h1>Subtotal:</h1>
                    <p className="text-[#B88E2F]">$ 129.399</p>
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
