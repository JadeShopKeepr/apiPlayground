
import Link from 'next/link';
import React from 'react';
import { Logo } from '../../icons/Logo';

export const Header = () => {
  return (
    <header className='bg-[#12232E] w-full h-[100px] flex justify-center'>
      <div className='container w-full h-full flex justify-between items-center py-1 text-[#EEFBFB]'>
        <Link href='/'><Logo /></Link>
        <nav>
          <ul>
            <li><Link href='/characters/1'>Characters</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
