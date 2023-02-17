import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Collection from './components/Collection'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { calculateTotal } from './redux/CartItemsSlice'
import './App.css'
const Layout = () => {
  const { isChartOpen } = useSelector((state) => state.cart)
  return (
    <div>
      <Header />
      {isChartOpen && <Cart />}
      <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Collection />
      },
      {
        path: "/product/:nameParam",
        element: <ProductDetails />
      }
    ]
  }
]);
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <div className="min-h-screen">
      <RouterProvider router={router}></RouterProvider>


    </div>
  )
}

export default App
