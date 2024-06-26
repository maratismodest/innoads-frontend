import { getAllArticles } from '@/prisma/services/articles';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/articles:
 *   get:
 *     description: Returns articles list
 *     responses:
 *       200:
 *         description: []
 *         content: {
 *               "application/json": {
 *                 schema: {
 *                   type: "array",
 *                   items: {
 *                     $ref: "#/components/schemas/Article",
 *                   }
 *                 }
 *               }
 *             }
 *
 *
 */

export async function GET() {
  const res = await getAllArticles();
  return NextResponse.json(res);
}
