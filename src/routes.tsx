import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='restaurants_details' element={<Details />} />
    </Routes>
)

export default Rotas