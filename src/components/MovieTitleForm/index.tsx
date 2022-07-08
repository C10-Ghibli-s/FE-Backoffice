import React, { FC, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

type formSteping = {
  formStep: string;
  setFormStep: React.Dispatch<SetStateAction<string>>;
  setShowCreateItem: React.Dispatch<SetStateAction<string | null>>;
};

export const MovieTitleForm: FC<formSteping> = ({
  formStep,
  setFormStep,
  setShowCreateItem,
}: formSteping) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  return (
    <div className="flex flex-col items-center justify-center m-auto sm:p-8">
      <div className="flex flex-col">
        <label htmlFor="title">Title*</label>
        <input
          className="w-56 h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          id="title"
          placeholder="movie title"
          {...register("title")}
        />
        {errors.title && errors.title?.message && (
          <span className="text-xs text-red-500">{errors.title.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="originalTitle">Original title*</label>
        <input
          className="w-56 h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          id="originalTitle"
          placeholder="original movie title"
          {...register("originalTitle")}
        />
        {errors.originalTitle && errors.originalTitle?.message && (
          <span className="text-xs text-red-500">
            {errors.originalTitle.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="romajiTitle">Romaji title</label>
        <input
          className="w-56 h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          id="romajiTitle"
          placeholder="romaji title"
          {...register("romajiTitle")}
        />
        {errors.romajiTitle && errors.romajiTitle?.message && (
          <span className="text-xs text-red-500">
            {errors.romajiTitle.message}
          </span>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {(formStep == "Title" || formStep == "Data") && (
          <button
            className=" order-2 p-2 mb-2 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 w-[200px] ml-7"
            onClick={() =>
              formStep == "Title"
                ? setFormStep("Data")
                : setFormStep("Producers")
            }
          >
            Next
          </button>
        )}
        <button
          className="order-1 relative mb-2 font-bold transition-colors text-gray-500 w-[60px] after:bg-slate-500 after:content-[''] hover:after:h-[2px] after:w-full after:absolute after:-left-[0] after:top-7 "
          onClick={() => {
            setShowCreateItem(null);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
