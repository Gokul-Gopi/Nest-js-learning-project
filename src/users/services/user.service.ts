import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma: any = new PrismaClient();

@Injectable()
export class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async findUserByUsername(username: string) {
    return await prisma.user.findUnique({
      where: {
        name: username,
      },
    });
  }
}
