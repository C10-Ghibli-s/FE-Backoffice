import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ModuleCard({ title, description, icon }: ModuleCardProps) {
  return (
    <div className="relative flex items-center w-5/6 h-16 p-2 mt-10 align-middle bg-white rounded-sm shadow-md hover:cursor-pointer hover:outline outline-4 outline-blue-400">
      <span
        className={`w-8 h-8 mx-3 bg-center bg-no-repeat bg-cover bg-${icon}`}
      ></span>
      <h2 className="text-xl text-gray-900 left-2">{title}</h2>
      <p className="absolute text-gray-900 right-12">{description}</p>
      <span className="absolute right-2">&gt;</span>
    </div>
  );
}

export { ModuleCard };
