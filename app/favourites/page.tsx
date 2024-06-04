'use client';

import Posts from '@/components/Posts';
import withAuth from '@/hoc/withAuth';
import favouritesAtom from '@/state';
import { useAtomValue } from 'jotai';

function FavouritesPage<NextPage>() {
  const favourites = useAtomValue(favouritesAtom);

  return (
    <section className="text-center">
      <h1>Избранное</h1>
      <Posts posts={favourites} className="mt-4" />
    </section>
  );
}

export default withAuth(FavouritesPage);
