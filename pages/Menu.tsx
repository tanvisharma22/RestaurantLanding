import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      <Image
        src={open ? "/images/close.png" : "/images/open.png"}
        alt=""
        layout="fixed"
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10" style={{ fontFamily: "Roboto sans-serif", color: "#373D20" }}>
          {links.map((item) => (
            <Link href={item.url} key={item.id}>
              <a onClick={() => setOpen(false)}>{item.title}</a>
            </Link>
          ))}
          <Link href={user ? "/orders" : "/login"}>
            <a onClick={() => setOpen(false)}>{user ? "Orders" : "Login"}</a>
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <a>
              <CartIcon />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

