import { Link, Form, useActionData, useLoaderData } from "react-router-dom"
import { ErrorMessagge } from "../components/ErrorMessagge"
import { Product } from "../types"
import { ProductForm } from "../components/ProductForm"

const availabilityOptions = [
  { name: 'Disponible', value: true},
  { name: 'No Disponible', value: false}
]

export default function EditProduct(){

  const product = useLoaderData() as Product
  const error = useActionData()

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>
        <Link 
          to='/'
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Volver a Productos
          {/* {product.name} */}
        </Link>
      </div>

    {error && <ErrorMessagge>{error}</ErrorMessagge>}

    <Form
      className="mt-10"
      method="POST"
    >
      <ProductForm 
        product = {product}
      />
      <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="availability"
        >
          Disponibilidad:
        </label>
        <select 
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product?.availability.toString()}
        >
            {availabilityOptions.map(option => (
              <option key={option.name} value={option.value.toString()}>{option.name}</option>
            ))}
        </select>
      </div>
      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
        value="Actualizar Producto"
      />
      </Form>
    </>
  )
}