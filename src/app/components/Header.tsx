'use client';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
    ${isScrolled && 'bg-black'}
    fixed top-0 z-50 flex w-full items-center justify-between  px-4 py-4 transition-all lg:px-10 lg:py-6 `}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <img
          src='https://rb.gy/ulxxee'
          alt='netflix'
          width={120}
          height={120}
        />
        <ul className='hidden md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img
          src='https://rb.gy/g1pwyx'
          alt=''
          className='cursor-pointer rounded'
        />
      </div>
    </header>
  );
}
