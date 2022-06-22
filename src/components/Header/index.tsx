import React from "react";
import Image from "next/image";
import ghibli from "@assets/icons/ghibli-tracker.svg";
import BackButton from "@components/BackButton";
import { Menu } from "@components/Menu";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full bg-blue-500 h-14 sm:h-13">
        <BackButton />
        <Link href={"/modules"}>
          <Image
            alt="Ghibli tracker"
            src={ghibli}
            width={"65"}
            height={"65"}
            className="cursor-pointer"
          />
        </Link>
        <Menu username={'newuser21321'} />
      </header>
    </>
  );
}

export { Header };
