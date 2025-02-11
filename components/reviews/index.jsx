import RequestAppointment from '../appointment/index'
const Reviews = () => {
    const reviews = [
      { id: 1, stars: 5 },
      { id: 2, stars: 5 },
      { id: 3, stars: 5 },
      { id: 4, stars: 5 },
    ];
  
    return (
        <div>
      <div className=" bg-[#1C4C57] text-center p-8">
        <h1 style={{ fontFamily: "OptimaModoki, sans-serif" }} className="text-8xl font-semibold text-[#FFFFFF] mb-8">
          Our Google & Facebook Reviews
        </h1>
        <div className="flex justify-center gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#D9D9D9] w-[400px] h-48 flex justify-center rounded-lg shadow-lg"
            >
              <div className="flex">
                {Array.from({ length: review.stars }).map((_, index) => (
                  <span key={index} className="text-[#F6C217] text-6xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <RequestAppointment/>
      </div>
    );
  };
  
  export default Reviews;
  