import Reviews from "../reviews/index";

const MeetTheTeam = () => {
  const teamMembers = [
    { id: 1, name: "Member 1", image: "/images.png" },
    { id: 2, name: "Member 2", image: "/images.png" },
    { id: 3, name: "Member 3", image: "/images.png" },
    { id: 4, name: "Member 4", image: "/images.png" },
    { id: 5, name: "Member 5", image: "/images.png" },
    { id: 6, name: "Member 6", image: "/images.png" },
    { id: 7, name: "Member 7", image: "/images.png" },
    { id: 8, name: "Member 8", image: "/images.png" },
    { id: 9, name: "Member 9", image: "/images.png" },
    { id: 10, name: "Member 10", image: "/images.png" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center px-4 sm:px-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C4C57] rounded-2xl p-4 w-full max-w-[280px] h-auto flex flex-col items-center justify-between shadow-lg mx-auto"
            >
              {/* Image Container */}
              <div className="w-40 h-40 rounded-full overflow-hidden mt-6">
                <img
                  src={member.image}
                  alt={member.name}
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
      <Reviews />
    </div>
  );
};

export default MeetTheTeam;
