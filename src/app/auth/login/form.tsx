'use client';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputField } from './InputField';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/');
        return;
      }
      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));
    } catch (error) {
      console.log('An error occurred:', error);
      setErrors(['An unexpected error occurred']);
    }
  };

  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded-lg bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-500'>
          New to the app?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Sign up for an account
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          label='Email Address'
          id='email'
          type='email'
          placeholder='email@example.com'
        />
        <InputField
          label='Password'
          id='password'
          type='password'
          placeholder='Your password'
        />

        {errors.length > 0 && (
          <div className='flex flex-col space-y-1'>
            {errors.map((error, index) => (
              <p key={index} className='text-sm text-red-500'>
                {error}
              </p>
            ))}
          </div>
        )}

        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
          <button
            type='submit'
            className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white focus:outline-none sm:w-auto sm:px-8'
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
