import { Logo } from '@components/icons/Logo';
import {ROUTES} from '@utils/constants/routes';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='bg-[#12232E] w-full h-[100px] flex justify-center'>
      <div className='container w-full h-full flex justify-between items-center py-1 text-[#EEFBFB]'>
        <Link href={ROUTES.HOME}><Logo /></Link>
        <nav>
          <ul>
            <li><Link href={ROUTES.CHARACTERS}>Characters</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
