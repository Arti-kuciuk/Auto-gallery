import { Link } from 'react-router-dom';

const CarCard = ({ title, image, description }) => {
  const path = `/cars/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`;

  return (
    <div className="bg-none border-4 border-white rounded-[calc(1vw+2vh)] shadow-lg transition-transform duration-300 hover:scale-[1.03] mx-auto h-full flex flex-col">
      {/* Верх: Картинка */}
      <div className="p-5">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-[35vh] md:h-[25vh] lg:h-48 object-contain"
        />
      </div>

      <hr className="border-2 border-white w-full" />

      {/* Низ: Контент + кнопка прибита к низу */}
      <div className="flex flex-col justify-between flex-1 p-5 pt-3">
        <div>
          <h2 className="text-2xl text-gray-900 text-[225%] text-outline">{title}</h2>
          <p className="text-gray-700 text-sm mb-3 text-[100%] text-outline-small">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <Link to={path}>
            <button className="bg-[#AE0D0D] text-white w-[35%] py-2 rounded-[calc(1vw+2vh)] text-outline-white hover:bg-gray-900 hover:text-white transition duration-300">
              Купить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;