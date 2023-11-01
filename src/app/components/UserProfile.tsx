'use client';
import React, { useEffect, useState } from 'react';
import { useSession, signOut, SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type ProfileType = {
  name: string;
  avatar: string;
  type: 'adult' | 'kids';
};
async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: 'GET' });
  } catch (err) {
    console.error(err);
  }
}
export const UserProfiles: React.FC = () => {
  const { data: session, status } = useSession();

  console.log(session, 'session DATA ');

  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>({
    name: 'Lukas',
    avatar: '/profile.png',
    type: 'adult',
  });

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleProfileSelect = async (profile: ProfileType) => {
    setSelectedProfile(profile);
    toggleDropdown();
  };

  useEffect(() => {
    if (
      status != 'loading' &&
      session &&
      session?.expires === 'RefreshAccessTokenError'
    ) {
      signOut({ callbackUrl: '/' });
    }
  }, [session, status]);

  return (
    <div className='relative'>
      <div
        className='flex cursor-pointer items-center space-x-2'
        onMouseEnter={toggleDropdown}
      >
        <Image
          width={30}
          height={30}
          src={selectedProfile.avatar}
          alt='Profile'
          className='cursor-pointer rounded'
        />
        <ChevronDownIcon className='h-5 font-bold text-white' />
      </div>
      {isDropdownVisible && (
        <div
          className='absolute right-0 top-10 mt-2 flex w-40 flex-col rounded border border-gray-800
         bg-black  text-gray-800 shadow-md'
        >
          <div
            className='flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white'
            onClick={() =>
              handleProfileSelect({
                name: 'Lukas',
                avatar: '/profile.png',
                type: 'adult',
              })
            }
          >
            <Image
              width={30}
              height={30}
              src='/profile.png'
              alt='Profile'
              className='rounded'
            />

            <div className='flex flex-col'>
              <span className='text-xs text-white'>Iron man</span>
              <span className='text-xs text-red-500'>Lukas</span>
            </div>
          </div>
          <div
            className='flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white'
            onClick={() =>
              handleProfileSelect({
                name: 'Caspin',
                avatar: '/kids_profile.png',
                type: 'kids',
              })
            }
          >
            <Image
              width={30}
              height={30}
              src='/kids_profile.png'
              alt='Kids'
              className='rounded'
            />

            <div className='flex flex-col'>
              <span className='text-xs text-white'>Baby Shark</span>
              <span className='text-xs text-red-500'>Caspin</span>
            </div>
          </div>

          <div
            className='flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white'
            onClick={() =>
              keycloakSessionLogOut().then(() =>
                signOut({
                  callbackUrl: '/',
                })
              )
            }
          >
            <div className='flex flex-col'>
              <span className='text-xs text-white'>Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const UserProfile = () => (
  <SessionProvider>
    <UserProfiles />
  </SessionProvider>
);
