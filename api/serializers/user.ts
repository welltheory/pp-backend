import { User as PrismaUser } from '@prisma/client';

class UserSerializer {
  static serialize(data: PrismaUser) {
    return {
      id: data.id,
      email: data.email,
      auth_id: data.auth_id,
    };
  }
}

export default UserSerializer;