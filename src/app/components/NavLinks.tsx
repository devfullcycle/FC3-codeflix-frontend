'use client';
import Link from 'next/link';
import React from 'react';

export const NavLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-4'>
      <Link href='/search?genre=Comedy'>Comedy</Link>
      <Link href='/search?genre=Action'> Action </Link>
      <Link href='/search?genre=Adventure'>Adventure</Link>
      <Link href='/search?genre=Animation'> Animation </Link>
    </ul>
  </nav>
);
