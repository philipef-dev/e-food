import { GlobalStyle } from "./styles/global"
import Rotas from "./routes"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { Provider } from "react-redux"
import Cart from "./cart"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
