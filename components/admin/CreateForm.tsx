'use client'
import { useState } from "react"

const CreateForm = () => {
  const [ values, setValues ] = useState({
    title: '',
    description: '',
    inStock: 0,
    original_price: 0,
    price: 0,
    cuotas: {cantidad: 0, precioCuota: 0, descuento: 0},
    slug: '',
    image: '',
    imageHover: '',
    type: '',
    nuevo: false,
    calificacion: 0,
    review: 0
  }) 

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div className="container m-auto mt-6 xl:max-w-5xl">
      <form onSubmit={handleSubmit} className="my-12">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label> Slug: </label>
            <input 
              type="text" 
              value={values.slug}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="slug"
              onChange={handleChange}
            />
          </div>
          <div>
            <label> Titulo: </label>
            <input 
              type="text" 
              value={values.title}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label> description: </label>
            <input 
              type="text" 
              value={values.description}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>en Stock: </label>
            <input 
              type="number" 
              value={values.inStock}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="inStock"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>original price: </label>
            <input 
              type="number" 
              value={values.original_price}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="original_price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price: </label>
            <input 
              type="number" 
              value={values.price}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Cantidad de cuotas:</label>
            <input 
              type="number" 
              value={values.cuotas.cantidad}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="cantidad"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Precio de la cuota:</label>
            <input 
              type="number" 
              value={values.cuotas.precioCuota}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="precioCuota"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descuento de la cuotas:</label>
            <input 
              type="number" 
              value={values.cuotas.descuento}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="descuento"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>image: </label>
            <input 
              type="text" 
              value={values.image}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>image hover: </label>
            <input 
              type="text" 
              value={values.imageHover}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="imageHover"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Tipo: </label>
            <input 
              type="text" 
              value={values.type}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="type"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nuevo: </label>
            <select 
              name="nuevo"
              onChange={handleChange}
              className="p-2 rounded w-full border border-blue-200 block my-4"
              required
            >
              <option value="true">si</option>
              <option value="false">no</option>
            </select>
          </div>
          <div>
            <label>Calificacion: </label>
            <select 
              name="calificacion"
              onChange={handleChange}
              className="p-2 rounded w-full border border-blue-200 block my-4"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label>Review: </label>
            <input 
              type="number" 
              value={values.review}
              required
              className="p-2 rounded w-full border border-blue-200 block my-4"
              name="review"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 py-2 md:py-3 px-4 md:px-6 text-xs md:text-base rounded-md text-white">
          Crear nuevo producto
        </button>
      </form>
    </div>
  )
}

export default CreateForm
