import React from 'react';
import { useParams, Link } from 'react-router-dom';
import carsData from '../data/carsData';

export default function CarDetailsPage() {
  const { carId } = useParams();
  const car = carsData[carId];

  if (!car) return <div className="text-center text-red-500">Car not found</div>;

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
      <div className="flex flex-col md:flex-row flex-1 w-full max-w-[1400px] px-4 md:px-8 gap-10 md:gap-8 items-center justify-center">
        
        {/* Фото + Название в одной рамке на десктопе */}
        <div className="flex-1 h-auto md:h-[70vh] flex flex-col justify-between items-center border-0 md:border-4 border-white rounded-[3vw] overflow-hidden">
          {/* Фото */}
          <div className="h-[40vh] md:h-[55vh] w-full flex items-center justify-center">
            <img
              src={car.image}
              alt={car.title}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Линия разделитель (только десктоп) */}
          <hr className="hidden md:block border-white border-2 w-full" />

          {/* Название (десктоп) */}
          <div className="hidden md:flex items-center justify-center w-full py-4">
            <p className="text-[3vw] text-gray-900 font-semibold text-outline-small">
              {car.title}
            </p>
          </div>
        </div>

        {/* Описание + Кнопка */}
        <div className="flex-1 bg-none rounded-[3vw] flex flex-col border-4 border-white h-auto md:h-[70vh]">
          
          {/* Название для мобильной версии */}
          <div className="md:hidden px-4 md:px-6 py-3 md:py-4">
            <h1 className="text-[7vw] text-gray-900 text-center text-outline-small leading-tight">
              {car.title}
            </h1>
          </div>
          <hr className="md:hidden border-white border-2 mt-2" />

          {/* Описание */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-3">
            <p className="text-lg md:text-[calc(1vw+1vh)] text-gray-800 text-center text-outline-small leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* Кнопка */}
          <div className="p-4 md:p-6">
            <div className="bg-[#AE0D0D] text-white text-[5vw] md:text-3xl font-bold text-center py-2 md:py-4 rounded-[1vw]">
              {car.price}
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя линия */}
      <hr className="w-full border-white border-2 mt-6 md:mt-10 mb-[25px] md:mb-[35px]" />
    </div>
  );
}