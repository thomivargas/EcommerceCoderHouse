import Image from "next/image";
import Link from "next/link";


const ProductsTable = async () => {
    const data = await fetch(`http://localhost:3000/api/productos/todos`,
    { cache: 'no-store' }
    ).then(r => r.json());

  return (
    <div className="overflow-x-auto">
        <table className="w-full text-xs text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-3 py-2">titulo</th>
                    <th scope="col" className="px-3 py-2">descripcion</th>
                    <th scope="col" className="px-3 py-2">en Stock</th>
                    <th scope="col" className="px-3 py-2">precio original</th>
                    <th scope="col" className="px-3 py-2">precio</th>
                    <th scope="col" className="px-3 py-2">cuotas</th>
                    <th scope="col" className="px-3 py-2">slug</th>
                    <th scope="col" className="px-3 py-2">image</th>
                    <th scope="col" className="px-3 py-2">imageHover</th>
                    <th scope="col" className="px-3 py-2">tipo</th>
                    <th scope="col" className="px-3 py-2">nuevo</th>
                    <th scope="col" className="px-3 py-2">calificacion</th>
                    <th scope="col" className="px-3 py-2">review</th>
                </tr>
            </thead>
            <tbody>
                { data.map( (item : Producto) => (
                    <tr key={item.slug}>
                        <td className="p-2">{item.title}</td>
                        <td className="p-2">{item.description}</td>
                        <td className="p-2">{item.inStock}</td>
                        <td className="p-2">{item.original_price}</td>
                        <td className="p-2">{item.price}</td>
                        <td className="p-2">{`${item.cuotas.cantidad} - ${item.cuotas.precioCuota} - ${item.cuotas.descuento}`}</td>
                        <td className="p-2">{item.slug}</td>
                        <td className="p-2">
                            <Image
                                src={`/products/${item.image}`}
                                alt=""
                                height={100}
                                width={100}
                            />
                        </td>
                        <td className="p-2">
                            <Image
                                src={`/products/${item.imageHover}`}
                                alt=""
                                height={100}
                                width={100}
                            />
                        </td>
                        <td className="p-2">{item.type}</td>
                        <td className="p-2">{item.nuevo}</td>
                        <td className="p-2">{item.calificacion}</td>
                        <td className="p-2">{item.review}</td>
                        <td className="p-2">
                            <Link   
                                href={`/admin/edit/${item.slug}`}
                                className="rounded bg-sky-600 p-2 text-white"
                            >
                                Editar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTable
