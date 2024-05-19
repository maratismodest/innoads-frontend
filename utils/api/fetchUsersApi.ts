import { beRoutes, clientPrisma } from '@/utils/api/createRequest';
import { User } from '@prisma/client';

export default async function fetchUsersApi(): Promise<User[]> {
  const { data } = await clientPrisma.get<User[]>(beRoutes.users);
  return data;
}
