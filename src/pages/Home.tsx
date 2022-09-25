import React from 'react';
import { Link } from 'react-router-dom';
import * as img from "../components/import";

const Home = () => {
    return (
        <>
            <div className='container f1'>
                <div className='block'>
                    <div className="logo-size">
                        <img src={img.reactlogo} alt="" />
                    </div>
                    <hr />
                    <h3 className='text-center '>Список задач</h3>
                    <ol className='rectangle'>
                        <li><Link to="/task1">Слайд-шоу</Link></li>
                        <li><Link to="/task2">Неизвестно</Link></li>
                        <li><Link to="/task3">Неизвестно</Link></li>
                        <li><Link to="/task4">Неизвестно</Link></li>
                        <li><Link to="/task5">Неизвестно</Link></li>
                        <li><Link to="/task6">О себе</Link></li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Home;