
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="header w-[100%] flex bg-sky-400 sm:h-16 h-12 md:h-24 ">
       
      <h1 className="text md:my-8 sm:my-4 my-3 md:text-3xl sm:text-xl w-[80%] decoration-4 font-bold font-sans ml-2 md:ml-5 text-blue-900 ">Check Coin-Market</h1> 
     <Link href="/"><button className="home justify-right sm:my-5 my-3  font-bold md:text-2xl text-base xl:text-xl hover:bg-gray-200 bg-yellow-300 md:h-10 sm:w-24 md:w-32 w-[80px] shadow-inner shadow-gray-600 text-center rounded-2xl text-blue-900 md:my-8">Home
     </button></Link>
     
      </div>

    </div>
  
  );
 
}