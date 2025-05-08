import { z } from 'zod';
/**
 * Esquema Zod para validar los datos de un ítem de menú.
 * Corresponde a `IAddMenuItemDTO['item']`
 */
export declare const MenuItemFormSchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodString;
    precio: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    nombre: string;
    descripcion: string;
    precio: number;
}, {
    nombre: string;
    descripcion: string;
    precio: number;
}>;
export type MenuItemFormData = z.infer<typeof MenuItemFormSchema>;
//# sourceMappingURL=create-menu-item.schema.d.ts.map