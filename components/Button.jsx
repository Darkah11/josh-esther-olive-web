import React from "react";

export default function Button({ name, variant }) {
  return (
    <button className={` bg-primary text-white font-semibold rounded-md cursor-pointer ${variant}`}>
      {name}
    </button>
  );
}
