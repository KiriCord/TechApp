import React from 'react';
import * as img from "../components/import";

const About = () => {
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
                    <a className='text-center' href="https://github.com/KiriCord"><h5>GitHub</h5></a>
                </div>
            </div>
        </>
    );
}

export default About;