import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthSessionForm, AuthSessionForm_schema, LoginFormSubmitHandler } from '@services/AuthSessionForm';

const LoginForm: FC = () => {
  const { 
    register,
    handleSubmit, 
    formState: { errors }, 
  } = useForm<AuthSessionForm>({
    resolver: yupResolver( AuthSessionForm_schema )
  });

  return (
    <form className='mt-10 md:mt-0 flex flex-col content-center' onSubmit={handleSubmit(LoginFormSubmitHandler)}>
      <div className='flex flex-col'>
        <input className='border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:border-sky-600 focus:z-10 pl-2 p-1' type='text' placeholder="Username" defaultValue="" {...register('name')}/>
        {errors.name && errors.name?.message && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </div>
      <div className='flex flex-col'>
        <input className='border border-gray-300 placeholder-gray-500 rounded-b-md focus:outline-none focus:border-sky-600 focus:z-10 pl-2 p-1' type="password" placeholder='Password' defaultValue="" {...register('password')}/>
        {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
      </div>
      <input className='mx-auto w-3/4 bg-sky-500 hover:bg-sky-600 rounded-lg text-white mt-10 p-1 cursor-pointer' type="submit" value="Login"/>
    </form>
  );
};

export default LoginForm;

