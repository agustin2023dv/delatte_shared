import { Document, ObjectId } from 'mongoose';
import { IRestaurant } from './IRestaurant.js';
import { IUser } from './IUser.js';

export interface IReservation extends Document {
  _id: ObjectId | string; // ID de la reserva
  restaurante: ObjectId | Partial<IRestaurant>; // ID del restaurante
  usuario: ObjectId | Partial<IUser>; // ID del usuario que realiza la reserva
  fecha: Date; // Fecha completa de la reserva (día y hora)
  horario: string; // Horario de la reserva (formato HH:MM)
  numAdultos: number; // Número de adultos
  numNinos: number; // Número de niños
  pedidosEspeciales: string; // Nota opcional del usuario (máx. 500 caracteres)
  estado: "Pendiente" | "Confirmada" | "Cancelada"; // Estado de la reserva
  fechaCreacion: Date; // Fecha de creación de la reserva
}
