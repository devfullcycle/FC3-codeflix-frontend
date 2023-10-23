'use client';
import React from 'react';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const isScrolled = useScroll();
  const router = useRouter();
  const params = useSearchParams();
  const [searchTerm, setSearchTerm] = React.useState(params.get('title'));

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const searchTerm = data.get('search') as string;
    setSearchTerm(searchTerm);
    router.push(`/search?title=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header
      className={`${isScrolled && 'bg-black'}
      fixed top-0 z-50
      flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2'>
        <form onSubmit={handleSearch} className='flex items-center space-x-2'>
          <button type='submit'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
          </button>
          <input
            type='search'
            id='search'
            name='search'
            placeholder='Search'
            value={searchTerm || ''}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-transparent text-white placeholder-white outline-none'
          />
        </form>
        <UserProfile />
      </div>
    </header>
  );
}
