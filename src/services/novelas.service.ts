import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INovelaCreateDTO } from 'src/interfaces/novela.interface';
import { Escena } from 'src/schemas/escena.schema';
import { Novela, NovelaDocument } from 'src/schemas/novela.schema';

@Injectable()
export class NovelasService {

  constructor(@InjectModel(Novela.name) private novelaModel: Model<NovelaDocument>) { }

  async create(novela: INovelaCreateDTO): Promise<Novela> {
    try {
      const createdNovela = new this.novelaModel(novela);
      return await createdNovela.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Novela[]> {
    try {
      return await this.novelaModel.find({}, '_id titulo descripcion estado').exec();
    } catch (error) {
      throw error;
    }
  }

  async getById(novelaId: string): Promise<Novela> {
    try {
      return await this.novelaModel.findOne({_id: novelaId}).exec();
    } catch (error) {
      throw error;
    }
  }

  async getByIdWithEscenas(novelaId: string): Promise<Novela> {
    try {
      return await this.novelaModel.findOne({_id: novelaId}, '_id titulo descripcion estado escenas').populate('Escena').exec();
    } catch (error) {
      throw error;
    }
  }

  // async update(novela: INovela): Promise<Novela> {
  //   let dbNovela = await this.novelaModel.findById(novela._id).exec();
  //   return await dbNovela.save();
  // }

  async delete(novelaId: string): Promise<Novela> {
    try {
      return await this.novelaModel.findByIdAndRemove(novelaId).exec();
    } catch (error) {
      throw error;
    }
  }

  async addEscena(novelaId: string, escena: Escena) {
    try {
      const dbNovela = await this.novelaModel.findById(novelaId).exec();
      dbNovela.escenas.push(escena);
      return await dbNovela.save();
    } catch (error) {
      throw error;
    }
  }

  // async deleteEscena(novelaId: string, escenaId: string) {
  //   try {
  //     const dbNovela = await this.novelaModel.findById(novelaId).exec();
  //     dbNovela.escenas = dbNovela.escenas.filter(escena => escena._id !== escenaId);
  //     return await dbNovela.save();
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
