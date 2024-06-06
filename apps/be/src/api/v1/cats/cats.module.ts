import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { CatsController } from "#be/api/v1/cats/cats.controller";
import { CatsService } from "#be/api/v1/cats/cats.service";

@Module({
  controllers: [CatsController],
  providers: [PrismaService, CatsService],
})
export class CatsModule {}
