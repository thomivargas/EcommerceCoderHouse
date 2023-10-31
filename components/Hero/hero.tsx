
const Hero = () => {
    return ( 
        <section className="min-h-[85vh] w-full flex items-center bg-cover bg-[url('/hero.jpg')]">
            <div className="container mx-auto my-5 flex justify-end">
                <div className="bg-[#FFF3E3] w-[40%] flex flex-col items-start gap-5 p-10 rounded-md">
                    <p className="tracking-widest font-semibold">nuevos productos</p>
                    <h1 className="text-[#B88E2F] text-5xl font-semibold max-w-md">Descubra nuestra nueva colección</h1>
                    <p className="font-semibold">Elegancia en Madera: Descubre Nuestra Colección Vanguardista</p>
                    <button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 py-3 px-6 rounded-md text-white">
                        Comprar Ahora
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;