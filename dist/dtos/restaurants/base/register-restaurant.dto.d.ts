import { DiasSemana } from "../../../interfaces";
export interface IRestaurantRegistrationDTO {
    identity: {
        nombre: string;
        descripcion?: string;
    };
    contact?: {
        telefono?: string;
        emailContacto?: string;
    };
    location: {
        pais: string;
        localidad: string;
        direccion: string;
        codigoPostal?: string;
        ubicacion: {
            type: "Point";
            coordinates: [number, number];
        };
    };
    tradingHours: {
        horarios: {
            dia: DiasSemana;
            horaApertura: string;
            horaCierre: string;
        }[];
    };
    capacity: {
        capacidadMesas: {
            cantidad: number;
            personasPorMesa: number;
        }[];
    };
    media?: {
        logo?: string;
        galeriaFotos?: string[];
    };
    tags?: string[];
}
//# sourceMappingURL=register-restaurant.dto.d.ts.map