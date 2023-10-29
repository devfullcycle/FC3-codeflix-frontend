'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface HeaderProps {}

export default function Header(props: HeaderProps): JSX.Element {
  const isScrolled = useScroll();
  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  }

  function handleSearchTermChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <SearchForm
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onSearchTermChange={handleSearchTermChange}
      />
    </HeaderLayout>
  );
}

interface HeaderLayoutProps {
  isScrolled: boolean;
  children: React.ReactNode;
}

function HeaderLayout({
  isScrolled,
  children,
}: HeaderLayoutProps): JSX.Element {
  return (
    <header
      className={`${isScrolled ? 'bg-black' : ''}
        fixed top-0 z-50 flex w-full items-center justify-between
        bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all
        lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2'>
        {children}
        <UserProfile />
      </div>
    </header>
  );
}

interface SearchFormProps {
  searchTerm: string;
  onSearch: (e: FormEvent<HTMLFormElement>) => void;
  onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchForm({
  searchTerm,
  onSearch,
  onSearchTermChange,
}: SearchFormProps): JSX.Element {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
}
