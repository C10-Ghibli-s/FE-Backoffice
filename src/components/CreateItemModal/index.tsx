import React, { FC, useState } from 'react';
import Portal from 'src/HOC/modal';
import { CloseModalButton } from '@components/CloseModalButton';
import { CreateMovieForm } from '@components/CreateMovieForm';
import { CreateUserForm } from '@components/CreateUserForm';
import { CreateDirectorForm } from '@components/CreateDirectorForm';
import { CreateWriterForm } from '@components/CreateWriterForm';
import { CreateMusicianForm } from '@components/CreateMusicianForm';
import { reqResponse } from '@customTypes/ErrorHandling';
import { OkResponseIcon } from '@components/OkResponseIcon';
import { ErrorIcon } from '@components/ErrorIcon';

type createItem = {
  item: string,
  setShowCreateItem: React.Dispatch<React.SetStateAction<string|null>>
}


export const CreateItemModal: FC<createItem> = ({item, setShowCreateItem}) => {
  const [reqStatus, setReqStatus] = useState<reqResponse>(null);
  return(
    <Portal>
      <div className='bg-slate-900/75 fixed bottom-0 h-full md:h-screen w-screen flex justify-center items-center'>
        {reqStatus == null &&<div className={`bg-gray-200/95 ${item == "movie" || item == "user" ? 'h-full sm:h-full sm:w-4/5 md:p-8' : ''} rounded-2xl flex flex-col p-12 relative`}>
          <button className='absolute right-12' onClick={() => setShowCreateItem(null)}>
            <CloseModalButton/>
          </button>
          <h1 className="p-2 mt-5 mb-5 md:mb-0 text-3xl font-semibold text-gray-900 border-b-4 border-blue-500 sm:text-left">Create {item}</h1>
          {item == "user" && <CreateUserForm setReqStatus={setReqStatus}/>}
          {item == "movie" && <CreateMovieForm setShowCreateItem={setShowCreateItem} setReqStatus={setReqStatus}/>}
          {item == "director" && <CreateDirectorForm setReqStatus={setReqStatus}/>}
          {item == "writer" && <CreateWriterForm setReqStatus={setReqStatus}/>}
          {item == "musician" && <CreateMusicianForm setReqStatus={setReqStatus}/>}
        </div>}
        {reqStatus !== null && 
          <div className={`bg-gray-200/95 ${item == "movie" || item == "user" ? 'w-full sm:w-3/5 max-w-md p-8' : ''} rounded-2xl flex flex-col justify-center p-12 relative`}>
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
                    setShowCreateItem(null);
                  }}>
                    Accept
                </button>
              </React.Fragment>
            )}
          </div>
        }
      </div>
    </Portal>
  );
};
