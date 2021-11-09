import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { INovela } from 'src/interfaces/novela.interface';
import { NovelasService } from 'src/services/novelas.service';

@Controller('api/novelas')
export class NovelasController {

  constructor(private readonly novelasService: NovelasService) { }

  @Get()
  async getNovelas() {
    return await this.novelasService.findAll();
  }

  @Get(':id')
  async getNovelasEscenas(@Param('id') novelaId: string) {
    return await this.novelasService.getByIdWithEscenas(novelaId);
  }

  @Post()
  async postNovela(novela: INovela) {
    const dbNovela = await this.novelasService.create(novela);
    return dbNovela;
  }

  @Delete()
  async deleteNovela(novelaId: string) {
  }
}
