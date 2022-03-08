import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />\
      </Routes>
    </>
  );
}

export default App;