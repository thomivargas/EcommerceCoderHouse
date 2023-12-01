import Image from "next/image";
import compartir_1 from "@/assets/compartir/compartir_1.png"
import compartir_2 from "@/assets/compartir/compartir_2.png"
import compartir_3 from "@/assets/compartir/compartir_3.png"
import compartir_4 from "@/assets/compartir/compartir_4.png"
import compartir_5 from "@/assets/compartir/compartir_5.png"
import compartir_6 from "@/assets/compartir/compartir_6.png"
import compartir_7 from "@/assets/compartir/compartir_7.png"
import compartir_8 from "@/assets/compartir/compartir_8.png"
import compartir_9 from "@/assets/compartir/compartir_9.png"

const Compartir = () => {
    return ( 
        <section className="container mx-auto my-24 flex flex-col items-center gap-5">
            <div className="text-center cursor-default">
                <p className="text-[#757575] text-sm md:text-base font-semibold">comparte tu setup con</p>
                <h1 className="font-bold text-2xl md:text-3xl">#FuniroFurniture</h1>
            </div>
            <div className="mx-2 flex flex-col items-center lg:flex-row gap-3">
                <div className="container">
                    <div className="flex items-end justify-center md:justify-end gap-3">
                        <Image
                            src={compartir_1}
                            width={80}
                            height={80}
                            alt=""
                            className="hidden lg:flex"
                        />
                        <Image
                            src={compartir_2}
                            width={300}
                            height={300}
                            alt=""
                        />
                    </div>
                    <div className="flex justify-end items-start gap-3 mt-3">
                        <Image
                            src={compartir_3}
                            width={180}
                            height={180}
                            alt=""
                            className="hidden lg:flex"
                        />
                        <Image
                            src={compartir_4}
                            width={300}
                            height={300}
                            alt=""
                        />
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <Image
                        src={compartir_5}
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="flex gap-3 justify-center md:justify-start items-end">
                        <Image
                            src={compartir_6}
                            width={250}
                            height={250}
                            alt=""
                        />
                        <Image
                            src={compartir_8}
                            width={200}
                            height={200}
                            alt=""
                            className="hidden lg:flex"
                        />
                    </div>
                    <div className="flex items-start justify-center md:justify-start gap-3 mt-3">
                        <Image
                            src={compartir_7}
                            width={180}
                            height={180}
                            alt=""
                            className="hidden lg:flex"
                        />
                        <Image
                            src={compartir_9}
                            width={270}
                            height={270}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Compartir;