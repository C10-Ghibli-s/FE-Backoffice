import { UserContext } from "@auth0/nextjs-auth0";
import { MenuExpanded } from "@components/MenuExpanded";
import React, { useState } from "react";

interface MenuProps {
  username: string | undefined | null;
}

function Menu({ username }: MenuProps) {
  const [menuActive, setMenuActive] = useState(false);

  const handlerMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div
        onClick={handlerMenu}
        className={`sm:hidden relative flex flex-col justify-center w-10 h-full mx-3 cursor-pointer align-center`}
      >
        <span
          className={`${
            menuActive ? "rotate-45 top-[27.5px]" : ""
          } transform-gpu transition-transform bottom-[30px] absolute w-full h-[5px] bg-white rounded-sm `}
        />
        <span
          className={`${
            menuActive ? "-rotate-45 top-7" : ""
          } transform-gpu transition-transform bottom-5 absolute w-full h-[5px] bg-white  rounded-sm`}
        />
      </div>
      <div
        className="hidden mx-4 text-xl font-bold text-white cursor-pointer sm:block"
        onClick={handlerMenu}
      >
        {username}
      </div>
      {menuActive && (
        <MenuExpanded menuActive={menuActive} username={username} />
      )}
    </>
  );
}

export { Menu };
