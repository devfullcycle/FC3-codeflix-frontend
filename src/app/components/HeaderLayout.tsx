'use client';
import Link from 'next/link';
import React from 'react';

import { Logo } from '@/app/components/Logo';
import { NavLinks } from '@/app/components/NavLinks';
import { UserProfile } from '@/app/components/UserProfile';

interface IHeaderLayoutProps {
  isScrolled: boolean;
  children: React.ReactNode;
}
export function HeaderLayout({
  isScrolled,
  children,
}: IHeaderLayoutProps): JSX.Element {
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
