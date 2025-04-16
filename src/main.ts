import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');//para anteponer prefijo el la url al hace las peticiones
  
  app.useGlobalPipes( // necesario para hacer validaciones 
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion : true
    }
    })
  );

  mongoose.connection.on('connected', () => {
    console.log('✅ Conectado a MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('❌ Error de conexión a MongoDB:', err);
  });
 

  await app.listen(process.env.PORT!);
}
bootstrap();
