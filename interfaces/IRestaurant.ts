import { Document, Types } from 'mongoose';
import { IPromotion } from './IPromotion';

export enum DiasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miércoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sábado = "Sábado",
  Domingo = "Domingo",
}

export interface IRestaurant extends Document {
  _id: Types.ObjectId; 
  nombre: string;
  direccion: string;
  pais: string;
  localidad: string;
  codigoPostal?: string;
  telefono?: string;
  emailContacto?: string;
  logo?: string;
  descripcion?: string;
  galeriaFotos?: string[];

  calificacion: number;
  totalReservas: number;
  totalReviews: number;

  promociones?: Types.ObjectId[]; // Referencia a promociones
  estaTemporalmenteCerrado: boolean;

  horarios: {
    dia: DiasSemana;
    horaApertura: string;
    horaCierre: string;
  }[];

  capacidadMesas: {
    cantidad: number;
    personasPorMesa: number;
  }[];

  menus: Types.ObjectId[]; // Referencia a menús
  managerPrincipal: Types.ObjectId; // Referencia a usuario
  coManagers: Types.ObjectId[]; // Referencia a usuarios

  estaAbierto: boolean;
  ultimaActualizacion: Date;

  ubicacion: {
    type: "Point";
    coordinates: [number, number];
  };

  tags?: string[];
}
