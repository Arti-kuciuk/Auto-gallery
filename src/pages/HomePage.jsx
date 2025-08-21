import React from 'react';
import CarCard from '../CarCard'; 
import { Link } from 'react-router-dom';

import RightCorner from '../assets/right-corner.svg';
import LeftCorner from '../assets/left-corner.svg';

import AudiQ8Img from '../images/Audi-q8.png';
import Porsche911Img from '../images/Porsche-911.png';
import AudiS7Img from '../images/Audi-s7.png';
import AudiRS6Img from '../images/Audi-rs6.png';
import PorscheTaycanImg from '../images/Porsche-taycan.png';
import BMWM4Img from '../images/BMW-m4.png';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#C7C5C5] grid place-items-center overflow-x-hidden px-4 md:px-12">
      {/* Линии в верхней части */}
      <div className="hidden md:absolute top-[7vh] w-full z-10 px-8">
        <hr className="border-2 w-full mx-auto" />
        <hr className="border-2 w-5/6 mx-auto mt-[7vh]" />
      </div>

      {/* SVG в правом верхнем углу */}
      <img
        src={RightCorner}
        alt="decorative curve"
        className="absolute top-0 right-0 w-[230px] md:w-[300px] lg:w-[400px] z-15 pointer-events-none select-none"
      />

      {/* Контент по центру */}
      <div className="hidden md:inline-block z-10 text-center space-y-12 w-full mt-[30vh]">
        {/* Заголовок */}
        <h1 className="text-[25vw] md:text-[15vw] font-bold flex flex-col md:flex-row items-center justify-center">
          <span className="text-gray-900">Auto</span>
          <span className="bg-[#AE0D0D] text-white px-12 md:px-6 md:ml-4 mt-4 md:mt-0 rounded-[5vw] md:rounded-[calc(1vw+2vh)]">
            gallery
          </span>
        </h1>

        {/* Подзаголовок */}
        <div className="md:inline-block hidden border-4 border-white rounded-[3vw] px-6 py-3 md:px-12 md:py-6">
          <p className="text-[4vw] md:text-[3vw] text-gray-600 font-semibold">
            The art of automotive elegance
          </p>
        </div>
      </div>

      {/* Мобильная версия - 100% высоты экрана */}
      <div className="md:hidden w-full h-screen flex flex-col items-center justify-center p-4 relative">
        {/* Верхние линии */}
        <div className="absolute top-[5vh] w-full z-10">
          <hr className="border-2 border-white w-[90vw] mx-auto" />
          <hr className="border-2 border-white w-[75vw] mx-auto mt-[5vh]" />
          <hr className="border-2 border-white w-[60vw] mx-auto mt-[5vh]" />
        </div>

        {/* Центральный контейнер с текстом */}
        <div className="z-10 flex items-center justify-center">
          <div className="w-[50vw] h-[50vw] rounded-[calc(1vw+2vh)] border-4 border-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-900 text-8xl mb-2 text-outline">Auto</div>
              <br />
              <div className="text-[#AE0D0D] text-7xl text-outline-red">Gallery</div>
            </div>
          </div>
        </div>

        {/* Нижние линии */}
        <div className="absolute bottom-[5vh] w-full z-10">
          <hr className="border-2 border-white w-[60vw] mx-auto mb-[5vh]" />
          <hr className="border-2 border-white w-[75vw] mx-auto mb-[5vh]" />
          <hr className="border-2 border-white w-[90vw] mx-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-[10vh]">
        <CarCard
          title="Audi Q8"
          image={AudiQ8Img}
          description="A powerful SUV with futuristic design and advanced technologies."
        />
        <CarCard
          title="Porsche 911"
          image={Porsche911Img}
          description="An iconic blend of speed and style with a rear-engine layout."
        />
        <CarCard
          title="Audi S7"
          image={AudiS7Img}
          description="A sleek liftback offering premium comfort and dynamic performance."
        />
        <CarCard
          title="Audi RS6"
          image={AudiRS6Img}
          description="A fast wagon combining luxury, space, and incredible power."
        />
        <CarCard
          title="Porsche Taycan"
          image={PorscheTaycanImg}
          description="An electric sports car with Porsche DNA and thrilling acceleration."
        />
        <CarCard
          title="BMW M4"
          image={BMWM4Img}
          description="A high-performance coupe with aggressive design and track capabilities."
        />
      </div>

      {/* Подпись внизу */}
      <Link to="/about">
        <div className="mx-auto my-[7vh] p-[7px] rounded-full border-4 border-white inline-block">
          <div className="w-[140px] h-[140px] 
                          flex flex-col items-center justify-center 
                          rounded-full bg-[#AE0D0D] hover:bg-gray-900 
                          transition duration-300 text-white font-bold text-center">
            <span className="text-[170%] text-outline-white">Made</span>
            <span className="text-[170%] text-outline-white">by ArtiK</span>
          </div>
        </div>
      </Link>
      <hr className="border-2 w-5/6 mx-auto mb-[7vh]" />

      <img
        src={LeftCorner}
        alt="decorative curve"
        className="absolute bottom-0 left-0 w-[250px] md:w-[270px] lg:w-[350px] z-15 pointer-events-none select-none"
      />
      
    </div>
  );
}