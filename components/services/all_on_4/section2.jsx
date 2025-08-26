export default function Cosmetic2({ CustomComponent }) {
  const components = [
    {
      title: "Avoids bone grafts",
      description:
        "Unlike traditional dental implant restoration solutions, with only four implants in the upper and lower jaw with All-on-4®, many patients are able avoid invasive and painful bone grafts.",
    },
    {
      title: "Natural-looking teeth",
      description:
        "All Next Smile Australia All-on-4® teeth are designed in our in-house laboratories and made to look like natural teeth. Natural in both look and feel, all thanks to Next Smile Australia and Nobel Biocare components.",
    },
    {
      title: "A proven 98% success rate*",
      description:
        "With a proven 98% success rate* supported by clinical data over 25 years, All-on-4® delivers far superior results than older, more invasive dental restoration techniques.",
    },
    {
      title: "Innovative techniques and advanced technology",
      description:
        "At Next Smile Australia, we use on of the most innovative and clinically proven dental implant protocols globally, known as the Malo Protocol. This protocol provides a more predictable clinical patient outcomes* using fewer components in a surgical environment with the latest digital technology supporting the process.",
    },
    {
      title: "A new smile within 24 hours",
      description:
        "When you undergo the Next Smile Australia All-on-4® treatment, our aim is for you to walk out of your Next Smile Australia clinic with your first set of new, provisional teeth within 24 hours or sooner.",
    },
  ];

  return (
    <div>
      <section className="bg-[#1C4C57] py-16 px-6" style={{ fontFamily: "OptimaModoki, sans-serif" }}>
        <div className="max-w-8xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-7xl font-bold text-white mb-16" >
            The Benefits of All-on-4®
          </h2>
          <p className="text-[#D4EBF4] text-base md:text-3xl leading-relaxed max-w-7xl mx-auto mb-12">
              Before making the decision to book an appointment at your nearest Next Smile Australia 
              clinic, here are just some of the benefits you can expect from the All-on-4® treatment.
               These benefits are based on our years of experience and clinically researched data* and protocols.
          </p>
        </div>

        {/* List */}
        <div className="max-w-7xl mx-auto space-y-8">
          {components.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-6 border-b border-[#AEAEAE]"
            >
              {/* Left side title */}
              <h3 className="text-lg md:text-3xl font-semibold text-[#EC95A4]">
                {item.title}
              </h3>

              {/* Right side description */}
              <p className="md:col-span-2 text-white text-2xl leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {CustomComponent && <CustomComponent />}
    </div>
  );
}
