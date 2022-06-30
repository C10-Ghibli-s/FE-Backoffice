import Image from "next/image";
import React from "react";

import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { ModalTitle } from "@components/ModalTitle";
import { newMovieType } from "@customTypes/createItemTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { newMovieSchema } from "@schemas/createNewItemSchema";

/**
 * This component still needs:
 * [DONE] Icons
 * [DONE] UX in buttons
 * [DONE] Atomize
 * [DONE] responsive
 * [PENDING FOR DEPLOY] db connection
 */

interface ModalProps {
  openShowModal: string|null,
  setOpenShowModal: boolean | React.Dispatch<React.SetStateAction<string|null>>,
  movieData?: newMovieType
}

function MovieModal({ openShowModal, setOpenShowModal, movieData }: ModalProps) {
  const [editing, setEditing] = React.useState<string|null>(null);
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });
  // When DB has been deployed, fill this object with the api data.
  const movie = {
    title: "My Neighbor Totoro",
    originalTitle: "となりのトトロ",
    romanarizedTitle: "Tonari no Totoro",
    releaseDate: "1988",
    description:
      "My Neighbor Totoro (Japanese: となりのトトロ, Hepburn: Tonari no Totoro) is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten.",
    audienceScore: "10/10",
    wikiLink: "https://en.wikipedia.org/wiki/My_Neighbor_Totoro",
  };

  if (openShowModal !== 'movie') {
    return null;
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="sm:relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-[100%] sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <ModalTitle>{movie.title}</ModalTitle>
          {editing == null && (
            <React.Fragment>
              <div className="flex-col mx-4 sm:mt-4 sm:flex sm:flex-row">
                <div className="flex order-last sm:mr-4 sm:order-first sm:block">
                  <figure className="w-[60%] sm:w-fit">
                    <Image
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      width="200"
                      height="300"
                      alt={movie.title}
                      className="rounded-md"
                    ></Image>
                  </figure>
                  <div className="m-2">
                    <p>Audience Score: {movie.audienceScore}</p>
                    <p>
                      More info:{" "}
                      <a
                        target="blank"
                        className="text-blue-500 hover:underline select:underline"
                        href={movie.wikiLink}
                      >
                        Wiki
                      </a>
                    </p>
                  </div>
                </div>
                <div className="order-first mt-4 sm:order-last sm:w-72 sm:block">
                  <p className="text-2xl">{movie.originalTitle}</p>
                  <p className="text-xl">{movie.romanarizedTitle}</p>
                  <p className="text-sm">{movie.releaseDate}</p>
                  <p className="mt-8">{movie.description}</p>
                </div>
              </div>
              <div className="relative sm:bottom-0 sm:my-4">
                <EditButton itemToEdit={openShowModal} setEditing={setEditing}/>
              </div>
            </React.Fragment>
          )}
          {editing === "movie" && (
            <React.Fragment>
              <div className="flex-col mx-4 sm:mt-4 sm:flex sm:flex-row">
                <div className="flex order-last sm:mr-4 sm:order-first sm:block">
                  <figure className="w-[60%] sm:w-fit">
                    <Image
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      width="200"
                      height="300"
                      alt={movie.title}
                      className="rounded-md"
                    ></Image>
                  </figure>
                  <div className="m-2">
                    <div className="flex flex-col">
                      <label htmlFor="audienceScore">Audience Score</label>
                      <input defaultValue={movie.audienceScore} type="number" min={0} id="audienceScore" {...register('audienceScore')}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="wikiLink">Link to wiki</label>
                      <input defaultValue={movie.wikiLink} type="text" id="audienceScore" {...register('linkWiki')}/>
                    </div>
                  </div>
                </div>
                <div className="order-first mt-4 sm:order-last sm:w-72 sm:block">
                  <div>
                    <label htmlFor="originalTitle">Original title</label>
                    <input type="text" id="originalTitle" {...register('originalTitle')} defaultValue={movie.originalTitle} />
                  </div>
                  <div>
                    <label htmlFor="romajiTitle">Romanized title</label>
                    <input type="text" id="romajiTitle" {...register('romajiTitle')} defaultValue={movie.romanarizedTitle} />
                  </div>
                  <div>
                    <label htmlFor="releaseDate">Release date</label>
                    <input type="text" id="releaseDate" {...register('releaseDate')} defaultValue={movie.releaseDate} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="filmDescription">description</label>
                    <textarea id="filmDescription" {...register('filmDescription')} defaultValue={movie.description} />
                  </div>
                </div>
              </div>
              <div className="relative sm:bottom-0 sm:my-4">
                <input value="Complete" type="submit" className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"/>
                <DeleteElementButton itemToDelete="movie" id={1}/>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export { MovieModal };
