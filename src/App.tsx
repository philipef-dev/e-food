import { GlobalStyle } from "./styles/global"
import Rotas from "./routes"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { Provider } from "react-redux"
import Cart from "./cart"
import Checkout from "./components/Checkout"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
