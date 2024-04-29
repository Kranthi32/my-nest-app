import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options  = new DocumentBuilder()
  .setTitle('First Project- Demo')
  .setDescription('Sample swagger with the exiting project')
  .setVersion('1.0')
  .addTag('First_project_swagger')
  .addServer('http://localhost:3001/','local environment')
  .build();
 
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api-docs',app,document);


  app.enableCors(); // Enable CORS
  await app.listen(3001);
}
bootstrap();
