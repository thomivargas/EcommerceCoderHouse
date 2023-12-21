import ProductoCard from "@/components/productoCard/productoCard";

type Params = {
    categoria: string;
}

export function generateStaticParams (){
    return [
        { categoria: 'todos'},
        { categoria: 'living'},
        { categoria: 'bedroom'},
        { categoria: 'dining'}
    ]
}

export const revalidate = 3600

const Productos = async ({ params }: { params: Params }) => {
    const data = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${params.categoria}`,
        { cache: 'no-store' }
    ).then(r => r.json());

    return (
        <main className="bg-[#EBEBEB]">
            <div className="container mx-auto">
                <div className="py-24 grid justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {data.map((item: Producto) => (
                        <ProductoCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Productos