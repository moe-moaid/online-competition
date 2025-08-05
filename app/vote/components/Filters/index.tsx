"use client";
import React, { useState } from "react";

const categories = [
  "Hip Pop",
  "Rap",
  "RNB",
  "Afrobeat",
  "Raggae",
  "Dancehall",
  "Reggarton",
  "Others",
];
function Filter() {
  const [query, setQuery] = useState<string[]>([]);

  return (
    <div>
      <h6 className="text-white text-[24px]">By Category</h6>
      <div className="bg-gray-bg rounded-lg px-5 py-3">
        <div className="flex flex-col gap-y-4 justify-center text-white max-w-xs">
          {categories.map((cat, i) => {
            const isChecked = query.includes(cat);
            return (
              <div
                key={`${cat} - ${i}`}
                className="flex flex-row gap-x-4 items-center justify-start"
              >
                <div className="relative">
                  <input
                    className="opacity-0 absolute inset-0 w-6 h-6 cursor-pointer"
                    type="checkbox"
                    value={cat}
                    name={cat}
                    id={cat}
                    checked={isChecked}
                    onChange={() =>
                      setQuery((prev) => {
                        return prev.indexOf(cat) !== -1
                          ? prev.filter((item) => item !== cat)
                          : [...prev, cat];
                      })
                    }
                  />
                  <div
                    className={`
                  w-6 h-6 rounded border-2 bg-transparent flex items-center justify-center transition-all duration-200
                  ${isChecked ? "border-white" : "border-gray-text"}
                    `}
                  >
                    {isChecked && (
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5998 7.91999L2.4798 4.79999L0.799805 6.47999L5.5998 11.28L15.1998 1.68L13.5198 0L5.5998 7.91999Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <label
                  htmlFor={cat}
                  className={`cursor-pointer text-lg select-none transition-colors duration-200 ${
                    isChecked ? "text-white" : "text-gray-text"
                  }`}
                >
                  {cat}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Filter;
