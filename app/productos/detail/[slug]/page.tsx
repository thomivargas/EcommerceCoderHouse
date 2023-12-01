import Footer from "@/components/InicioComponents/Footer/footer"
import DetailCard from "@/components/detailCard/detailCard"

type Params = {
    slug: string
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