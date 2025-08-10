import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../images/my-photo.png'; 

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#C7C5C5] flex flex-col items-center justify-between overflow-hidden py-6 px-4 md:px-10">
        {/* Верхняя часть с back */}
        <div className="flex items-center justify-center w-full mb-6 md:mb-10">
            <hr className="flex-1 border-white border-2" />
            <Link to="/" className="mx-4 md:mx-6">
            <div className="p-[5px] rounded-full border-4 border-white inline-block">
                <div className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] 
                                flex items-center justify-center 
                                rounded-full bg-[#AE0D0D] hover:bg-gray-900 
                                transition duration-300 text-white font-bold text-center">
                <span className="text-[110%] md:text-[130%] text-outline-white">back</span>
                </div>
            </div>
            </Link>
            <hr className="flex-1 border-white border-2" />
        </div>

        {/* Контент */}
        <div className="flex flex-col md:flex-row flex-1 w-full max-w-[1400px] px-12 md:px-8 gap-10 md:gap-8 items-center justify-center">
            {/* Фото */}
            <div className="flex-1 mt-2 md:mt-0 h-[50vh] md:h-[60vh] flex items-center justify-center">
            <img
                src={myPhoto}
                alt="ArtiK"
                className="object-contain w-full h-full"
            />
            </div>

            {/* Описание */}
            <div className="flex-1 bg-none rounded-[calc(1.5vw+1vh)] flex flex-col border-4 border-white h-auto md:h-[60vh]">
            
                {/* Верхняя часть с заголовком */}
                <div className="py-3 md:py-4">
                    <h1 className="text-[calc(3.5vw+2.7vh)] md:text-[calc(2vw+3vh)] text-gray-900 text-center text-outline-small">
                    About Me
                    </h1>
                    <hr className="border-white border-2" />
                </div>

                {/* Основной текст — центрируем от линии до низа */}
                <div className="flex-1 flex items-center justify-center px-4 md:px-12">
                    <p className="text-lg md:text-[calc(0.8vw+1vh)] text-gray-700 text-outline-small">
                    Hey there! I’m a passionate Web & Python Developer & Web Designer who loves building creative, useful, and fun projects. I work with AI and neural networks, exploring how technology can make life easier and more inspiring.
                    <br /><br />
                    Outside of coding, I’m into sports, running, and living a life full of curiosity, simplicity, and joy. Whether I’m designing smart apps or just enjoying the little things, I always try to stay in flow and make each day meaningful.
                    </p>
                </div>

            </div>
        </div>

        {/* Нижняя линия */}
        <hr className="w-full border-white border-2 mt-10 md:mt-10 mb-[25px] md:mb-[35px]" />
    </div>
  );
}