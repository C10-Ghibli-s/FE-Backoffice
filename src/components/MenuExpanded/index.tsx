import React from "react";

interface MenuExpandedProps {
  username: string;
  menuActive: boolean;
}

function MenuExpanded({ username, menuActive }: MenuExpandedProps) {
  const logoutHandler = () => {
    alert("You are going to log out");
  };
  const aboutHandler = () => {
    alert("This project was made for these rockstars...");
  };



  return (
    <div
      className={`animate-SwipeLeft absolute z-10 w-48 bg-white rounded-lg shadow-custom h-fill right-2 top-16`}
    >
      <h2 className="m-4 text-2xl font-bold leading-6 text-slate-300">
        Hello <br />
        <span className="text-gray-600">{username}!</span>
      </h2>
      <div className="w-[85%] h-[2px] bg-slate-100 mx-auto rounded-sm m-3"></div>
      <ul className="text-gray-600 text-2xl leading-[2]">
        <li
          onClick={logoutHandler}
          className="p-4 cursor-pointer hover:bg-slate-100 active:bg-slate-100"
        >
          log out
        </li>
        <li
          onClick={aboutHandler}
          className="p-4 cursor-pointer hover:bg-slate-100 active:bg-slate-100"
        >
          about
        </li>
      </ul>
    </div>
  );
}

export { MenuExpanded };
