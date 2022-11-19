import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import Market from './pages/Market';
import Tests from './pages/Tests';
import Calendars from './pages/Calendars';
import Ellipse from './pages/Ellipse';

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
                <Route path="/calendar" element={<Calendars />} />
                <Route path="/ellipse" element={<Ellipse />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;