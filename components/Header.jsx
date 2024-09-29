import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import bell from "@/public/bell.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex justify-between items-center px-5 py-7 bg-white">
      <div></div>
      <Link href={"/"}>
        <Image src={logo} alt="josh esther olive logo" />
      </Link>

      <Link href={"/order"}>
        <div className=" relative inline-block ">
          <Image src={bell} alt="bell icon" />
          <div className=" absolute -top-1 -right-1 bg-black text-white w-4 text-xs h-4 text-center flex justify-center items-center rounded-full">
            <p>1</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
