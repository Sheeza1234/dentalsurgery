import RequestAppointment from "../appointment/index";

const Reviews = ({ CustomComponent }) => {
  const reviews = [
    {
      id: 1,
      stars: 5,
      name: "Misha",
      reviews:
        "I have been here for at least 2-3 years, and their service has been amazing. The staff are absolutely lovely and go to great lengths to ensure my teeth are healthy and straight due to my braces. I've been seeing Saba, and she is calming and amazing in what she does when it comes to my dental health. Highly recommend 😊",
    },
    {
      id: 2,
      stars: 5,
      name: "Julie Ferguson",
      reveiws: "Saba is very gentle and a skilled dentist.",
    },
    {
      id: 3,
      stars: 5,
      name: "Jeet Dhaliwal",
      reveiws:
        "The best, professional & reasonable dentist. Would recommend them to everyone. The best in town.",
    },
    {
      id: 4,
      stars: 5,
      name: "Charlotte Gellie",
      reveiws:
        "The staff are so lovely and caring. Helped alleviate any anxiety I was feeling. I walked out with sparkling teeth. Thank you to Dr Saba and her wonderful team. We LOVE Main St Dental 😁",
    },
  ];

  return (
    <div>
      <div className="bg-[#1C4C57] text-center px-4 py-6 sm:px-6 sm:py-8">
        {/* Title */}
        <h1
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-10"
        >
          Our Google & Facebook Reviews
        </h1>

        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#D9D9D9] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex justify-center mb-2">
                {Array.from({ length: review.stars }).map((_, index) => (
                  <span
                    key={index}
                    className="text-[#F6C217] text-xl sm:text-3xl lg:text-4xl"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-base md:text-lg italic text-center mb-2">
                "{review.reviews || review.reveiws}"
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-center">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Custom Component */}
      {CustomComponent && <CustomComponent />}
    </div>
  );
};

export default Reviews;
