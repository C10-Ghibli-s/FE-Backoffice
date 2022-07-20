import Image from "next/image";
import React from "react";

import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { updateMovieType, updateMovieTypeFromDB } from "@customTypes/createItemTypes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateMovieSchema } from "@schemas/createNewItemSchema";
import { modalTypes } from "@customTypes/updateModalTypes";
import { reqResponse } from "@customTypes/ErrorHandling";
import { CloseModalButton } from "@components/CloseModalButton";
import { ErrorIcon } from "@components/ErrorIcon";
import { OkResponseIcon } from "@components/OkResponseIcon";
import { UploadImages } from "@services/UploadImages";
import axios from "axios";
import { UPDATE_MOVIE } from "@services/mutations/update/movie";

/**
 * This component still needs:
 * [DONE] Icons
 * [DONE] UX in buttons
 * [DONE] Atomize
 * [DONE] responsive
 * [PENDING FOR DEPLOY] db connection
 */

interface ModalProps {
  openShowModal: modalTypes,
  setOpenShowModal: React.Dispatch<React.SetStateAction<modalTypes>>,
  setReqStatus: React.Dispatch<React.SetStateAction<reqResponse>>,
  reqStatus: reqResponse,
}

function MovieModal({ openShowModal, setOpenShowModal, setReqStatus, reqStatus}: ModalProps) {
  const [editing, setEditing] = React.useState<string|null>(null);
  const methods = useForm<updateMovieType>({
    resolver: yupResolver(updateMovieSchema)
  });
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = methods;

  const UpdateMovieSubmit: SubmitHandler<updateMovieType> = (data: updateMovieType) => {

    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      UPDATE_MOVIE(data),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res)
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setReqStatus({success: "Movie updated successfully"});
    })
    .catch(err => {
      console.error(err)
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    })

  }


  const movieData = openShowModal.data?.movieData !== undefined 
    ? openShowModal.data.movieData
    : { 
        id: 0,
        title: {
          title: 'Movie title',
          originalTitle: 'Movie original title',
          romajiTitle: 'Movie romaji title',
        },
        filmDescription: 'Movie description',
        releaseDate: '2002',
        audienceScore: 'Movie rating',
        linkWiki: 'Movie genre',
        movieBanner: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      };
  
  if (openShowModal?.item !== 'Movies') {
    return null;
  } else {
    return (
      <div className="z-30 fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="sm:relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-[100%] sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <h2 className="w-11/12 my-3 text-2xl font-semibold text-left text-gray-900 border-l-4 border-blue-500 sm:ml-6 sm:text-3xl indent-2">
            {movieData.title.title}
          </h2>
          {editing == null && (
            <React.Fragment>
              <div className="flex-col mx-4 sm:mt-4 sm:flex sm:flex-row">
                <div className="flex order-last sm:mr-4 sm:order-first sm:block">
                  <figure className="w-[60%] sm:w-fit">
                    <Image
                      className="w-full h-full object-cover rounded-md"
                      src={movieData.movieBanner}
                      width="200"
                      height="300"
                      alt={'qwe'}
                    ></Image>
                  </figure>
                  <div className="m-2">
                    <p>Audience Score: {movieData.audienceScore}</p>
                    <p>
                      More info: {" "}
                      <a
                        target="blank"
                        className="text-blue-500 hover:underline select:underline"
                        href={movieData.linkWiki}
                      >
                        Wiki
                      </a>
                    </p>
                  </div>
                </div>
                <div className="order-first mt-4 sm:order-last sm:w-72 sm:block">
                  <p className="text-2xl">{movieData.title.originalTitle}</p>
                  <p className="text-xl">{movieData.title.romajiTitle}</p>
                  <p className="text-sm">{movieData.releaseDate}</p>
                  <p className="mt-8">{movieData.filmDescription}</p>
                </div>
              </div>
              <div className="relative sm:bottom-0 sm:my-4">
                <EditButton itemToEdit={openShowModal.item} setEditing={setEditing}/>
              </div>
            </React.Fragment>
          )}
          {editing === "Movies" && (
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(UpdateMovieSubmit)}>
                <div className="flex-col mx-4 sm:mt-4 sm:flex sm:flex-row">
                  <div className="flex order-last sm:mr-4 sm:order-first sm:block">
                    <input type="hidden" defaultValue={movieData.id} {...register('id')}/>
                    <UploadImages imageUrlDefault={movieData.movieBanner}/>
                    <div className="m-2">
                      <div className="flex flex-col">
                        <label htmlFor="audienceScore">Audience Score</label>
                        <input defaultValue={movieData.audienceScore} type="number" min={0} id="audienceScore" {...register('audienceScore')}/>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="wikiLink">Link to wiki</label>
                        <input defaultValue={movieData.linkWiki} type="text" id="audienceScore" {...register('linkWiki')}/>
                      </div>
                    </div>
                  </div>
                  <div className="order-first mt-4 sm:order-last sm:w-72 sm:block">
                    <div>
                      <label htmlFor="releaseDate">Release date</label>
                      <input type="text" id="releaseDate" {...register('releaseDate')} defaultValue={movieData.releaseDate} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="filmDescription">description</label>
                      <textarea id="filmDescription" {...register('filmDescription')} defaultValue={movieData.filmDescription} />
                    </div>
                  </div>
                </div>
                <div className="relative sm:bottom-0 sm:my-4">
                  <input value="Complete" type="submit" className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"/>
                  <DeleteElementButton itemToDelete="movie" id={movieData.id} setReqStatus={setReqStatus}/>
                </div>
              </form>
            </FormProvider>
          )}
        </div>
        {reqStatus !== null && (
        <div className={`bg-gray-200/95 w-full sm:w-3/5 max-w-md p-8 rounded-2xl flex flex-col justify-center p-12 absolute mt-60`}>
          {reqStatus.error !== undefined && (
              <React.Fragment>
                <button className='absolute top-8 right-8' onClick={() => setReqStatus(null)}>
                  <CloseModalButton/>
                </button>
                <ErrorIcon/>
                <h3 className='text-center mt-8 mb-16 text-xl'> 
                {reqStatus.error.serverError !== undefined && <p className='text-center text-red-700'>{reqStatus.error.serverError}</p>}
                {reqStatus.error.errorMessage} 
                </h3>
              </React.Fragment>
            )}
            {reqStatus.success !== undefined && (
              <React.Fragment>
                <OkResponseIcon/>
                <h3 className='text-center mt-8 mb-16 text-xl'> {reqStatus.success} </h3>
                <button 
                  className='bg-sky-500/75 hover:bg-sky-500 border border-sky-700 text-white mx-auto w-2/5 h-10 rounded-md'
                  onClick={() => {
                    setReqStatus(null);
                    setOpenShowModal({item: null, data: {}});
                  }}>
                    Accept
                </button>
              </React.Fragment>
            )}
        </div>
      )}
      </div>
    );
  }
}

export { MovieModal };
