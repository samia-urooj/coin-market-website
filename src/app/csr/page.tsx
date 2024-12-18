"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


const CoinMarket=() =>{
 
  const API_KEY = "87e7d4d37ca1e30441131267f1dd6e47";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
   
    fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
        
      });
    
  }, []);
  
  return (  
    < >
    <h1 className="h1 text-lg sm:text-xl md:text-2xl text-center text-white mt-4 font-serif"><u>CSR (Client Side Rendering)</u></h1>
    <div className="coins flex-wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-5  mx-5">
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">BTC: {data?.rates?.BTC}</Button>  
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">BNB: {data?.rates?.BNB}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ADA:{data?.rates?.ADA}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">SOL:{data?.rates?.SOL}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">XRP:{data?.rates?.XRP}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">DOGE:{data?.rates?.DOGE}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ETH:{data?.rates?.ETH}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">BCH:{data?.rates?.BCH}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">LTC:{data?.rates?.LTC}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">LINK: {data?.rates?.LINK}</Button>  
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">AVAX: {data?.rates?.AVAX}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">TRX:{data?.rates?.TRX}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">XLM:{data?.rates?.XLM}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">XMR:{data?.rates?.XMR}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">XTZ:{data?.rates?.XTZ}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ADA:{data?.rates?.ADA}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ABC:{data?.rates?.ABC}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">USDT:{data?.rates?.USDT}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ETC:{data?.rates?.ETC}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">MANA:{data?.rates?.MANA}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">THETA:{data?.rates?.THETA}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ENJ:{data?.rates?.ENJ}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">MKR:{data?.rates?.MKR}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ZEC: {data?.rates?.ZEC}</Button>  
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">OMG: {data?.rates?.OMG}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">BAT:{data?.rates?.BAT}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ZIL:{data?.rates?.ZIL}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">LRC:{data?.rates?.LRC}</Button>

<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">QTUM: {data?.rates?.QTUM}</Button>  
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">BTG: {data?.rates?.BTG}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ZEC:{data?.rates?.ZEC}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ADCN:{data?.rates?.ADCN}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">AE:{data?.rates?.AE}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">AMM:{data?.rates?.AMM}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ANT:{data?.rates?.ANT}</Button>

<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ARC:{data?.rates?.ARC}</Button>


<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">ARCT:{data?.rates?.ARCT}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">CALC:{data?.rates?.CALC}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">CCRB:{data?.rates?.CCRB}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">CAT:{data?.rates?.CAT}</Button>


<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">EDR:{data?.rates?.EDR}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">MOIN:{data?.rates?.MOIN}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">MONA:{data?.rates?.MONA}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">QASH:{data?.rates?.QASH}</Button>
<Button className="but shadow-inner shadow-gray-400" variant="secondary" size="lg">QAU:{data?.rates?.QAU}</Button>


</div>
<div className="div3 grid justify-items-center">
<Link href="/"><button className="button  hover:bg-gray-200 text-blue-1000 text-bold font-medium text-sm sm:text-lg md:text-2xl sm:h-8 md:h-10 h-[30px] w-[80px] sm:w-[120px] md:w-40 text-center border-solid border-black bg-sky-400 rounded-md my-5 mx-5 ">Go Back!</button></Link></div>
    </>
  );
}

export default CoinMarket;