import Card from '../card/index'
import Whyus from '../whyus/index'
export default function HowWeHelp(){
    const cards = [
      'Cosmetic Dentistry',
       'Dental Implants',
       'Orthodontics',
       'Dentures',
       'Brxism TMJ and Injectables',
       'Children Dental Care',
       'Teeth Grinding',
       'Restorative Dentistry',
       'Sleep Apnoea',
       'Sleep Dentistry',
       'Senior Dental Care',
       'Wisdom Teeth Extraction',
       'Emergency Dentistry',
       'Bad Breath',
       'General Dentistry'
      ];
    return(
        <div className="bg-[#C7EFFF] min-h-screen flex flex-col ">
            <div className="item-center text-center">
                <div style={{fontFamily:'Inter'}} className="mt-8  text-8xl text-[#1C4C57]">How We Can 
                    <span className="text-[#EC95A4]"> Help?</span>
                </div>
                <div style={{fontFamily:'Inters'}}className="ml-[320px] text-xl align-center text-center w-[1300px] mt-[30px]">Our MSDP provides comprehensive care to meet 
                    the needs of patients of all ages. We offer a full range of services for 
                    our patients, from routine check-ups to advanced treatments, 
                    ensuring everyone leaves our clinic with a smile.</div>
            </div>
            <div className='ml-24 mt-16'> 
            <div className=" grid grid-cols-5 md:grid-cols-5 gap-8">
        {cards.map((label, index) => (
          <Card key={index} label={label}/>
        ))}
      </div>

            </div>
            <button style={{ fontFamily: 'Inter, sans-serif' }} className="mb-12 text-white mt-12 ml-[900] h-24 w-72 text-3xl bg-[#1C4C57] justify-center py-2 px-4 rounded-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition">
          View All Services
        </button>
        <Whyus/>
        </div>
    )

}