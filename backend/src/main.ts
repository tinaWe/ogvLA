import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
require("dotenv").config();
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  
  // app.use(cookieParser('secret'));
  // app.enableCors({
  //     origin: 'http://localhost:4200',
  //     credentials: true
  // });

  await app.listen(3000); //3000
}
bootstrap();


