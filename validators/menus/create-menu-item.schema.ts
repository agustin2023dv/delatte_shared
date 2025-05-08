import { z } from 'zod';

/**
 * Esquema Zod para validar los datos de un ítem de menú.
 * Corresponde a `IAddMenuItemDTO['item']`
 */
export const MenuItemFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre es obligatorio'),
  descripcion: z.string().min(5, 'La descripción es obligatoria'),
  precio: z
    .number({ invalid_type_error: 'Debe ser un número' })
    .min(0.01, 'El precio debe ser mayor a 0'),
});

export type MenuItemFormData = z.infer<typeof MenuItemFormSchema>; 