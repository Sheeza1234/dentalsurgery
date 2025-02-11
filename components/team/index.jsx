import Reviews from '../reviews/index'
const MeetTheTeam = () => {
    const teamMembers = [
      { id: 1, name: "Member 1", image: "/images.png" }, // Replace with real image URLs
      { id: 2, name: "Member 2", image: "/images.png" },
      { id: 3, name: "Member 3", image: "/images.png" },
      { id: 4, name: "Member 4", image: "/images.png" },
      { id: 5, name: "Member 5", image: "/images.png" },
      { id: 6, name: "Member 1", image: "/images.png" }, // Replace with real image URLs
      { id: 7, name: "Member 2", image: "/images.png" },
      { id: 8, name: "Member 3", image: "/images.png" },
      { id: 9, name: "Member 4", image: "/images.png" },
      { id: 10, name: "Member 5", image: "/images.png" },
    ]; 
  
    return (
        <div>
      <div className=" bg-[#C7EFFF] text-center p-8">
        <h1 style={{ fontFamily: "OptimaModoki, sans-serif" }} className="text-8xl font-semibold text-[#1C4C57] mb-8">Meet the Team</h1>
        <div className="flex mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center px-12  gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C4C57] rounded-2xl p-4 w-[300] h-96 flex flex-col items-center justify-between"
            >
              <div className="w-48 mt-12 rounded-full h-48 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full"
                />
              </div>
              <div className="bg-[#C7EFFF] text-white rounded-full px-4 py-6 text-xl font-medium w-full text-center">
                {/* {member.name} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reviews/>
      </div>
    );
  };
  
  export default MeetTheTeam;
  