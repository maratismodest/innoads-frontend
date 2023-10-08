import fetchArticles from '@/utils/api/fetchArticles';
import {routes, seo} from '@/utils/constants';
import {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,
}

export default async function Articles<NextPage>() {
  const articles = await fetchArticles();
  return (
    <>
      <h1>Блог</h1>
      <ul>
        {articles.map((article) =>
          <li key={article.id} className='mb-2'>
            <Link href={routes.blog + '/' + article.slug}>{article.title}</Link>
          </li>
        )}
      </ul>
    </>
  );
};