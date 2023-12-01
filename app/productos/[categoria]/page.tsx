import ProductoCard from "@/components/productoCard/productoCard";

type Params = {
    categoria: string;
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
    const data = await fetch(`http://localhost:3000/api/productos/${params.categoria}`,
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