import Image from "next/image";
import React from "react";
import { IoHome } from "react-icons/io5";

export const Menu = () => {
  return (
    <nav className="border-r-2 border-grey-200 p-2">
      <div className="">
        <Image
          width={194}
          height={49}
          src="/images/wtm-nav-logo.png"
          alt="wtm logo"
        />
      </div>
      <ul className="mt-6">
        <li className="mb-2 cursor-pointer h-[44px] flex items-center w-[191px] hover:bg-blue-300 bg-opacity-17 bg-blue-200 ">
          <IoHome className="ml-3" style={{ color: "#218AEC" }} />{" "}
          <a href="/" className="block  px-4 py-2 text-blue-800">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};
