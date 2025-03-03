import { Form, useFetcher, useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { CiEdit } from "react-icons/ci"
import { MdDelete } from "react-icons/md"

type ProductsDetailProps = {
  product: Product
}

export const ProductDetails = ({product}: ProductsDetailProps) => {

  const fetcher = useFetcher()
  const navigate = useNavigate()
  const isAvailable = product.availability

  return (
     <tr className="border-b ">
        <td className="p-3 text-md md:text-lg text-gray-800">
          {product.name}
        </td>
        <td className="p-3 text-md md:text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
          <fetcher.Form method="POST">
            <button
              type="submit"
              name="id"
              value={product.id}
              className={`${isAvailable ? ' bg-green-400 text-white' : 'bg-red-500 text-white'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
            >
              { isAvailable ? 'Disponible' : 'No disponible' }
            </button>
          </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-5 items-center justify-center">
            <button
              onClick={()=> navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg p-1 uppercase font-bold text-xs text-center cursor-pointer"
            >
              <CiEdit className="text-lg"/>
            </button>
            <Form
              className="flex items-center justify-center"
              method="POST"
              action={`productos/${product.id}/eliminar`}
              onSubmit={(e)=>{
                if(!confirm('¿Eliminar?')){
                  e.preventDefault()
                }
              }}
            >
              <button 
                type="submit" 
                className="bg-red-600 text-white rounded-lg p-1 uppercase font-bold text-xs text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <MdDelete className="text-lg"/>
              </button>
            </Form>
          </div>
        </td>
    </tr>
  )
}