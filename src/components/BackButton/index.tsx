import React, { FC } from "react";
import Image from "next/image";
import backArrow from "@assets/icons/back-arrow.svg"; 
import Router from "next/router";
const BackButton = () => {

  const handlerBackButton = () => {
    Router.back();
  }
  
  return (
    <button
      onClick={handlerBackButton}
      className="flex items-center justify-center w-10 h-full mx-3"
    >
      <Image alt="Go back" src={backArrow} className="mx-2 " />
    </button>
  );
};

export default BackButton;
