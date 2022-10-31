import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import Market from './pages/Market';
import Task4 from './pages/Tests';
import Tests from './pages/Tests';

const Router = () => {

    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/slider" element={<Slider />} />
                <Route path="/calc" element={<Calculator />} />
                <Route path="/market" element={<Market />} />
                <Route path="/quiz" element={<Tests />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;