import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { TodosController } from "#be/api/v1/todos/todos.controller";
import { TodosService } from "#be/api/v1/todos/todos.service";
import { TodosRouter } from "#be/api/v1/todos/todos.router";

@Module({
  controllers: [TodosController],
  providers: [PrismaService, TrpcService, TodosService, TodosRouter],
})
export class TodosModule {}
