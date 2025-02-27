import { Link, Form, useActionData} from "react-router-dom"
import { ErrorMessagge } from "../components/ErrorMessagge"
import { ProductForm } from "../components/productForm"

export default function NewProduct(){

  const error = useActionData()
  console.log(error)

  return (
    <>
      <div className="flex justify-between">
      <h2 className="text-4xl font-black text-slate-500">Registrar Producto</h2>
      <Link 
        to='/'
        className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
      >
        Volver a Productos
      </Link>
    </div>

    {error && <ErrorMessagge>{error}</ErrorMessagge>}

    <Form
      className="mt-10"
      method="POST"
    >
      <ProductForm />
      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
        value="Registrar Producto"
      />
      </Form>
    </>
  )
}