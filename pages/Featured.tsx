import { featuredProducts } from "../data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"/>
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl text-black"style={{ fontFamily:"Roboto sans-serif" }}>{item.title}</h1>
              <p className="p-4 2xl:p-8 text-black"style={{fontFamily:"Roboto sans-serif" }}>{item.desc}</p>
              <span className="text-xl font-bold text-black"style={{ fontFamily:"Roboto sans-serif" }} >${item.price}</span>
              <button className="text-white p-2 rounded-md"style={{ backgroundColor:"#91972A",fontFamily:"Roboto sans-serif" }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;