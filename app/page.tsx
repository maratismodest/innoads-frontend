import Categories from '@/components/Categories';
import InfinitePosts from '@/modules/InfinitePosts';
import { getAllCategories } from '@/prisma/services/categories';
import fetchPosts from '@/utils/api/prisma/fetchAds';
import { getMainPageJsonLd } from '@/utils/jsonLd';

export const revalidate = 3600;

export default async function Home<NextPage>() {
  const posts = await fetchPosts({ size: 20 });
  const categories = await getAllCategories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getMainPageJsonLd()) }}
      />
      <Categories categories={categories} />
      <div className="flex justify-between align-baseline">
        <h1>Последние объявления</h1>
        {/*<span>{totalPages * 20} объявлений</span>*/}
      </div>
      <InfinitePosts initPosts={posts} initPage={1} options={{}} />
    </>
  );
}
