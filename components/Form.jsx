"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  return (
    <div>
      <h2 className=" font-semibold">Customer Information {location}</h2>
      <form className=" flex flex-col gap-y-5 mt-3">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name *"
            className=" outline-none block w-full border border-gray-800 px-2 py-1 rounded-lg bg-transparent placeholder:text-placeText"
          />
        </div>
        <div>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="name"
            placeholder="Phone Number *"
            className=" outline-none block w-full border border-gray-800 px-2 py-1 rounded-lg bg-transparent placeholder:text-placeText"
          />
        </div>
        <div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            id="location"
            className=" outline-none block w-full border border-gray-800 px-2 py-1 rounded-lg bg-transparent"
          >
            <option disabled value={""} className=" text-placeText">
              Select location
            </option>
            <option value="room">Room</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
        {location == "room" && (
          <div>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              name="name"
              placeholder="Room Number *"
              className=" outline-none block w-full border border-gray-800 px-2 py-1 rounded-lg bg-transparent placeholder:text-placeText"
            />
          </div>
        )}
        <div>
            <Button name={'Place Order'} variant={' w-full py-2'}/>
        </div>
      </form>
    </div>
  );
}
