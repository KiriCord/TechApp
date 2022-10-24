import React from 'react';
import Carousel from '../components/Carousel/Carousel';

const Task5 = () => {
    return (
        <>
            <div className='container f1'>
                <div className='block block-carousel'>
                    <h1 className='text-center'>Карусель</h1>
                    <hr />
                    <p className='text-format'>3. Создайте "карусель". Возьмите пять картинок, разместите их по кругу. Внизу две кнопки - Запустить карусель и Остановить карусель! При запуске карусели картинки меняются местами по часовой стрелке, создавая эффект вращения.</p>
                    <hr />
                    <Carousel />
                </div>
            </div>
        </>
    );
}

export default Task5;