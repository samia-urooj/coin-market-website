"use client";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="header flex bg-sky-400 h-24 ">
       
      <h1 className="text my-8 text-3xl w-[85%] decoration-4 font-bold font-sans mx-5 text-blue-900 ">Check Coin-Market</h1> 
     <Link href="/"><button className="home justify-right  font-bold text-2xl hover:bg-gray-200 bg-yellow-300 h-10 w-32 shadow-inner shadow-gray-600 text-center rounded-2xl text-blue-900 my-8">Home
     </button></Link>
     
      </div>

    </div>
  
  );
 
}