import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { getProductsById } from "./services/productService"

export async function loader({params} : LoaderFunctionArgs){
  if(params.id !== undefined){
    const product = await getProductsById(+params.id)
    if(!product){
        return redirect('/')
    }
    return product
  }
}