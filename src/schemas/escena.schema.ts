import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type EscenaDocument = Escena & mongoose.Document;

@Schema()
export class Escena {
  @Prop({  })
  recursos: any[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Escena" })
  novela: string;


}

export const EscenaSchema = SchemaFactory.createForClass(Escena);
