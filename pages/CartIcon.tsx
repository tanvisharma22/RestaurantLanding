import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/images/cart.png" alt="" fill  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"/>
      </div>
      <span>Cart </span>
    </Link>
  );
};

export default CartIcon;