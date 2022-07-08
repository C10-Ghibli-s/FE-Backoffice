import Image from "next/image";
import React from "react";

import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import Select from "react-select";
import { updateUserForQuery } from '@customTypes/createItemTypes';

import { SubmitHandler, useForm } from "react-hook-form";
import { updateUserSchema } from '@schemas/createNewItemSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { UPDATE_USER } from "@services/mutations/update/user";
import { modalTypes } from "@customTypes/updateModalTypes";
import { reqResponse } from "@customTypes/ErrorHandling";
import { OkResponseIcon } from "@components/OkResponseIcon";
import { ErrorIcon } from "@components/ErrorIcon";
import { CloseModalButton } from "@components/CloseModalButton";

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

function ProfileModal({ openShowModal, setOpenShowModal, setReqStatus, reqStatus}: ModalProps) {
  //const userStatus = [{label:"ACTIVE", value: 1}, {label: "BANNED", value: 2}, {label: "SUSPENDED", value: 3}];
  //const rolesOptions = [{label:"USER", value:1}, {label:"ADMIN", value:2}]
  const [editing, setEditing] = React.useState<string|null>(null);
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<updateUserForQuery>({
    resolver: yupResolver(updateUserSchema)
  });
  const UpdateUser: SubmitHandler<updateUserForQuery> = (data: updateUserForQuery) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      UPDATE_USER(data),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      if(reqStatus !== null) {
        return;
      } else {
        res.data.errors !== undefined 
          ? setReqStatus({error: {errorMessage: res.data.errors[0].message}}) 
          : setReqStatus({success: 'User updated successfully'});
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  const userData = openShowModal.data?.userData !== undefined 
  ? openShowModal.data?.userData 
  : { 
      id: 0,
      nickname: "USER TEST",
      status: "ACTIVE",
      role: {
        name: "USER",
      }
    };
    console.log(userData)

  if (openShowModal.item !== 'Users') {
    return null;
  } else {
    return (
      <div className="z-20 fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-5/6 sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <h2 className="w-11/12 mb-20 my-3 text-2xl font-semibold text-left text-gray-900 border-l-4 border-blue-500 sm:ml-6 sm:text-3xl indent-2">
            User Profile
          </h2>
          {editing == null && (
            <div className="flex flex-col items-center">
              <div className="mx-40 flex items-center">
                <figure className="w-full mt-4 sm:w-fit">
                  <Image
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  width="150"
                  height="150"
                  alt={userData.nickname}
                  className="rounded-full"
                  ></Image>
                </figure>
              </div>
              <div>
                <h2 className="my-1 text-2xl text-center font-bold">{userData.nickname}</h2>
                <p className="my-1"></p>
                <p className={`my-1 p-0.5 rounded-lg px-2 ${userData.status == 'ACTIVE' ? 'bg-green-500/[0.2]' : 'bg-red-500/[0.2]'} w-fit`}>
                  {userData.status}
                </p>
              </div>
              <div className="relative bottom-14 sm:bottom-0 sm:my-4">
                <EditButton itemToEdit={'user'} setEditing={setEditing}/>
              </div>
            </div>
          )}
          {editing === 'user' && (
            <form onSubmit={handleSubmit(UpdateUser)} className="flex flex-col items-center justify-center">
              <div className="mx-40 flex items-center">
                <figure className="w-full mt-4 sm:w-fit">
                  <Image
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  width="150"
                  height="150"
                  alt={userData.nickname}
                  className="rounded-full"
                  ></Image>
                </figure>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col">
                  <label htmlFor="nickname">nickname</label>
                  <input type="text" className="w-60 p-2 my-2 rounded-lg border-2 border-sky-500" placeholder="Username" id="nickname" {...register('nickname')}/>
                  {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname.message}</p>}
                </div>
                <div className="flex flex-col items-center">
                  <label htmlFor="status">Status: <em>BANNED | ACTIVE | SUSPENDED</em></label>
                  <input className="w-60 p-2 my-2 rounded-lg border-2 border-sky-500" defaultValue={userData.status} {...register('status')} id='status' type="text"/>
                  {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                </div>
                <input defaultValue={userData.id} {...register('id')} id='userId' className='hidden' type="text"/>
                <div className="flex flex-col mb-10">
                  <label htmlFor="role">Role: ADMIN | USER</label>
                  <input {...register("role")} defaultValue={userData.role?.name} id="role" className="w-60 p-2 my-2 rounded-lg border-2 border-sky-500" placeholder="role" type="text"/>
                  {errors.role && errors.role?.name?.message && <span className='text-xs text-red-500'>{errors.role.name?.message}</span>}
                </div>
              </div>
              <div className="relative bottom-14 sm:bottom-0 sm:my-4">
                <input value="Complete" type="submit" className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"/>
                <DeleteElementButton id={userData.id} itemToDelete='User' setReqStatus={setReqStatus}/>
              </div>
            </form>
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

export { ProfileModal };
