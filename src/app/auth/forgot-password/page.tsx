import React from 'react';

export default function ForgotPassword() {
  return (
    <div className='flex w-full max-w-md flex-col space-y-4 rounded-lg bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          We will send you an email to reset your password.{' '}
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='email'
            className='text-sm font-semibold text-gray-500'
          >
            Email Address
          </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email@examle.com'
            className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-red-500 focus:outline-none'
          />
        </div>
        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
          <button
            type='submit'
            className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white focus:outline-none sm:w-auto sm:px-8'
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
