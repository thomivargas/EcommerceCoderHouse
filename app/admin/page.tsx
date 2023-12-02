import ProductsTable from "@/components/admin/ProductsTable";


const Admin = () => {
    return ( 
        <section className="mb-40 container mx-auto">
            <h1 className="p-5 text-xl font-semibold">Panel de Administracion</h1>
            <ProductsTable/>
        </section>
     );
}
 
export default Admin;