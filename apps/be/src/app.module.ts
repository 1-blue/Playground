import { Module } from "@nestjs/common";

import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { CatsModule } from "#be/api/v1/cats/cats.module";

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
