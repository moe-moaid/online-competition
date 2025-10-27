'use client';
import React, { useState } from 'react';

const categories = [
  'Hip Pop',
  'Rap',
  'RNB',
  'Afrobeat',
  'Raggae',
  'Dancehall',
  'Reggarton',
  'Others',
];
function Filter() {
  const [query, setQuery] = useState<string[]>([]);

  return (
    <div>
      <h6 className="mb-5 text-[24px] text-white">By Category</h6>
      <div className="w-[380px] rounded-lg bg-gray-bg px-5 py-3">
        <div className="flex max-w-xs flex-col justify-center gap-y-4 text-white">
          {categories.map((cat, i) => {
            const isChecked = query.includes(cat);
            return (
              <div
                key={`${cat} - ${i}`}
                className="flex flex-row items-center justify-start gap-x-4"
              >
                <div className="relative">
                  <input
                    className="absolute inset-0 h-6 w-6 cursor-pointer opacity-0"
                    type="checkbox"
                    value={cat}
                    name={cat}
                    id={cat}
                    checked={isChecked}
                    onChange={() =>
                      setQuery(prev => {
                        return prev.indexOf(cat) !== -1
                          ? prev.filter(item => item !== cat)
                          : [...prev, cat];
                      })
                    }
                  />
                  <div
                    className={`
                  flex h-6 w-6 items-center justify-center rounded border-2 bg-transparent transition-all duration-200
                  ${isChecked ? 'border-white' : 'border-gray-text'}
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
                  className={`cursor-pointer select-none text-lg transition-colors duration-200 ${
                    isChecked ? 'text-white' : 'text-gray-text'
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
