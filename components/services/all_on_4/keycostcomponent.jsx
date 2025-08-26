export default function KeyCostComponents() {
  const components = [
    {
      title: "Implant Fixture & Abutment",
      description:
        "The core of any implant fee is the fixture (the titanium 'root' anchored in bone) plus the abutment (the connector between fixture and crown). Higher-grade alloys or custom abutment designs can increase costs, but they also deliver superior fit and long-term durability.",
    },
    {
      title: "Surgical Placement",
      description:
        "This covers your surgeon’s fee and the clinic’s operative costs. Fees vary by practitioner experience, facility standards, and whether you choose a specialist (e.g. a periodontist or oral surgeon) versus a general dentist. Simple placements incur lower fees; complex anatomies or guided-surgery protocols carry higher charges.",
    },
    {
      title: "Bone Grafting & Sinus Lift",
      description:
        "When jawbone volume is insufficient, grafting (using autograft, allograft, or synthetic materials) or a sinus lift may be required. These preparatory procedures add surgical time, materials, and healing phases to your treatment — which is reflected in increased overall pricing.",
    },
    {
      title: "Restoration (Crown, Bridge or Denture)",
      description:
        "The visible portion — whether a single crown, multi-unit bridge, or full-arch prosthesis — constitutes a significant portion of your total investment. Materials (porcelain vs zirconia), custom shading, and lab fees for CAD/CAM-milled frameworks all influence this cost component.",
    },
    {
      title: "Pre- and Post-Operative Imaging & Care",
      description:
        "Modern implant planning often involves 3D CBCT scans, digital impression scans, and detailed imaging. Post-operative care, follow-up appointments, and maintenance may also add to costs.",
    },
  ];

  return (
    <section className="bg-[#1C4C57] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C] mb-6">
          Key Cost Components
        </h2>
        <p className="text-[#3A3A3A] text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Before you review individual line items, it helps to understand how each stage of treatment contributes to the overall fee. In the sections that follow, we’ll unpack the major cost drivers — from the implant hardware itself through to the final prosthetic restoration — so you know exactly what you’re paying for and why. By breaking your investment into these core components, you can compare quotes more confidently, ask the right questions of your provider, and plan for any additional procedures that may be required.
        </p>
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto space-y-10">
        {components.map((item, idx) => (
          <div key={idx} className="border-b border-gray-300 pb-6">
            <h3 className="text-xl font-semibold text-[#0046CF] mb-2">
              {item.title}
            </h3>
            <p className="text-[#333] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
