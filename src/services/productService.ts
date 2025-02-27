import { safeParse, pipe, unknown, transform, parse } from "valibot";
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types";
import axios from "axios";
import { toBoolean } from "../utils";

type ProductData = {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData){
  try{
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price
    })
    if(result.success){
      const url = `${import.meta.env.VITE_API_URL}/api/products`
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price
      })
    }else{
      throw new Error('Datos no válidos')
    }
    console.log(result)
  }catch(e){
    console.log(e)
  }
}

export async function getProducts(){
  try{
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const {data} = await axios(url)
    console.log(data)
    const result = safeParse(ProductsSchema, data.data)
    if(result.success){
      return result.output
    }else{
      throw new Error('Hubo un error')
    }
  }catch(error){
    console.log(error)
  }
}

export async function getProductsById(id: Product['id']){
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const {data} = await axios(url);
    const result = safeParse(ProductSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error al parsear los datos");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error); // Verifica si hay errores
    // throw new Error("Error al obtener el producto");
  }
}

export async function updateProduct( data : ProductData, id: Product['id']){
  try{

    const NumberSchema = pipe(unknown(), transform(Number))

    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: parse(NumberSchema, data.price),
      availability: toBoolean(data.availability.toString())
    })
    
    if(result.success){
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, result.output)
    }

  }catch(e){
    console.log(e)
  }
}

export async function deleteProduct( id:Product['id'] ){
  try{
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
    await axios.delete(url)
  }catch(e){
    console.log(e)
  }
}

export async function updateProductAvailability(id:Product['id']){
  try{
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
    await axios.patch(url)
  }catch(e){
    console.log(e)
  }
}