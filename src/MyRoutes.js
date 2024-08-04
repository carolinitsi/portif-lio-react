import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Me from './pages/Me/Me';
import Projetos from './pages/Projetos/Projetos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contato from './pages/Contato/Contato';

function MyRoutes({theme}) {
    
    return (
        <BrowserRouter> 
            <Header/>
            <Routes>
                <Route path='/' element={<Me theme={theme}/>} exact />
                <Route path='/projetos' element={<Projetos theme={theme}/>} exact />
            </Routes>
            <Footer/>
        </BrowserRouter>
)}

export default MyRoutes;