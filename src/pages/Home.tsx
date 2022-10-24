import React from 'react';
import { Link } from 'react-router-dom';
import * as img from "../components/import";

const Home = () => {
    return (
        <>
            <div className='container f1'>
                <div className='block'>
                    <h3 className='text-center '>Лабораторная работа по Современным компьютерным технологиям</h3>
                    <hr />
                    <div className="logo-size">
                        <img src={img.reactlogo} alt="" />
                    </div>
                    <hr />
                    <h3 className='text-center'>Список задач</h3>
                    <ol className='rectangle'>
                        <li><Link to="/about">О себе</Link></li>
                        <li><Link to="/task1">Слайд-шоу</Link></li>
                        <li><Link to="/task2">Калькулятор</Link></li>
                        <li><Link to="/task3">Корзина</Link></li>
                        <li><Link to="/task4">Тесты</Link></li>
                        <li><Link to="/task5">Карусель</Link></li>
                        <li><Link to="/task6">Города и памятники</Link></li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Home;