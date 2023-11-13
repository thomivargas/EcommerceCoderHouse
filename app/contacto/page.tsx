import Image from "next/image";

import ubic from '@/assets/Icon/ubicIcon.png'
import tel from '@/assets/Icon/telefonoIcon.png'
import reloj from '@/assets/Icon/relojIcon.png'

const Contacto = () => {
    const zoom = 18;

    const lat = -31.5434922;
    const lon = -68.5543543;
    return ( 
        <>
            <section className="container mx-auto my-16">
                <div className="grid place-content-center text-center">
                    <h1 className="md:text-2xl font-bold">Pongase en contancto con nosotros</h1>
                    <p className="max-w-xs md:max-w-xl text-xs md:text-sm text-gray-500">Para obtener más información sobre nuestros productos y servicios. No dude en enviarnos un correo electrónico. Nuestro personal siempre estará ahí para ayudarle. ¡No lo dudes!</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 my-10">
                    <div className="flex flex-col gap-10 items-center md:items-end cursor-default w-[400px]">
                        <div className="flex flex-col items-end gap-3">
                            <div className="w-[150px] flex gap-5 items-center justify-between font-semibold text-xl">
                                <Image
                                    src={ubic}
                                    width={25}
                                    alt=""
                                />
                                <h1>Ubicacion</h1>
                            </div>
                            <p className="text-xs max-w-[100px] text-right">Franklin Rawson Oeste 2245, San Juan, Argentina</p>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <div className="w-[150px] flex gap-5 justify-between items-center font-semibold text-xl">
                                <Image
                                    src={tel}
                                    width={30}
                                    alt=""
                                />
                                <h1>Telefono</h1>
                            </div>
                            <p className="text-xs max-w-[150px] text-right">{'Cel: +(84) 546-6789'}</p>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <div className="w-[150px] flex gap-5 justify-between items-center font-semibold text-xl">
                                <Image
                                    src={reloj}
                                    width={25}
                                    alt=""
                                />
                                <h1>Horarios</h1>
                            </div>
                            <p className="text-xs max-w-[100px] text-right">Monday-Friday: 9:00 - 22:00</p>
                            <p className="text-xs max-w-[100px] text-right">Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                    <form className="w-[380px] flex flex-col gap-10">
                        <div className="flex flex-col gap-2 w-full">
                            <label>Tu nombre</label>
                            <input 
                                type="text" 
                                placeholder="Abc"
                                className="border border-[#ccc] p-2 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Tu email</label>
                            <input 
                                type="email" 
                                placeholder="@Abc"
                                className="border border-[#ccc] p-2 rounded-md "
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Mensaje</label>
                            <textarea
                                placeholder="¡Hola! me gustaría preguntar sobre"
                                className="border border-[#ccc] p-2 rounded-md max-h-44"
                            />
                        </div>
                        <button className="bg-[#B88E2F] text-white rounded-md py-1.5 hover:bg-[#B88E2F]/90 active:scale-95">
                            Enviar
                        </button>
                    </form>
                    
                </div>
            </section>
            <iframe 
                className="w-full h-[250px] my-5" 
                style={{border:"none"}}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                title="google map">
            </iframe>
        </>
     );
}
 
export default Contacto;