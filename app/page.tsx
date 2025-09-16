import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#1d1d1d] text-[#f7f7f7] px-6 lg:px-24 sm:px-8 md:px-12 py-6 lg:py-12">
      <main className="">
         <h1 className="text-2xl sm:text-6xl mt-3  font-sans">Projects &#96;Made</h1>
        <div className=" flex  items-center justify-between ">
            <h1 className="text-2xl sm:text-6xl  font-sans"> Easier&#94; </h1>
            <p className="text-2xl sm:text-6xl">/</p>
            <p className="text-xl hidden sm:block">Easily Organize your <br/> 
             project work
            </p>
            <button className="bg-[#ea7e66] text-lg gap-2 text-[#571811] rounded-full py-3 px-5 flex items-center ">
              Begin
              <ArrowRight size={24}/>
            </button>
        </div>
        
          <Image src="/Hero img.png" alt="dashboard" width={1400} height={600} className="mt-10 rounded-lg mx-auto"/>
    <h1 className="mt-7 sm:mt-12 text-2xl sm:text-6xl">To enhance the growth of your <br/>
     Projects, it&apos;s essential to expedite<br/>
     the releaseof new flow.</h1>
        <div className=" mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-20">
          <Image 
          src="/avater.png" 
          alt="avater" 
          width={400} 
          height={300} 
          className=" rounded-lg"/>
<div>
          <h1 className="text-[#c7c7c7] text-sm sm:text-lg mt-4">We recieved a great amount of work in <br/>
           just 2 weeks timeline!</h1>
           <p className="mt-2 text-xs sm:text-sm font-bold">Daniel,Design lead @Google</p>
  </div>
        </div>
      </main>
    </div>
  );
}
