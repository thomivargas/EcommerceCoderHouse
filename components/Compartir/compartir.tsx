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
                <p className="text-[#757575] font-semibold">comparte tu setup con</p>
                <h1 className="font-bold text-3xl">#FuniroFurniture</h1>
            </div>
            <div className="mx-5 flex flex-col items-center lg:flex-row gap-3">
                <div>
                    <div className="flex justify-between items-end gap-3">
                        <Image
                            src={compartir_1}
                            width={80}
                            alt=""
                        />
                        <Image
                            src={compartir_2}
                            width={380}
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-start gap-3 mt-3">
                        <Image
                            src={compartir_3}
                            width={180}
                            alt=""
                        />
                        <Image
                            src={compartir_4}
                            width={300}
                            alt=""
                        />
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <Image
                        src={compartir_5}
                        width={220}
                        alt=""
                    />
                </div>
                <div>
                    <div className="flex gap-3 items-end">
                        <Image
                            src={compartir_6}
                            width={250}
                            alt=""
                        />
                        <Image
                            src={compartir_8}
                            width={200}
                            alt=""
                        />
                    </div>
                    <div className="flex items-start justify-between gap-3 mt-3">
                        <Image
                            src={compartir_7}
                            width={140}
                            alt=""
                        />
                        <Image
                            src={compartir_9}
                            width={300}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Compartir;