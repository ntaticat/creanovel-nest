import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelasController } from 'src/controllers/novelas.controller';
import { NovelasService } from 'src/services/novelas.service';
import { Novela, NovelaSchema } from '../schemas/novela.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Novela.name, schema: NovelaSchema }
    ])
  ],
  controllers: [
    NovelasController
  ],
  providers: [
    NovelasService
  ]
})
export class NovelaModule {}
