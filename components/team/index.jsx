import Image from "next/image";
import Reviews from "../reviews/index";
import RequestAppointment from "../appointment";

const MeetTheTeam = () => {
  const teamMembers = [
    { id: 1, name: "Member 1", image: "/images.png" },
    { id: 2, name: "Member 2", image: "/images.png" },
    { id: 3, name: "Member 3", image: "/images.png" },
    { id: 4, name: "Member 4", image: "/images.png" },
    { id: 5, name: "Member 5", image: "/images.png" },
    { id: 6, name: "Member 6", image: "/images.png" }
  ];

  return (
    <div>
      {/* Section Container */}
      <div className="bg-[#C7EFFF] text-center py-8 px-4">
        {/* Title */}
        <h1
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-3xl sm:text-5xl lg:text-8xl font-semibold text-[#1C4C57] mb-6 sm:mb-8"
        >
          Meet the Team
        </h1>

        {/* Team Grid */}
        <div className="w-[1500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center ml-64 px-4 sm:px-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C4C57] rounded-2xl p-4 w-full max-w-[380px] h-[400px] flex flex-col items-center justify-between shadow-lg mx-auto"
            >
              {/* Image Container */}
              <div className="w-60 h-60 rounded-full overflow-hidden mt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="bg-[#C7EFFF] text-[#1C4C57] rounded-full px-4 py-3 text-lg sm:text-xl font-medium w-full text-center mt-4">
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
