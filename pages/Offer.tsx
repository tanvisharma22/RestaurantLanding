import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/images/italian.jpg')] md:h-[70vh]"style={{ backgroundColor: "#E6D3A3",fontFamily:"Roboto sans-serif" }}>
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-black text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-black xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className="bg-red-500 text-white rounded-md py-3 px-6"style={{ backgroundColor: "#91972A",fontFamily:"Roboto sans-serif" }}>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/images/burger.jpg" alt="" fill className="object-contain" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"priority />
      </div>
    </div>
  );
};

export default Offer;