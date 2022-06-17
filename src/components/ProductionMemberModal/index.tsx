import Image from "next/image";
import React from "react";
// Dependencies components
import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { ModalTitle } from "@components/ModalTitle";

interface ModalProps {
  openProductionModal: boolean;
  setOpenProductionModal:
    | boolean
    | React.Dispatch<React.SetStateAction<boolean>>;
}

function ProductionMemberModal({
  openProductionModal,
  setOpenProductionModal,
}: ModalProps) {
  // When DB has been deployed, fill this object with the api data.
  const teamProduction = {
    fullName: "John Doe",
    role: "Musician",
  };

  if (!openProductionModal) {
    return null;
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-5/6 sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal state={setOpenProductionModal} value={false} />
          <ModalTitle className="mb-20">Team production</ModalTitle>
          <div className="mx-40">
            <figure className="w-full mt-4 sm:w-fit">
              <Image
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                width="150"
                height="150"
                alt={teamProduction.fullName}
                className="rounded-full"
              ></Image>
            </figure>
            <div>
              <p className="my-2 text-xl font-semibold text-center">
                {teamProduction.fullName}
              </p>
              <p className="mx-auto text-center p-0.5 rounded-lg px-2 bg-violet-500/[0.2] w-[60%]">
                {teamProduction.role}
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

export { ProductionMemberModal };
