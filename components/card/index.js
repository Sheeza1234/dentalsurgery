

const Card = ({ label }) => {
  return (
    <div className="flex items-end justify-center bg-[#D9D9D9] h-[400px] w-72 rounded-md shadow-md">
      <div style={{fontFamily:'Inters'}} className="mb-[30px] bg-[#1C4C57] text-white text-sm px-4 py-2 rounded-full">
        {label}
      </div>
    </div>
  );
};

export default Card;