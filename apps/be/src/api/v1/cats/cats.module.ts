import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { CatsController } from "#be/api/v1/cats/cats.controller";
import { CatsService } from "#be/api/v1/cats/cats.service";
import { CatsRouter } from "#be/api/v1/cats/cats.router";

@Module({
  controllers: [CatsController],
  providers: [PrismaService, TrpcService, CatsService, CatsRouter],
})
export class CatsModule {}
