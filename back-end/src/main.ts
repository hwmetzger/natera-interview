import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 4000;
const CROSS_ORIGIN = 'http://localhost:3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [CROSS_ORIGIN],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  await app.listen(PORT, () => {
    console.log('NestJS', `Server started on port ${PORT}`);
  });
}
bootstrap();
