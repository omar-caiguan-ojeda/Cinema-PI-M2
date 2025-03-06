# Aplicación de Gestión de Cartelera de Películas

Esta es una aplicación web para la gestión de carteleras de películas, donde los usuarios pueden ver, agregar y modificar las carteleras de cine. Además, contiene secciones informativas sobre la historia del cine y páginas recomendadas relacionadas con el mundo del cine. 

## Características

- **Gestión de Cartelera**: Permite ver, agregar y modificar las películas disponibles en la cartelera.
- **Historia del Cine**: Sección que proporciona información sobre la evolución de la industria cinematográfica.
- **Páginas Recomendadas**: Listado de sitios web recomendados para explorar más sobre cine y películas.
- **Formulario para Agregar Películas**: Los administradores pueden agregar nuevas películas a la cartelera a través de un formulario interactivo.

## Tecnologías Utilizadas

La aplicación está dividida en dos partes principales: el backend y el frontend.

### Backend
- **Node.js**: Para crear el servidor.
- **Express.js**: Framework para el manejo de rutas y API REST.
- **MongoDB (mongoose)**: Base de datos NoSQL para almacenar información sobre las películas.
- **Axios**: Para hacer peticiones HTTP.
- **Cors**: Para habilitar el acceso cruzado entre diferentes dominios.
- **Dotenv**: Para gestionar variables de entorno.
- **Morgan**: Middleware para registrar solicitudes HTTP.
- **Nodemon**: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.

### Frontend
- **HTML/CSS**: Para estructurar y dar estilo a la interfaz.
- **JavaScript**: Para la interactividad de la aplicación.
- **Webpack**: Para el empaquetado de módulos JavaScript.
- **Live Server**: Para servir la aplicación en desarrollo y hacerla interactiva.
- **Axios**: Para hacer peticiones HTTP desde el frontend al backend.
- **Concurrently**: Para ejecutar múltiples scripts al mismo tiempo durante el desarrollo.

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/cine-app.git
   cd cine-app

