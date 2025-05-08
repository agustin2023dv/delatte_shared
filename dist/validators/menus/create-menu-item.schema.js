"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemFormSchema = void 0;
const zod_1 = require("zod");
/**
 * Esquema Zod para validar los datos de un ítem de menú.
 * Corresponde a `IAddMenuItemDTO['item']`
 */
exports.MenuItemFormSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2, 'El nombre es obligatorio'),
    descripcion: zod_1.z.string().min(5, 'La descripción es obligatoria'),
    precio: zod_1.z
        .number({ invalid_type_error: 'Debe ser un número' })
        .min(0.01, 'El precio debe ser mayor a 0'),
});
