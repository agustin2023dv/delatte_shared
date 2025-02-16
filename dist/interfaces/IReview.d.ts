import { Document, ObjectId } from 'mongoose';
export interface IReview extends Document {
    _id: ObjectId;
    restaurante: ObjectId;
    usuario: ObjectId;
    calificacion: number;
    comentario: string;
    fecha: Date;
    ultimaActualizacion?: Date;
}
export interface IReviewProps {
    restaurantId: string;
    isManager: boolean;
}
//# sourceMappingURL=IReview.d.ts.map