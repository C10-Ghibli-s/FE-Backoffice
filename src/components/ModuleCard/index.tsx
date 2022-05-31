import React, { useState } from "react";
import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  icons: string;
  goToSearchPage: string;
  goToCreatePage: string;
}

function ModuleCard({
  title,
  description,
  icons,
  goToSearchPage,
  goToCreatePage,
}: ModuleCardProps) {
  const [cardSelected, setCardSelected] = useState(false);
  return (
    <>
      <section
        onClick={() => {
          setCardSelected(!cardSelected);
        }}
        className={`relative flex items-center w-5/6 h-24 p-2 mt-1 align-middle bg-white ${
          !cardSelected ? "rounded-xl" : "rounded-t-xl outline outline-4"
        } hover:cursor-pointer hover:outline outline-4 outline-blue-400 `}
      >
        <span
          className={`w-8 h-8 mx-3 bg-center bg-no-repeat bg-cover bg-${icons}`}
        ></span>
        <h2 className="text-2xl text-gray-900 left-2">{title}</h2>
        <p className="absolute italic text-gray-400 right-12">{description}</p>
        <span
          className={`${
            cardSelected ? "rotate-0" : "-rotate-90"
          } transition bg-center bg-no-repeat bg-contain h-4 w-4 absolute right-2 bg-[url('../assets/icons/arrow-icon.svg')]`}
        ></span>
      </section>
      {cardSelected && (
        <div className="relative flex items-center w-5/6 h-16 p-2 mt-1 align-middle bg-white rounded-b-xl hover:cursor-pointer ">
          <Link
            href={goToSearchPage}
            className="p-1 m-2 ml-12 border-blue-400 hover:cursor-pointer hover:border-b-4"
          >
            <a className="p-1 m-2 ml-12 border-blue-400 hover:cursor-pointer hover:border-b-4">
              search and edit
            </a>
          </Link>
          <Link href={goToCreatePage}>
            <a className="p-1 m-2 border-blue-400 hover:cursor-pointer hover:border-b-4">
              create
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export { ModuleCard };
