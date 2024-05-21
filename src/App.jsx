import './App.css'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/:productId' element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
