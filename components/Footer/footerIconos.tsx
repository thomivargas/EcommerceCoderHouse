import Image from "next/image";
import unoIcono from '@/assets/Icon/trofeoIcon.png'
import dosIcono from '@/assets/Icon/checkIcon.png'
import tresIcono from '@/assets/Icon/cajaIcon.png'
import cuatroIcono from '@/assets/Icon/asistenciaIcon.png'

const divs = [
    {
        icono: unoIcono,
        titulo: 'High Quality',
        texto: 'crafted from top materials'
    },
    {
        icono: dosIcono,
        titulo: 'Warranty Protection',
        texto: 'Over 2 years'
    },
    {
        icono: tresIcono,
        titulo: 'Free Shipping',
        texto: 'Order over 150 $'
    },
    {
        icono: cuatroIcono,
        titulo: '24 / 7 Support',
        texto: 'Dedicated support'
    },
]

const FooterIconos = () => {
  return (
    <div className="container cursor-default mx-auto grid justify-center md:grid-cols-2 2xl:grid-cols-4 gap-14 md:gap-10 py-4">
    { divs.map(elemento => (
        <div key={elemento.titulo} className="flex gap-4">
            <Image
                src={elemento.icono}
                alt=""
                width={50}
            />
            <div>
                <h1 className="font-bold text-xl">{elemento.titulo}</h1>
                <h2 className="text-sm text-[#919191]">{elemento.texto}</h2>
            </div>
        </div>
    ))}
    </div>
  )
}

export default FooterIconos
