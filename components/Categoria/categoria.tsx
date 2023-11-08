import Image from "next/image";
import dining from "@/assets/Categorias/dining.png"
import living from "@/assets/Categorias/living.png"
import bedroom from "@/assets/Categorias/bedroom.png"
import Link from "next/link";

const categoria = [
    {
        img: dining,
        name: 'Dining',
        href: '/productos/dining'
    },
    {
        img: living,
        name: 'Living',
        href: '/productos/living'
    },
    {
        img: bedroom,
        name: 'Bedroom',
        href: '/productos/bedroom'
    },
]

const Categoria = () => {
    return ( 
        <section className="container mx-auto my-10 flex flex-col items-center gap-10">
            <div className="text-center cursor-default">   
                <h1 className="font-bold text-xl md:text-3xl">Categorias</h1>
                <p className="text-[#757575] font-semibold text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-between text-center font-bold text-2xl">
                { categoria.map( item => (
                    <Link href={item.href} className="basis-80 cursor-pointer imagenOscura" key={item.name}>
                        <Image
                            src={item.img}
                            width={380}
                            height={480}
                            alt=""
                            className="w-[80%] md:w-full mx-auto"
                        />
                        <h2 className="my-4 text-lg md:text-2xl">{item.name}</h2>
                    </Link>
                ))}
            </div>
        </section>
     );
}
 
export default Categoria;