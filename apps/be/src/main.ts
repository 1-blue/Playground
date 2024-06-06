import { NestFactory } from "@nestjs/core";

import { AppModule } from "#be/app.module";
import { TrpcRouter } from "#be/api/v0/trpc/trpc.router";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(4050);
}
bootstrap();
