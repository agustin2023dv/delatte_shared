import { Document, ObjectId } from 'mongoose';
export interface IReservation extends Document {
    _id: ObjectId | string;
    restaurante: ObjectId;
    usuario: ObjectId;
    fecha: Date;
    horario: string;
    numAdultos: number;
    numNinos: number;
    pedidosEspeciales: string;
    estado: "Pendiente" | "Confirmada" | "Cancelada";
    fechaCreacion: Date;
}
//# sourceMappingURL=IReservation.d.ts.map