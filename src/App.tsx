import Footer from "./components/Footer"
import Header from "./components/Header"
import Restaurants from "./components/Restaurants"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Restaurants />
      <Footer />
    </>
  )
}

export default App
