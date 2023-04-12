import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactosPages';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPages'


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='nosotros' element={<NosotrosPage/>}/>
          <Route path='novedades' element={<NovedadesPage/>}/>
          <Route path='contacto' element={<ContactoPage/>}/>
        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
