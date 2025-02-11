import Head from 'next/head';
import Image from 'next/image';
import HowWeHelp from '../works/index'

export default function Welcome() {
  return (
    <div className="bg-[#93D9E6] min-h-screen flex flex-col  item-center justify-center">
      <Head>
        <title>Main Street Dental</title>
      </Head>

      <header>
        <h1 style={{ fontFamily: 'Abnes, sans-serif' }} className="inset-0 z-0 mt-10 ml-[350] text-8xl text-[#1C4C57] tracking-wide uppercase">
          Welcome <span className="block ml-[450] mt-8 mb-6">To</span><span className=' ml-[670]'>MSDP</span> 
        </h1>
      </header>
      <div className=" mt-16 w-[90%] ml-72">
  <div className="grid grid-cols-3 gap-56">
    {/* Image 1 */}
    <div className="relative group">
      <Image
        src="/welcome1.png"
        alt="Dentist"
        width={350}
        height={300}
        className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/welcome2.png"
        alt="Dentist Hover"
        width={350}
        height={300}
        className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </div>

    {/* Image 2 */}
    <div className="relative group">
      <Image
        src="/welcome1.png"
        alt="Team Celebrating"
        width={350}
        height={300}
        className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/welcome2.png"
        alt="Team Celebrating Hover"
        width={350}
        height={300}
        className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </div>
  </div>

  <div className="ml-[346px] grid grid-cols-3 gap-56">
    {/* Image 3 */}
    <div className="relative group">
      <Image
        src="/welcome1.png"
        alt="Dentist"
        width={350}
        height={300}
        className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/welcome2.png"
        alt="Dentist Hover"
        width={350}
        height={300}
        className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </div>

    {/* Image 4 */}
    <div className="relative group">
      <Image
        src="/welcome1.png"
        alt="Dentist"
        width={350}
        height={300}
        className="ml-[120px] transition-transform transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/welcome2.png"
        alt="Dentist Hover"
        width={350}
        height={300}
        className="ml-[120px] absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </div>
  </div>

  <div>
    {/* Image 5 */}
    <div className="relative group">
      <Image
        src="/welcome1.png"
        alt="Dentist"
        width={350}
        height={300}
        className="ml-[690px] transition-transform transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/welcome2.png"
        alt="Dentist Hover"
        width={350}
        height={300}
        className="ml-[690px] absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </div>
  </div>
</div>
      <main className="mt-10 ">
        <h2 className="ml-[450] text-8xl  text-[#1C4C57]" style={{ fontFamily: 'OptimaModoki, sans-serif' }}>
          Friendly, Dedicated &<br/>
          <span className="text-[#EC95A4]"> Highly Qualified Dentist</span>
        </h2>

        <p className="mt-8 ml-[250] w-[1555]  text-4xl text-[#1C4C57]" style={{ fontFamily: 'OptimaModoki, sans-serif' }}>
          Main Street Dental Practice is one of the oldest dental practices in<span className="text-[#EC95A4]"> Bacchus Marsh</span>. According to
          the <em>Melton Express</em> published on Saturday, November 28, 1942, resident dentist
          Mr. M.G. Pietriche began his practice at the <span className="text-[#EC95A4]">Main Street</span>  surgery on Monday, November 30
          in 2008, <span className="text-[#EC95A4]">Dr Saba Farooq</span> joined the surgery, continuing its tradition of exceptional dental
          services alongside her team of <span className="text-[#EC95A4]">friendly</span>, dedicated, and highly qualified <span className="text-[#EC95A4]">dentists</span>. Our aim
          is to provide a comprehensive range of services in a comfortable environment, promoting
          good oral healthcare for the whole family under <span className="text-[#EC95A4]">one roof</span>.
        </p>

        <button style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="mb-12 text-[#EC95A4] mt-12 ml-[900] h-24 text-3xl bg-[#1C4C57] justify-center py-2 px-4 rounded-md hover:bg-[#C7EFFF] hover:text-[#1C4C57] transition">
          Request an Appointment
        </button>
      

      </main>
      <HowWeHelp/>
    </div>
  );
}