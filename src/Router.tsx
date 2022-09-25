import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slide from './components/Slide/Slide';
import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';
import Task6 from './pages/Task6';

const Router = () => {

    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task1" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
                <Route path="/task3" element={<Task3 />} />
                <Route path="/task4" element={<Task4 />} />
                <Route path="/task5" element={<Task5 />} />
                <Route path="/task6" element={<Task6 />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;