import React from "react";

export default function SearchFilter() {
    return (
      <div className="top-16 w-96">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm"></span>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full py-2 pl-3 pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search with name"
          />
          <div className="absolute inset-y-0 right-0 flex">
              <button className="w-20 text-white cursor-pointer  rounded-r-md bg-sky-500 hover:bg-sky-600">
                  <span>Search</span>
              </button>
          </div>
        </div>
      </div>
    )
  }