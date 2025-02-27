import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProduct from "./views/NewProduct";
import EditProduct from "./views/EditProduct"
import { deleteProductAction, editProductAction, action as newProductAction, updateAvailabilityAction } from "./actions";
import { loader as editProductLoader } from "./loaders";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: 'productos/:id/editar',
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction
      }
    ]
  }
])