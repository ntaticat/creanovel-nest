import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Escena } from './escena.schema'

export type NovelaDocument = Novela & mongoose.Document;

@Schema()
export class Novela {
  @Prop({ required: true, unique: true, trim: true })
  titulo: string;

  @Prop({ default: "Sin descripción", trim: true })
  descripcion: string;

  @Prop({ default: false })
  estado: boolean;

  // escenas
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Escena"  })
  escenas: Escena[];
}

export const NovelaSchema = SchemaFactory.createForClass(Novela);