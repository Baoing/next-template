'use client';

import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useState } from 'react';

import Logo from '@/components/Logo';
import SVGIcon from '@/components/SvgIcon/SvgIcon';

import styles from './navbar.module.scss';

interface MobileNavProps {
  buttons?: ReactNode;
}

export default function MobileNav({ buttons }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={'sm:hidden'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[72px] items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <Logo />
            </div>
          </div>

          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SVGIcon icon={isMenuOpen ? 'x-close' : 'menu-01'} />
          </button>
        </div>
      </div>

      <div
        className={classNames(
          styles.mobileMenu,
          isMenuOpen ? styles.menuActive : '',
        )}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>

        <div className={classNames(styles.buttonsWrap, 'space-y-3')}>
          {buttons}
        </div>
      </div>
    </div>
  );
}
