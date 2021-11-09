import { IEscena } from "./escena.interface";

export interface INovela {
  _id?: string;
  titulo: string;
  descripcion: string;
  estado: boolean;
  escenas?: IEscena[];
}

export interface INovelaCreateDTO {
  titulo: string;
  descripcion: string;
  estado: boolean;
}