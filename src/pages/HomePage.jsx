import React from 'react';
import CarCard from '../CarCard'; 
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#C7C5C5] grid place-items-center overflow-x-hidden px-12">
      {/* Линии в верхней части */}
      <div className="absolute top-[7vh] w-full z-10 px-8">
        <hr className="border-2 w-full mx-auto" />
        <hr className="border-2 w-5/6 mx-auto mt-[7vh]" />
      </div>

      {/* SVG в правом верхнем углу */}
      <img
        src="src/assets/right-corner.svg"
        alt="decorative curve"
        className="absolute top-0 right-0 w-[230px] md:w-[300px] lg:w-[400px] z-15 pointer-events-none select-none"
      />

      {/* Контент по центру */}
      <div className="z-10 text-center space-y-12 w-full mt-[30vh]">
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

        <div className="inline-block md:hidden border-3 border-white rounded-[3vw] px-5 py-2">
          <p className="text-[4vw] text-gray-600 font-semibold">
            Automotive elegance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-[10vh]">
        <CarCard
          title="Audi Q8"
          image="src/images/Audi-q8.png"
          description="A powerful SUV with futuristic design and advanced technologies."
        />
        <CarCard
          title="Porsche 911"
          image="src/images/Porsche-911.png"
          description="An iconic blend of speed and style with a rear-engine layout."
        />
        <CarCard
          title="Audi S7"
          image="src/images/Audi-s7.png"
          description="A sleek liftback offering premium comfort and dynamic performance."
        />
        <CarCard
          title="Audi RS6"
          image="src/images/Audi-rs6.png"
          description="A fast wagon combining luxury, space, and incredible power."
        />
        <CarCard
          title="Porsche Taycan"
          image="src/images/Porsche-taycan.png"
          description="An electric sports car with Porsche DNA and thrilling acceleration."
        />
        <CarCard
          title="BMW M4"
          image="src/images/BMW-m4.png"
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
        src="src/assets/left-corner.svg"
        alt="decorative curve"
        className="absolute bottom-0 left-0 w-[250px] md:w-[270px] lg:w-[350px] z-15 pointer-events-none select-none"
      />
      
    </div>
  );
}