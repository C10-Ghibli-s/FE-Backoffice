import React from "react";

export default function SearchFilter( data ) {
  console.log("data from SearchFilter component: ", data.data.items);

  return (
    <div className="top-16 w-96">
      <div className="relative h-12 mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full h-full py-2 pl-10 pr-12 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search with name"
        />
        <div className="absolute inset-y-0 right-0 flex">
            <button className="w-20 text-white bg-blue-400 cursor-pointer rounded-r-md hover:bg-blue-500">
                <span>Search</span>
            </button>
        </div>
      </div>
    </div>
  )
}