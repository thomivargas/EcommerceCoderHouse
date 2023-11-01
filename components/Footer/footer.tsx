const Footer = () => {
    return ( 
        <footer className="container mx-5 md:mx-auto mt-32 mb-10 grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-4 cursor-default">
            <div className="flex flex-col gap-10">
                <h1 className="font-extrabold text-3xl">Funiro</h1>
                <div className="text-[#757575]">
                    <p>400 Universidad Drive Suite 200</p>
                    <p>FL 331134 USA</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <p className="text-[#757575]">Links</p>
                <ul className="flex flex-col gap-5 font-semibold cursor-pointer">
                    <li>Inicio</li>
                    <li>Tienda</li>
                    <li>Contactanos</li>
                </ul>
            </div>
            <div className="flex flex-col gap-10">
                <p className="text-[#757575]">Ayuda</p>
                <ul className="flex flex-col gap-5 font-semibold cursor-pointer">
                    <li>payment opciones</li>
                    <li>returns</li>
                    <li>politica de privacidad</li>
                </ul>
            </div>
            <div className="flex flex-col gap-10">
                <p className="text-[#757575]">Recibir Ofertas</p>
                <div>
                    <input type="text" className="p-2 border-b border-black mr-5" placeholder="Ingresar tu email"/>
                    <button className="underline">Suscribirse</button>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;