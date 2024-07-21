'use client';
import { Post } from '@prisma/client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import fetchPosts, { GetPostsParams } from '@/utils/api/prisma/fetchAds';

import Posts from '@/components/Posts';
import Spinner from '@/components/ui/Spinner';

export type InitOptions = Partial<GetPostsParams> & Required<{ page: number }>;

type Props = {
  initOptions: InitOptions;
  initPosts: Post[];
  // initPage: number;
};

export default function InfinitePosts({
  initOptions,
  initPosts,
  // initPage
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [posts, setPosts] = useState<Post[]>(initPosts);
  const [options, setOptions] = useState<InitOptions>(initOptions);

  console.log('options', options);
  // const [page, setPage] = useState<number>(initPage);

  const [hasMore, setHasMore] = useState(true);
  const [fetching, setFetching] = useState(false);

  const loadMore = useCallback(async () => {
    if (fetching) {
      return;
    }
    setFetching(true);
    try {
      const content = await fetchPosts({
        ...options,
      });
      setPosts([...posts, ...content]);
      setOptions(prev => ({ ...prev, page: prev.page + 1 }));
      // setHasMore(page + 1 < totalPages);
      setHasMore(content.length > 0);
      console.log('page', options.page);
    } catch (e) {
      console.log(e);
    } finally {
      setFetching(false);
    }
  }, [posts, fetching, hasMore, options]);

  useEffect(() => {
    if (isOnScreen && hasMore) {
      loadMore();
    }
  }, [isOnScreen, hasMore, options.categoryId, options.search, options.page]);

  // just reset component to initial state
  useEffect(() => {
    if (Object.keys(options).length) {
      setPosts(initPosts);
      setHasMore(true);
      setOptions(initOptions);
      setFetching(false);
    }
  }, [initOptions]);

  return (
    <>
      <Posts posts={posts} />
      {fetching && <Spinner />}
      {/*{!fetching && posts.length === 0 && !hasMore && <h2 className="text-center">Пусто</h2>}*/}
      <div ref={elementRef} data-testid="scroll" />
    </>
  );
}
