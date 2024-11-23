"use client";
import Link from "next/link";

export default function Home() {
 
  return (
    
    <div className="main md:flex " >
      <div className="div1 w-[100%] md:w-[40%]  bg-center justify-items-center md:mt-20">
        
    
      <img  className="pic h-80 w-80 md:w-92 md:h-92 justify-items-center mt-10 sm:mt-10" src="/image/btc.png"></img>
      </div>


      <div  className="div2 text-center md:text-left items-left w-[100%] md:w-[60%] mt-8 sm:mt-16 md:mt-20">
          <h1 className="hade text-white text-3xl sm:text-4xl md:text-6xl  font-serif text-center md:text-left">Welcome to <br></br>Coin Market!</h1>


      <h2 className="hade text-white text-lg sm:text-xl md:text-3xl font-sans text-center md:text-left mt-2 sm:mt-4 md:mt-8 ">💡<i> What’s New?</i></h2>
      <p className="con text-gray-300 text-sm md:text-xl text-center md:text-left font-italic mt-3 mr-8">I’ve added SSR, CSR, SSG, and ISR options to showcase how different rendering techniques work. Whether you’re curious about web development or want a seamless user experience, these features have you covered!</p> 
        <p className="hade2 text-gray-300 text-sm md:text-xl font-sans text-center md:text-left mt-3">See the quick introduction and differences on how different rendering techniques work.</p>
     <Link href="/define"> <p className="button  text-gray-300 mt-2"><i><u>Click Here!</u></i></p></Link>

      <h5 className="hade2 text-white text-lg sm:text-xl md:text-3xl font-sans text-center md:text-left mt-4 ">🔍<i> Check Coin Prices</i></h5> 
      <p className="con text-gray-300 text-sm md:text-xl text-center md:text-left font-italic mt-3">While our platform currently supports a select range of popular cryptocurrencies, we’re committed to giving you accurate and up-to-date information.</p>

<ul className="head flex gap-4  font-sans my-2 sm:my-4 md:my-8 justify-center md:justify-start ">
      <Link href="/csr"><li><h1 className="li md:h-[37px] shadow-inner shadow-gray-600 bg-yellow-400 w-[50px] sm:w-[70px] md:w-[100px] rounded-2xl text-sm sm:xl md:text-2xl font-bold  text-center hover:bg-gray-300">CSR</h1></li></Link>
      <Link href="/ssr"><li><h1 className="li md:h-[37px] shadow-inner shadow-gray-600 bg-yellow-400 hover:bg-gray-300 w-[50px] sm:w-[70px] md:w-[100px] rounded-2xl text-sm sm:xl md:text-2xl font-bold  text-center">SSR</h1></li></Link></ul>
      <ul className="head flex gap-4 text-xl font-sans my-4 md:my-8 justify-center md:justify-start ">
      <Link href="/ssg"><li><h1 className="li md:h-[37px] shadow-inner shadow-gray-600 hover:bg-gray-300 bg-yellow-400 w-[50px] sm:w-[70px] md:w-[100px] rounded-2xl text-sm sm:xl md:text-2xl font-bold  text-center">SSG</h1></li></Link>
      <Link href="/isr"><li><h1 className="li md:h-[37px] shadow-inner shadow-gray-600 hover:bg-gray-300 bg-yellow-400 w-[50px] sm:w-[70px] md:w-[100px] rounded-2xl text-sm sm:xl md:text-2xl font-bold text-center">ISR</h1></li></Link></ul>
      

   
      </div>
    </div>
  
  );
 
}