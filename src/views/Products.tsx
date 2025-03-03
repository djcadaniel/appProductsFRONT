import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/productService";
import { ProductDetails } from "../components/ProductDetails";
import { Product } from "../types";

export async function loader(){
  const products = await getProducts()
  return products
}

export default function Products() {

  const products = useLoaderData() as Product[]

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-xl sm:text-4xl font-black text-slate-700">Productos</h2>
        <Link 
          to='productos/nuevo'
          className="w-full sm:w-auto rounded-md bg-[#5499c7] p-3 text-sm font-bold text-white shadow-sm hover:bg-[#93bfdd] text-center"
        >
          Agregar producto
        </Link>
      </div>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full mt-5 table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-[#FCC71B] text-slate-700 text-md sm:text-lg">
              <tr>
                  <th className="p-2 whitespace-nowrap">Producto</th>
                  <th className="p-2 whitespace-nowrap">Precio</th>
                  <th className="p-2 whitespace-nowrap">Disponibilidad</th>
                  <th className="p-2 whitespace-nowrap">Acciones</th>
              </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products?.map(product => (
              <ProductDetails
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}