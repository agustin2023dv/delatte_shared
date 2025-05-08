import { IMenuItemWithId } from '../../../interfaces/Menu/IMenuItemWithId';

/**
 * DTO de salida para retornar un menú completo.
 */
export interface IMenuResponseDTO {
  _id: string;
  tipo: 'Comida' | 'Bebidas' | 'Postres';
  items: IMenuItemWithId[];

  restaurante: {
    _id: string;
    nombre: string;
    direccion: string;
    managerPrincipal: string;
    coManagers?: string[]; 
  };
}
