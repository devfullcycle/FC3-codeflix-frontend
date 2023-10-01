import React from 'react';

export type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
};

export const InputField: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
}) => (
  <div className='flex flex-col space-y-1'>
    <label htmlFor={id} className='text-sm font-semibold text-gray-500'>
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={id}
      placeholder={placeholder}
      className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-red-500 focus:outline-none'
    />
  </div>
);
