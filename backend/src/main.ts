import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { writeFileSync } from 'fs';

import { AppModule } from './app.module';
import { AppEnvironment } from './modules/shared/enums/app-environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiLogger = new Logger('Api');

  const port = process.env.PORT || 3000;
  const config = new DocumentBuilder()
    .setTitle('Backend PIT')
    .setDescription(process.env[AppEnvironment.serviceDescription])
    .setVersion(process.env[AppEnvironment.serviceVersion])
    .addServer(`http://localhost:${port}`, 'development')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api`, app, document);
  writeFileSync('./swagger.json', JSON.stringify(document, null, '\t'));
  apiLogger.log(`Docs available on http://localhost:${port}/api`);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      transform: true,
    }),
  );
  await app.listen(port);
}
bootstrap();
