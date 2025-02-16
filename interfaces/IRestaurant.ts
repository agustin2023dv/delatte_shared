import { Document, ObjectId } from 'mongoose';
import { IMenu } from './IMenu.js';
import { IUser } from './IUser.js';

export interface IRestaurant extends Document {
  _id: ObjectId | string;
  nombre: string;
  direccion: string;
  pais: string;
  localidad: string;
  codigoPostal: string;
  telefono: string;
  emailContacto: string;
  logo: string;
  descripcion: string;
  galeriaFotos: string[];
  calificacion: number;
  horarios: {
    dia: "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";
    horaApertura: string;
    horaCierre: string;
  }[];
  capacidadMesas: {
    cantidad: number;
    personasPorMesa: number;
  }[];
  menus: ObjectId[] | IMenu[]; 
  managerPrincipal: ObjectId | IUser;
  coManagers: ObjectId[]  | IUser[];
  estaAbierto: boolean;
  ultimaActualizacion: Date;
  ubicacion: {
    type: "Point";
    coordinates: [number, number];
  };
  tags?: string[];
}
