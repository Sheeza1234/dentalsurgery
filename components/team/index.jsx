import Image from "next/image";
import Reviews from "../reviews/index";
import RequestAppointment from "../appointment";

const MeetTheTeam = () => {
  const teamMembers = [
    { id: 1, name: "Dr Saba", image: "/dr_saba.png" },
    { id: 2, name: "Bill", image: "/images.png" },
    { id: 3, name: "Bryan", image: "/images.png" },
    { id: 4, name: "Mark", image: "/images.png" },
    { id: 5, name: "Alarna", image: "/images.png" },
    { id: 6, name: "Mansoora", image: "/images.png" }
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
        <div className="items-center justify-between  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-6 px-4  max-w-[1800px] mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C4C57] rounded-2xl p-4 max-w-sm  mx-auto h-[300px] flex flex-col items-center justify-between shadow-lg"
            >
              {/* Image Container */}
             <div className="flex flex-col items-center gap-4">
  <div className="relative w-64 h-48 sm:w-64 sm:h-44">
    {/* Blob Background */}
   <div className="relative w-56 h-32 sm:w-56 sm:h-48 rounded-full bg-[#BFD4F2] overflow-hidden flex items-center justify-center">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover"
  />
</div>

  </div>

  {/* Name */}
  <div className="bg-[#C7EFFF] text-[#1C4C57] rounded-full px-4 py-2 sm:py-3 text-base sm:text-lg font-medium w-full text-center mt-4">
    {member.name}
  </div>
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
