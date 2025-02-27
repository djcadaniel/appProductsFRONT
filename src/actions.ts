import { ActionFunctionArgs, redirect } from "react-router-dom"
import { addProduct, deleteProduct, updateProduct, updateProductAvailability } from "./services/productService"

export async function action({request}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  
  let error = ''
  if(Object.values(data).includes('')){
    error = 'Todos los campos son obligatorios'
  }
  if(error.length){
    return error
  }

  await addProduct(data)
  return redirect('/')
  
}

export async function editProductAction({request, params}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  
  let error = ''
  if(Object.values(data).includes('')){
    error = 'Todos los campos son obligatorios'
  }
  if(error.length){
    return error
  }

  if(params.id !== undefined){
    await updateProduct(data, +params.id)
    return redirect('/')
  }
  
}

export async function deleteProductAction({params}: ActionFunctionArgs){
  if(params.id !== undefined){
    await deleteProduct(+params.id)
    return redirect('/')
  }
}

export async function updateAvailabilityAction({request}:ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return{}
}