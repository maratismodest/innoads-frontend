'use server';
import prisma from '@/lib/prisma';
import { PostDTO } from '@/types';
import { Post } from '@prisma/client';

interface FetchAdsProps {
  content: PostDTO[];
  totalPages: number;
}

export interface GetPostsParams {
  size: number;
  page: number;
  userId: number;
  categoryId: number;
}

export default async function fetchPosts(params: Partial<GetPostsParams>): Promise<Post[]> {
  const { size = 20, page = 0, categoryId, userId } = params;

  const posts = await prisma.post.findMany({
    skip: size * page,
    take: params.size,
    where: {
      categoryId,
      userId,
    },
  });
  return posts;
}
