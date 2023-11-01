import Image from "next/image";
import dining from "@/assets/Categorias/dining.png"
import living from "@/assets/Categorias/living.png"
import bedroom from "@/assets/Categorias/bedroom.png"

const Categoria = () => {
    return ( 
        <section className="container mx-auto my-10 flex flex-col items-center gap-10">
            <div className="text-center cursor-default">   
                <h1 className="font-bold text-xl md:text-3xl">Categorias</h1>
                <p className="text-[#757575] font-semibold text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-center font-bold text-2xl">
                <div className="cursor-pointer imagenOscura">
                    <Image
                        src={dining}
                        width={380}
                        height={480}
                        alt=""
                    />
                    <h2 className="mt-5">Dining</h2>
                </div>  
                <div className="cursor-pointer imagenOscura">
                    <Image
                        src={living}
                        width={380}
                        height={480}
                        alt=""
                    />
                    <h2 className="mt-5">Living</h2>
                </div>
                <div className="cursor-pointer imagenOscura">
                    <Image
                        src={bedroom}
                        width={380}
                        height={480}
                        alt=""
                    />
                    <h2 className="mt-5">Bedroom</h2>
                </div>
            </div>
        </section>
     );
}
 
export default Categoria;