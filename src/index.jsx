import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header/>
        <Home/>
        <Footer/>
    </BrowserRouter>
);

