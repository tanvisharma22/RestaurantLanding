import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-black-500 flex items-center justify-between"style={{ backgroundColor: "#F2F4F3",fontFamily:"Roboto sans-serif" }}>
      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;