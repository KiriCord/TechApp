import React from 'react';
import * as img from "../components/import";

const Task6 = () => {
    return (
        <>
            <div className='container f1'>
                <div className='block'>
                    <div className='avatar-container '>
                        <img className='avatar' src={img.avatar} alt="" />
                    </div>
                    <h2 className='text-center'> Рахманов Артур</h2>
                    <hr />
                    <h3 className='text-center'>О себе</h3>
                    <p className='text-format text-format-font'>Являюсь студентом Башкирского государственного университета 1-го курса магистратуры.
                        Направление подготовки: "Прикладная математика и информатика".
                    </p>
                </div>
            </div>
        </>
    );
}

export default Task6;