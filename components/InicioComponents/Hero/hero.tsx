"use client"
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter()

    return ( 
        <section className="min-h-[90vh] w-full flex items-center bg-cover bg-center bg-[url('/hero.jpg')]">
            <div className="container mx-2 md:mx-auto my-5 flex md:justify-end">
                <div className="bg-[#FFF3E3] cursor-default w-[60%] md:w-[40%] flex flex-col items-start gap-2 md:gap-5 p-5 md:p-10 rounded-md">
                    <p className="tracking-widest font-semibold text-xs md:text-base">nuevos productos</p>
                    <h1 className="text-[#B88E2F] text-xl md:text-6xl font-semibold line-clamp-3">Descubra nuestra nueva colección</h1>
                    <p className="font-semibold text-xs md:text-base">Elegancia en Madera: Descubre Nuestra Colección Vanguardista</p>
                    <button onClick={() => router.replace('/productos/detail/cama-de-dos-plazas-con-respaldo-repisame-lamina-150m')} className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 py-2 md:py-3 px-4 md:px-6 text-xs md:text-base rounded-md text-white">
                        Comprar Ahora
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;