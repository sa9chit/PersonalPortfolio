const Card = ({ imgSrc, name }) => {
  return (
    <div className="h-[100%] card z-[-10]  bg-black w-[20vmax] p-5 flex flex-col items-center rounded-2xl justify-center hover:bg-gray-900 hover:scale-105 transition duration-300 cursor-pointer">
      <img src={imgSrc} alt={name} className="h-[26vh] w-full object-cover" />
      <span className="text-white text-lg mt-2">{name}</span>
    </div>
  );
};

export default Card;
