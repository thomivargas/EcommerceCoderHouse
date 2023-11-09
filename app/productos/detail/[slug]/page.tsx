import Footer from "@/components/Footer/footer"
import DetailCard from "@/components/detailCard/detailCard"
import { mockData } from "@/data/products"

type Params = {
    slug: string
}

const DetailPage = ({params} : {params: Params}) => {
    const {slug} = params
    const items = mockData.filter(product => product.slug === slug)

    return (
        <>
            <main className="container mx-auto">
                {items.map(item => (
                    <div key={item.slug}>
                        <DetailCard item={item}/>
                    </div>
                ))}
            </main>
            <Footer/>
        </>
    )
}

export default DetailPage