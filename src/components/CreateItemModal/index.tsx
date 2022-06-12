import React, { FC } from 'react';
import Portal from 'src/HOC/modal';
import { CloseModalButton } from '@components/CloseModalButton';
import { CreateMovieForm } from '@components/CreateMovieForm';
import { CreateUserForm } from '@components/CreateUserForm';
import { CreateDirectorForm } from '@components/CreateDirectorForm';
import { CreateWriterForm } from '@components/CreateWriterForm';
import { CreateMusicianForm } from '@components/CreateMusicianForm';

type createItem = {
  item: string,
  setShowCreateItem: React.Dispatch<React.SetStateAction<string|null>>
}

export const CreateItemModal: FC<createItem> = ({item, setShowCreateItem}) => {
  return(
    <Portal>
      <div className='bg-slate-900/75 absolute bottom-0 h-screen w-full flex justify-center items-center'>
        <div className='bg-gray-200/95 h-5/6 w-3/5 rounded-2xl flex flex-col p-12 relative'>
          <button className='absolute right-12' onClick={() => setShowCreateItem(null)}>
            <CloseModalButton/>
          </button>
          <h1 className="p-2 mt-5 mb-5 text-3xl font-semibold text-gray-900 border-b-4 border-blue-500 sm:text-left">Create {item}</h1>
          {item == "user" && <CreateUserForm/>}
          {item == "movie" && <CreateMovieForm/>}
          {item == "director" && <CreateDirectorForm/>}
          {item == "writer" && <CreateWriterForm/>}
          {item == "musician" && <CreateMusicianForm/>}
        </div>
      </div>
    </Portal>
  );
};
