import Image from "next/image";
import React from "react";

import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { ModalTitle } from "@components/ModalTitle";

/**
 * This component still needs:
 * [DONE] Icons
 * [DONE] UX in buttons
 * [DONE] Atomize
 * [DONE] responsive
 * [PENDING FOR DEPLOY] db connection
 */

interface ModalProps {
  openModal: boolean;
  setOpenModal: boolean | React.Dispatch<React.SetStateAction<boolean>>;
}

function ProfileModal({ openModal, setOpenModal }: ModalProps) {

  // When DB has been deployed, fill this object with the api data.
  const user = {
    username: 'usermock200',
    fullName: 'John Doe',
    role: 'Administrator',
    state: 'Active',
  };

  if (!openModal) {
    return null;
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-5/6 sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal state={setOpenModal} value={false} />
          <ModalTitle className="mb-20">User profile</ModalTitle>
          <div className="mx-40">
            <figure className="w-full mt-4 sm:w-fit">
              <Image
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                width="150"
                height="150"
                alt={user.fullName}
                className="rounded-full"
              ></Image>
            </figure>
            <div>
              <h2 className="my-1 text-2xl font-bold">{user.username}</h2>
              <p>{user.fullName}</p>
              <p className="my-1"></p>
              <p className="my-1 p-0.5 rounded-lg px-2 bg-green-500/[0.2] w-fit">
                {user.state}
              </p>
            </div>
          </div>
          <div className="relative bottom-14 sm:bottom-0 sm:my-4">
            <DeleteElementButton />
            <EditButton />
          </div>
        </div>
      </div>
    );
  }
}

export { ProfileModal };
