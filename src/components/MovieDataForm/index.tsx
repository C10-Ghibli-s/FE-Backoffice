import React, { FC, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { UploadImages } from "@services/UploadImages";

type formSteping = {
  formStep: string;
  setFormStep: React.Dispatch<SetStateAction<string>>;
};

export const MovieDataForm: FC<formSteping> = ({ formStep, setFormStep }) => {

  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-y-visible sm:overflow-auto sm:flex-row ">
        <div className="sm:px-8 sm:pt-4">
          <div className="flex flex-col">
            <label htmlFor="releaseDate">Realease date*</label>
            <input
              defaultValue="1989-01-01"
              className="w-56 h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 lg:w-56 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="date"
              min="1950-01-01"
              max="2030-01-01"
              id="releaseDate"
              placeholder="yyyy-mm-dd"
              {...register("releaseDate")}
            ></input>
            {errors.releaseDate && errors.releaseDate?.message && (
              <span className="text-xs text-red-500">
                {errors.releaseDate.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration">Duration*</label>
            <input
              defaultValue="0"
              className="w-56 h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 lg:w-56 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="duration"
              type="number"
              placeholder="movie duration"
              {...register("duration")}
            />
            {errors.duration && errors.duration?.message && (
              <span className="max-w-full text-xs text-red-500">
                {errors.duration.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="filmDescription">Description*</label>
            <textarea
              className="w-56 h-20 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm sm:w-80 lg:w-56 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="filmDescription"
              placeholder="movie description"
              {...register("filmDescription")}
            />
            {errors.filmDescription && errors.filmDescription?.message && (
              <span className="text-xs text-red-500">
                {errors.filmDescription.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="audienceScore">Audience Score</label>
            <input
              className="h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm w-52 sm:w-80 lg:w-56 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="audienceScore"
              type="number"
              placeholder="audience score e.g 5.0"
              {...register("audienceScore")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-5/6 p-4">
          <UploadImages/>
          <div className="flex flex-col mt-4">
            <label htmlFor="linkWiki">link to Wiki*</label>
            <input
              defaultValue="https:"
              className="h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm w-52 sm:w-80 lg:w-56 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="linkWiki"
              type="text"
              placeholder="link to the wiki"
              {...register("linkWiki")}
            />
            {errors.linkWiki && errors.linkWiki?.message && (
              <span className="max-w-xs text-xs text-red-500">
                {errors.linkWiki.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="relative mb-2 font-bold transition-colors text-gray-500 w-[60px] after:bg-slate-500 after:content-[''] hover:after:h-[2px] after:w-full after:absolute after:-left-[0] after:top-7 hover:cursor-pointer"
          onClick={() => {
            setFormStep("Title");
          }}
          children="Back"
        />
        {(formStep == "Data") && (
          <input
            className="p-2 mb-2 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 w-[200px] ml-7 hover:cursor-pointer"
            type="submit"
            value="Create Movie"
          />
        )}
      </div>
    </>
  );
};
