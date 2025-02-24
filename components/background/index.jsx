import Welcome from "../welcome/index";
import Image from "next/image";

export default function Background() {
  return (
    <div className=" min-h-screen bg-[url('/msdp.png')] bg-cover bg-center">
      {/* Background Image with Overlay */}
      <div
        className="bg-[url('/msdp.png')] bg-cover bg-center"
      >
        
       </div>
          
        <Welcome />
    </div>
  );
}
