import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { TrpcModule } from "#be/api/v0/trpc/trpc.module";
import { CatsModule } from "#be/api/v1/cats/cats.module";
import { TodosModule } from "#be/api/v1/todos/todos.module";

@Module({
  imports: [TrpcModule, CatsModule, TodosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
