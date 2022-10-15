import React from 'react';
import Calc from '../components/Calculator/Calc';

const Task2 = () => {

    return (
        <>
            <div className='calcContainer f1'>
                <div className='block block-hight'>
                    <h3 className='text-center'>Калькулятор</h3>
                    <hr />
                    <div>
                        <Calc />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task2;