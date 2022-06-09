import Image from "next/image";
import React from "react";

function ProfileModal() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center items-start">
      <div className="absolute flex flex-col items-center w-1/3 border-2 rounded-lg bg-slate-50 h-80 top-20">
        <span className="absolute right-2">❌</span>
        <div>
          <h2>User profile</h2>
          <figure>
            <Image
              src="https://avatars.githubusercontent.com/u/73669701?v=4"
              width="150"
              height="150"
              alt="Image profile"
              ></Image>
            <div>
              <h2>AreYouIvan</h2>
              <p>Administrator</p>
              <p>Active</p>
            </div>
          </figure>
        </div>
        <div>
          <button>Save</button>
          <span>🪣</span>
        </div>
      </div>
    </div>
  );
}

export { ProfileModal };
