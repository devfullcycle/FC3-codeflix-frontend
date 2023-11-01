'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState, FormEvent, ChangeEvent } from 'react';

import { useScroll } from '@/app/hooks/useScroll';
import { SearchForm } from '@/app/components/SearchForm';
import { HeaderLayout } from '@/app/components/HeaderLayout';

export function Header(): JSX.Element {
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
