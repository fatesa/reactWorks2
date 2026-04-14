import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'

function App() {


  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/products/:id" element={<ProductInfo />} />
          </Routes>          
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
