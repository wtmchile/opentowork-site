"use client";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#fff]  border-b border-b-slate-700">
      <div className="relative lg:flex justify-between w-full ">
        <div className="flex flex-wrap items-center lg:basis-96">
          <div className="flex items-center flex-shrink-0 text-white p-4 border-r border-r-slate-700">
            <Link href="/">
              <Image
                src="/images/wtm-nav-logo.png"
                alt="WTM Logo"
                width={194}
                height={49}
              />
            </Link>
          </div>
          <div className="text-lg sm:text-md font-semibold bg-white md:p- px-5 text-center rounded-b-xl sm:rounded p-3 md:p-4">
            <span>Open to dream</span>
          </div>        
          </div>
      </div>
    </nav>
  );
}
