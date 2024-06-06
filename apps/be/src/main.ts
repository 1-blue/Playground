import { NestFactory } from "@nestjs/core";

import { AppModule } from "#be/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4050);
}
bootstrap();
