import React, { useState } from "react";
import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  icons: string;
  goToSearchPage: string;
  itemToCreate: string;
  setShowCreateItem: any;
}

function ModuleCard({
  title,
  description,
  icons,
  goToSearchPage,
  itemToCreate,
  setShowCreateItem
}: ModuleCardProps) {
  const [cardSelected, setCardSelected] = useState(false);
  return (
    <>
      <section
        onClick={() => { 
          setCardSelected(!cardSelected);
        }}
        className={`relative flex flex-col sm:flex sm:flex-row w-5/6 sm:h-28 sm:justify-between p-2 mt-1 align-middle sm:items-center bg-white ${
          !cardSelected ? "rounded-xl" : "rounded-t-xl outline outline-4"
        } hover:cursor-pointer hover:outline outline-4 outline-blue-400 `}
      >
        <span
          className={`absolute top-[19px] w-6 h-6 sm:w-7 sm:h-7 sm:top-10 mx-3 bg-center bg-no-repeat bg-cover ${icons}`}
        ></span>
        <h2 className="p-2 text-2xl text-gray-900 sm:h-fit indent-10">
          {title}
        </h2>
        <p className="p-2 m-2 italic text-gray-400 sm:pr-8 sm:h-fit right-12">
          {description}
        </p>
        <span
          className={`${
            cardSelected ? "rotate-0" : "-rotate-90"
          } transition bg-center bg-no-repeat bg-contain h-4 w-4 absolute right-2 bottom-14 sm:bottom-12 bg-[url('../assets/icons/arrow-icon.svg')]`}
        ></span>
      </section>
      {cardSelected && (
        <div className="relative flex items-center w-5/6 h-16 p-2 mt-1 align-middle bg-white rounded-b-xl hover:cursor-pointer ">
          <Link
            href={{pathname: goToSearchPage, query: {nameModule: title}}}
            className="p-1 m-2 ml-12 border-blue-400 hover:cursor-pointer hover:border-b-4"
          >
            <a className="p-1 m-2 ml-12 border-blue-400 hover:cursor-pointer hover:border-b-4">
              search and edit
            </a>
          </Link>
          <button onClick={()=> {setShowCreateItem(itemToCreate)}} className="p-1 m-2 border-blue-400 hover:cursor-pointer hover:border-b-4">
            create
          </button>
        </div>
      )}
    </>
  );
}

export { ModuleCard };
