import fetchPosts from '@/utils/api/prisma/fetchAds';
import cleanObject from '@/utils/cleanObject';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/posts:
 *   get:
 *     description: Returns posts list
 *     responses:
 *       200:
 *         description: []
 *         content: {
 *               "application/json": {
 *                 schema: {
 *                   type: "array",
 *                   items: {
 *                     $ref: "#/components/schemas/Post",
 *                   }
 *                 }
 *               }
 *             }
 *
 *
 */

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const size = Number(searchParams.get('size'));
  const page = Number(searchParams.get('page'));
  const userId = searchParams.get('userId');
  const categoryId = Number(searchParams.get('categoryId'));
  const _published = searchParams.get('published');
  const published = _published ? Boolean(_published) : null;
  const search = searchParams.get('search');
  const response = await fetchPosts(
    cleanObject({ size, page, categoryId, userId, published, search })
  );
  return NextResponse.json(response);
}
