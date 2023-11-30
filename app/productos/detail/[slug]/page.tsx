import Footer from "@/components/Footer/footer"
import DetailCard from "@/components/detailCard/detailCard"

type Params = {
    slug: string
}

type Producto = {
    title: string,
    description: string,
    inStock: number,
    original_price: number,
    price: number,
    cuotas: { cantidad: number, precioCuota: number, descuento: number },
    slug: string,
    image: string,
    imageHover: string,
    type: string,
    nuevo: boolean,
    size?: string[],
    calificacion: number,
    review: number
}

const DetailPage = async ({params} : {params: Params}) => {
    const {slug} = params
    const data = await fetch(`http://localhost:3000/api/product/${slug}`,
        { cache: 'no-store' }
    ).then(r => r.json());

    return (
        <>
            <main className="container mx-auto">
                <div>
                    <DetailCard item={data}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default DetailPage