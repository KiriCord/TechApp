import React from 'react';
import Monuments from '../components/City/Monuments';

const Task6 = () => {
    return (
        <>
            <div className='container f1'>
                <div className='block'>
                    <h1 className='text-center'>Города и памятники</h1>
                    <hr />
                    <p className='text-format'>4. Написать сценарий обработки теста "Города и памятники". Названия городов и памятников задаются с помощью списков. Пользователь выбирает в левом перечне название города, а в правом - памятник, расположенный в этом городе. После нажатия кнопки Результат в текстовое поле выводится количество правильных ответов.
                        В сценарии используются три глобальные переменные. Переменная q хранит последнее выбранное значение в левом столбце; переменная а - выбранное значение правого столбца; значение переменной sum содержит число правильных ответов. В двух списках для правильной пары "вопрос/ответ" совпадают соответствующие значения параметра value. Эти значения проверяются после выбора элемента списка правого столбца. Результат тестирования можно посмотреть, если нажать кнопку Результат.</p>
                    <hr />
                    <Monuments />
                </div>
            </div>
        </>
    );
}

export default Task6;