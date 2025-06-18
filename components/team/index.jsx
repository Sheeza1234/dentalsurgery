import Image from "next/image";
import Reviews from "../reviews/index";
import RequestAppointment from "../appointment";

const MeetTheTeam = () => {
  const teamMembers = [
    { id: 1, name: "Dr Saba", image: "/dr_saba.jpg" },
    { id: 2, name: "Alarna", image: "/alarna.jpg" },
    { id: 3, name: "B", image: "/budha.jpg" },
    { id: 4, name: "M", image: "/chitu.jpg" },
    { id: 5, name: "A", image: "/chini.jpg" },
    { id: 6, name: "M", image: "/mansoora.jpg" },
     { id: 7, name: "A", image: "/kalu.jpg" },
    { id: 8, name: "M", image: "/gori.jpg" }
  ];

  return (
    <div>
      {/* Section Container */}
      <div className="bg-[#C7EFFF] text-center py-8 px-4 ">
        {/* Title */}
        <h1
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#1C4C57] mb-6 sm:mb-10"
        >
          Meet the Team
        </h1>

        {/* Team Grid */}
        <div className="items-center justify-between  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 px-4  max-w-[1700px] mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C4C57] rounded-2xl p-4 max-w-sm  mx-auto h-[400px] flex flex-col items-center justify-between shadow-lg"
            >
              {/* Image Container */}
             <div className="flex flex-col items-center gap-4">
  <div className="relative w-96 h-64 sm:w-72 sm:h-44">
    {/* Blob Background */}
   <div className="relative w-84 h-32 sm:w-[268px] sm:h-[310px] rounded-full bg-[#BFD4F2] overflow-hidden flex items-center justify-center">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover"
  />
</div>

  </div>

  {/* Name */}
 
</div>
 <div className="bg-[#C7EFFF] text-[#1C4C57] rounded-full px-4 py-2 sm:py-3 text-base sm:text-lg font-medium w-full text-center mt-4">
    {member.name}
  </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews CustomComponent={RequestAppointment} />
    </div>
  );
};

export default MeetTheTeam;
