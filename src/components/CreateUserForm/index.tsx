import { newUserType } from "@customTypes/createItemTypes";
import React, { FC } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newUserSchema } from "@schemas/createNewItemSchema";
import { CreateUserSubmit } from "@services/CreateFormSubmit";

export const CreateUserForm: FC = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newUserType>({
    resolver: yupResolver(newUserSchema)
  });
  return(
    <form onSubmit={handleSubmit(CreateUserSubmit)}>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" placeholder="email" {...register('email')}/>
        {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="nickname">user name</label>
        <input type="text" id="nickname" placeholder="nickname" {...register('nickname')}/>
        {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" placeholder="password" {...register('password')}/>
        {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="role">role</label>
        <input type="checbox" {...register('role')}/>
      </div>
      <input type="submit" value="Create user"></input>
    </form>
  );
};
