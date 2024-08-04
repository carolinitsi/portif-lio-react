import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Me from './pages/Me/Me';
import Projetos from './pages/Projetos/Projetos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function MyRoutes({theme}) {
    
    return (
        <BrowserRouter> 
            <Header/>
            <Routes>
                <Route path='/portif-lio-react' element={<Me theme={theme}/>} exact />
                <Route path='/portif-lio-react/projetos' element={<Projetos theme={theme}/>} exact />
            </Routes>
            <Footer/>
        </BrowserRouter>
)}

export default MyRoutes;