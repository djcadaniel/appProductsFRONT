import { Link, Form, useActionData} from "react-router-dom"
import { ErrorMessagge } from "../components/ErrorMessagge"
import { ProductForm } from "../components/ProductForm"


export default function NewProduct(){

  const error = useActionData()
  console.log(error)

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl sm:text-4xl font-black text-slate-700">Productos</h2>
        <Link 
          to='/'
          className="rounded-md bg-[#5499c7] p-3 text-sm font-bold text-white shadow-sm hover:bg-[#93bfdd]"
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
          className="mt-5 w-full p-2 bg-[#FCC71B] text-slate-700 font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  )
}