import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
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
      <Header />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
