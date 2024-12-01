import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import Rotas from "./routes"
import Cart from "./cart"
import Checkout from "./components/Checkout"
import Payment from "./components/Payment"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
        <Checkout />
        <Payment />
      </BrowserRouter>
    </Provider>
  )
}

export default App
