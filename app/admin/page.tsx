import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";


const Admin = () => {
    return ( 
        <section className="mb-40 container mx-auto">
            <h1 className="p-5 text-xl font-semibold">Panel de Administracion</h1>
            <Link
                href={'/admin/create'}
                className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 py-2 md:py-3 px-4 md:px-6 text-xs md:text-base rounded-md text-white"
            >
                Crear Producto
            </Link>
            <ProductsTable/>
        </section>
     );
}
 
export default Admin;