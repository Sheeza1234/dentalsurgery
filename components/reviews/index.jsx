import RequestAppointment from "../appointment/index";

const Reviews = ({ CustomComponent }) => {
  const reviews = [
    { id: 1, stars: 5 },
    { id: 2, stars: 5 },
    { id: 3, stars: 5 },
    { id: 4, stars: 5 },
  ];

  return (
    <div>
      <div className="bg-[#1C4C57] text-center p-6 sm:p-8">
        {/* Title */}
        <h1
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-[#FFFFFF] mb-6 sm:mb-8"
        >
          Our Google & Facebook Reviews
        </h1>

        {/* Reviews Container */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-10 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#D9D9D9] max-w-[450px] sm:max-w-[800px] h-24 sm:h-56 flex  justify-center rounded-lg shadow-lg"
            >
              <div className="flex">
                {Array.from({ length: review.stars }).map((_, index) => (
                  <span key={index} className="text-[#F6C217] text-2xl sm:text-5xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {CustomComponent && <CustomComponent />}
    </div>
  );
};

export default Reviews;
