import React, { FC, useState } from "react";
import Portal from "src/HOC/modal";
import { CloseModalButton } from "@components/CloseModalButton";
import { CreateMovieForm } from "@components/CreateMovieForm";
import { CreateUserForm } from "@components/CreateUserForm";
import { CreateDirectorForm } from "@components/CreateDirectorForm";
import { CreateWriterForm } from "@components/CreateWriterForm";
import { CreateMusicianForm } from "@components/CreateMusicianForm";
import { reqResponse } from "@customTypes/ErrorHandling";
import { OkResponseIcon } from "@components/OkResponseIcon";
import { ErrorIcon } from "@components/ErrorIcon";
import { ModalTitle } from "@components/ModalTitle";

type createItem = {
  item: string;
  setShowCreateItem: React.Dispatch<React.SetStateAction<string | null>>;
};

export const CreateItemModal: FC<createItem> = ({
  item,
  setShowCreateItem,
}) => {
  const [reqStatus, setReqStatus] = useState<reqResponse>(null);
  return (
    <Portal>
      <div className="fixed bottom-0 flex items-center justify-center w-screen h-full bg-black/[0.6]">
        {reqStatus == null && (
          <div
            className={`bg-slate-50 ${
              item == "movie" || item == "user"
                ? "h-full sm:h-full sm:w-4/5 md:p-2"
                : ""
            } rounded-2xl h-[90%] sm:h-fit sm:w-fit sm:bottom-0 sm:top-32 items-center flex flex-col p-2 pt-6 pb-16 w-full absolute -bottom-3`}
          >
            <button
              className="absolute right-[20px] top-4"
              onClick={() => setShowCreateItem(null)}
            >
              <CloseModalButton />
            </button>
            <div className="pl w-[208px] sm:w-[355px]">
              <ModalTitle>Create {item}</ModalTitle>
            </div>
            {item == "user" && <CreateUserForm setReqStatus={setReqStatus} />}
            {item == "movie" && (
              <CreateMovieForm
                setShowCreateItem={setShowCreateItem}
                setReqStatus={setReqStatus}
              />
            )}
            {item == "director" && (
              <CreateDirectorForm setReqStatus={setReqStatus} />
            )}
            {item == "writer" && (
              <CreateWriterForm setReqStatus={setReqStatus} />
            )}
            {item == "musician" && (
              <CreateMusicianForm setReqStatus={setReqStatus} />
            )}
          </div>
        )}
        {reqStatus !== null && (
          <div
            className={`bg-gray-200/95 ${
              item == "movie" || item == "user"
                ? "w-full sm:w-3/5 max-w-md p-8"
                : ""
            } rounded-2xl flex flex-col justify-center p-12 relative`}
          >
            {reqStatus.error !== undefined && (
              <React.Fragment>
                <button
                  className="absolute top-8 right-8"
                  onClick={() => setReqStatus(null)}
                >
                  <CloseModalButton />
                </button>
                <ErrorIcon />
                <h3 className="mt-8 mb-16 text-xl text-center">
                  {reqStatus.error.serverError !== undefined && (
                    <p className="text-center text-red-700">
                      {reqStatus.error.serverError}
                    </p>
                  )}
                  {reqStatus.error.errorMessage}
                </h3>
              </React.Fragment>
            )}
            {reqStatus.success !== undefined && (
              <React.Fragment>
                <OkResponseIcon />
                <h3 className="mt-8 mb-16 text-xl text-center">
                  {reqStatus.success}
                </h3>
                <button
                  className="w-2/5 h-10 mx-auto text-white border rounded-md bg-sky-500/75 hover:bg-sky-500 border-sky-700"
                  onClick={() => {
                    setReqStatus(null);
                    setShowCreateItem(null);
                  }}
                >
                  Accept
                </button>
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    </Portal>
  );
};
