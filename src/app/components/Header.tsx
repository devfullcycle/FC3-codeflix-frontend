'use client';
import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

const Logo = () => (
  <img src='https://rb.gy/ulxxee' alt='netflix' width={90} height={90} />
);

const NavLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-4'>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>Latest</li>
    </ul>
  </nav>
);

const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <img src='https://rb.gy/g1pwyx' alt='' className='cursor-pointer rounded' />
  </div>
);

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`${
        isScrolled && 'bg-black'
      } fixed top-0 z-50 flex w-full items-center justify-between p-2 transition-all lg:px-10 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
