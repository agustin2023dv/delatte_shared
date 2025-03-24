# delatte_shared

delatte_shared es una biblioteca de TypeScript que centraliza y reutiliza definiciones de interfaces, DTOs (Data Transfer Objects) y utilidades comunes para los proyectos relacionados con la plataforma Delatte. Facilita la coherencia y el mantenimiento del código al compartir estructuras y funciones entre el frontend y el backend.

Índice
Características

Estructura del Proyecto

Instalación

Uso

Licencia

Características
Interfaces Compartidas: Define contratos claros para las entidades utilizadas en la plataforma Delatte, asegurando consistencia entre diferentes módulos y servicios.

DTOs Reutilizables: Proporciona objetos de transferencia de datos estandarizados para operaciones comunes, facilitando la validación y transformación de datos.

Utilidades Comunes: Incluye funciones y herramientas auxiliares que pueden ser utilizadas en diversos contextos dentro de los proyectos de Delatte.

Estructura del Proyecto
La estructura del proyecto es la siguiente:

bash
Copiar
Editar
delatte_shared/
├── interfaces/        # Definiciones de interfaces compartidas
├── dtos/              # Definiciones de Data Transfer Objects
├── utils/             # Funciones y utilidades comunes
├── index.ts           # Punto de entrada principal
├── package.json       # Archivo de configuración de npm
└── README.md          # Documentación del proyecto
Instalación
Para instalar delatte_shared en tu proyecto, puedes agregarlo como una dependencia utilizando npm:

bash
Copiar
Editar
npm install delatte_shared
O, si prefieres usar Yarn:

bash
Copiar
Editar
yarn add delatte_shared
Uso
Importa las interfaces, DTOs o utilidades que necesites en tu proyecto de la siguiente manera:

typescript
Copiar
Editar
import { NombreDeLaInterfaz } from 'delatte_shared/interfaces/NombreDeLaInterfaz';
import { NombreDelDTO } from 'delatte_shared/dtos/NombreDelDTO';
import { nombreDeLaFuncion } from 'delatte_shared/utils/nombreDeLaFuncion';
Asegúrate de revisar la carpeta correspondiente para identificar los nombres exactos de los módulos que deseas utilizar.
