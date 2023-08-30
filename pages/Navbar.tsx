import React from "react";
//import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white h-12 text-black-500 p-4 flex items-center justify-between border-b-2 uppercase md:h-24 lg:px-20 xl:px-40"style={{ fontFamily:"Roboto sans-serif",border:"#F24F3" }}>
   
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-left"style={{ color:"#373D20",fontSize:"55px",fontFamily:"Roboto sans-serif" }}>
        <Link href="/">MASSIMO</Link>
      </div>
      {/* MOBILE MENU */}
     {/*} <div className="md:hidden">
        <Menu />
      </div>}
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
       
        {!user ? (
          <Link href="/">Login</Link>
        ) : (
          <Link href="/">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;