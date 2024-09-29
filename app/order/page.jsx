import Header from "@/components/Header";
import React from "react";
import food1 from "@/public/food-1.png";
import close from "@/public/close.svg";
import Image from "next/image";
import Form from "@/components/Form";

export default function Order() {
  return (
    <div>
      <Header />
      <div className=" px-3">
        <div className=" bg-bgNude px-3 pt-7 pb-12">
          <div className=" border border-gray-400">
            <div className=" flex justify-end px-3 py-3 border-b border-gray-400">
              <button>
                <Image src={close} alt="close icon" className=" w-5 h-5" />
              </button>
            </div>
            <div className=" ">
              <div className=" flex items-center gap-2 py-2 px-3 border-b border-gray-400">
                <Image src={food1} alt="food image" className=" w-16 h-16" />
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className=" font-semibold text-sm">
                      English Breakfast
                    </h3>
                    <p className=" font-semibold text-primary text-sm">
                      10,000
                    </p>
                  </div>
                  <div className=" flex gap-1 items-center text-xs">
                    <button className=" border border-black bg-white w-[13px] h-[13px] flex justify-center items-center">
                      <span>-</span>
                    </button>
                    <p>0</p>
                    <button className=" border border-black bg-white w-[13px] h-[13px] flex justify-center items-center">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-2 py-2 px-3 border-b border-gray-400">
                <Image src={food1} alt="food image" className=" w-16 h-16" />
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className=" font-semibold text-sm">Baron Wine</h3>
                    <p className=" font-semibold text-primary text-sm">
                      10,000
                    </p>
                  </div>
                  <div className=" flex gap-1 items-center text-xs">
                    <button className=" border border-black bg-white w-[13px] h-[13px] flex justify-center items-center">
                      <span>-</span>
                    </button>
                    <p>0</p>
                    <button className=" border border-black bg-white w-[13px] h-[13px] flex justify-center items-center">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-sm font-semibold flex justify-between items-center p-3 border-b border-gray-400">
              <p>Total:</p>
              <p>15,000</p>
            </div>
            <div className=" px-3 py-7">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
