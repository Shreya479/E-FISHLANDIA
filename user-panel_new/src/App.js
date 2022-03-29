import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail';
import Helpdesk from './components/Helpdesk'
import Review from './components/Review';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/product/:id/reviews' element={<Review />}/>
        <Route path='/helpdesk' element={<Helpdesk />} />
      </Routes>
    </>
  );
}

export default App;
