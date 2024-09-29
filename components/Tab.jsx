"use client";
import Image from "next/image";
import React, { useState } from "react";
import food1 from "@/public/food-1.png";
import food2 from "@/public/food-2.png";
import Button from "./Button";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className=" flex overflow-x-scroll no-scrollbar">
        <button
          onClick={() => setActiveTab(1)}
          className={
            activeTab == 1
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          English Breakfast
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={
            activeTab == 2
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          Nigerian Breakfast
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={
            activeTab == 3
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          Grilled Food
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={
            activeTab == 4
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          Sea Food
        </button>
        <button
          onClick={() => setActiveTab(5)}
          className={
            activeTab == 5
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          Sea Food
        </button>
        <button
          onClick={() => setActiveTab(6)}
          className={
            activeTab == 6
              ? ` whitespace-nowrap p-1 text-sm border-b border-primary text-primary transition-all`
              : ` whitespace-nowrap p-1 text-sm border-b border-gray-300 transition-all`
          }
        >
          Sea Food
        </button>
      </div>
      <div>
        <div className={activeTab == 1 ? `px-3 py-7` : `hidden`}>
          <h2 className=" text-xl">English Breakfast</h2>
          <div className=" mt-4 flex flex-col gap-y-5">
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food1} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food2} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab == 2 ? `px-3 py-7` : `hidden`}>
          <h2 className=" text-xl">Nigerian Breakfast</h2>
          <div className=" mt-4 flex flex-col gap-y-5">
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food1} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food2} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab == 3 ? `px-3 py-7` : `hidden`}>
          <h2 className=" text-xl">Grilled Food</h2>
          <div className=" mt-4 flex flex-col gap-y-5">
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food1} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
            <div className=" bg-bgGray px-5 py-7 rounded-2xl">
              <div className=" flex justify-center">
                <Image src={food2} alt="food image" />
              </div>

              <div className=" mt-2">
                <h3 className=" text-sm font-medium">
                  Choice of egg cooking
                </h3>
                <p className=" text-xs font-light mt-2">
                  (Sunnyside, scranbled egg omele and boiled egg), sausage,
                  toasted bread, becon, baked beans, tomatoes and salted
                  mushroom.
                </p>
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex justify-between w-[170px] border border-gray-500 px-[7px] py-[5px] rounded-md">
                    <p className=" text-xs">₦10,562</p>
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
                  <Button name={"Order"} variant={"w-[120px] py-1"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
