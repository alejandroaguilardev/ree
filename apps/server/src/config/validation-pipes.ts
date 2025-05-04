import { ValidationPipe } from '@nestjs/common';

export class GlobalPipes {
  static getGlobal() {
    return new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    });
  }
}
