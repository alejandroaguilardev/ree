import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Cambia esto para ser más específico en producción
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((error) => {
  console.error('Error during application bootstrap:', error);
});
