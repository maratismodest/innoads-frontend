import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

import { routes, tgLink } from '@/utils/constants';

export function Footer() {
  return (
    <footer className="сontainer bg-gray p-4">
      {/*<a className={clsx(buttonStyles({ variant: 'secondary' }), 'w-full')} href="#">*/}
      {/*  Наверх*/}
      {/*</a>*/}
      <div className="max-w-app mx-auto gap-4 px-4">
        <ul>
          <li className="hover:underline">
            <Link href={routes.blog + '/rules'}>Правила InnoAds</Link>
          </li>
          <li className="hover:underline">
            <Link href={tgLink + '/' + process.env.NEXT_PUBLIC_APP_NAME}>Канал InnoAds</Link>
          </li>
        </ul>
        <hr className="border-white" />
        <p>&copy;{dayjs().get('year')} InnoAds.ru</p>
      </div>
    </footer>
  );
}
