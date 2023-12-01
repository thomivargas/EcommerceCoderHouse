import ListaProducto from "@/components/Cart/listaProducto";

const Cart = () => {
    return ( 
        <section className="mb-40 container mx-auto">
        <h1 className="p-5 text-xl font-semibold">Shopping Cart</h1>
            <div className="min-h-[80vh] lg:min-h-[45vh] flex flex-col lg:flex-row gap-10 justify-between">
                <ListaProducto/>
            </div>
        </section>
     );
}
 
export default Cart;