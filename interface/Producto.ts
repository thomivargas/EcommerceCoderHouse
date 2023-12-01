interface Producto {
    title: string
    description: string
    inStock: number
    original_price: number
    price: number
    cuotas: { cantidad: number, precioCuota: number, descuento: number }
    slug: string
    image: string
    imageHover: string
    type: string
    nuevo: boolean
    size?: string[]
    calificacion: number
    review: number
    cantidad: number
}