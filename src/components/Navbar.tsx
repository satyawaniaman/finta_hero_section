import Image from "next/image";
import Link from "next/link";
import React from "react";

const navbarItems = [
  {
    name: "Guide",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "Log In",
    href: "/",
  },
];
function Navbar() {
  return (
    <div className="flex items-center justify-between gap-72 py-4">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          width={60}
          height={60}
          draggable={false}
          loading="lazy"
        />
      </Link>
      <div className="flex items-center gap-8">
        {navbarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="text-neutral-800 font-medium text-sm hover:text-neutral-500 transition duration-200"
          >
            {item.name}
          </Link>
        ))}
        <button className="bg-[#257AF3] text-white px-4 py-2 rounded-lg font-semibold shadow-lg text-shadow-sm text-sm ">
          Start free trial
        </button>
      </div>
    </div>
  );
}

export default Navbar;
