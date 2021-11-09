import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NovelasService } from './services/novelas.service';
import { NovelasController } from './controllers/novelas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelaModule } from './modules/novela.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`, { useNewUrlParser: true }),
    NovelaModule
  ]
})
export class AppModule { }
