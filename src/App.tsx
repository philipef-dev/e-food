import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import Home from "./pages/Home"
import Details from "./pages/Details"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'restaurants_details',
    element: <Details />

  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
