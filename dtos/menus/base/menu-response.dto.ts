import { IMenuItemWithId } from "../../../interfaces/Menu/IMenuItemWithId";


/**
 * DTO de salida para retornar un menú completo.
 */
export interface IMenuResponseDTO {
  _id: string;
  restaurante: {
    _id: string;
    nombre: string;
    direccion: string;
  };
  tipo: 'Comida' | 'Bebidas' | 'Postres';
  items: IMenuItemWithId[]; 
}
