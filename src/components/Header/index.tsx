import React from "react";
import Image from "next/image";
import ghibli from "@assets/icons/ghibli-tracker.svg";
import BackButton from "@components/BackButton";
import { Menu } from "@components/Menu";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
function Header() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <header className=" flex items-center justify-between w-[calc(50% - 20px)] bg-blue-500 h-14 sm:h-13">
        <BackButton />
        <Link href={"/modules"}>
          <figure className="sm:mt-2 sm:ml-16 w-fit h-fit">
            <Image
              alt="Ghibli tracker"
              src={ghibli}
              width={"60"}
              height={"60"}
              className="cursor-pointer"
            />
          </figure>
        </Link>
        <Menu username={user?.nickname} />
      </header>
    </>
  );
}

export { Header };
