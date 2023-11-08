import ProductoCard from "@/components/productoCard/productoCard";
import { mockData } from "@/data/products"

type Params = {
    categoria: string; 
}

const Productos = ({params} : {params: Params}) => {
    const { categoria } = params

    const items = categoria === 'todos'
                    ? mockData
                    : mockData.filter(product => product.type === categoria)

    if (items.length === 0) return
    
    return (
        <main className="bg-[#EBEBEB]">
            <div className="container mx-auto">
                <div className="py-24 grid justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {items.map(item => (
                        <ProductoCard key={item.slug} item={item}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Productos