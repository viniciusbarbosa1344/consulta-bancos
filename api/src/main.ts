import { NestFactory } from '@nestjs/core';
import { BancosModule } from './banco.module';
import { PrismaClient } from '@prisma/client';

export const prismaService = new PrismaClient();

async function bootstrap() {
  const app = await NestFactory.create(BancosModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().then(() => {
  console.log('Server is running, port:', process.env.PORT);
});
