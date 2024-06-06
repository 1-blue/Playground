import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { TrpcController } from "#be/api/v0/trpc/trpc.controller";
import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { TrpcRouter } from "#be/api/v0/trpc/trpc.router";
import { CatsRouter } from "#be/api/v1/cats/cats.router";
import { CatsService } from "#be/api/v1/cats/cats.service";
import { TodosService } from "#be/api/v1/todos/todos.service";
import { TodosRouter } from "#be/api/v1/todos/todos.router";

@Module({
  controllers: [TrpcController],
  providers: [
    PrismaService,
    TrpcService,
    TrpcRouter,
    CatsService,
    CatsRouter,
    TodosService,
    TodosRouter,
  ],
})
export class TrpcModule {}
