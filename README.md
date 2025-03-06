Aplicación de Gestión de Cartelera de Películas
Esta es una aplicación web para la gestión de carteleras de películas, donde los usuarios pueden ver, agregar y modificar las carteleras de cine. Además, contiene secciones informativas sobre la historia del cine y páginas recomendadas relacionadas con el mundo del cine.

Características
Gestión de Cartelera: Permite ver, agregar y modificar las películas disponibles en la cartelera.
Historia del Cine: Sección que proporciona información sobre la evolución de la industria cinematográfica.
Páginas Recomendadas: Listado de sitios web recomendados para explorar más sobre cine y películas.
Formulario para Agregar Películas: Los administradores pueden agregar nuevas películas a la cartelera a través de un formulario interactivo.
Tecnologías Utilizadas
La aplicación está dividida en dos partes principales: el backend y el frontend.

Backend
Node.js: Para crear el servidor.
Express.js: Framework para el manejo de rutas y API REST.
MongoDB (mongoose): Base de datos NoSQL para almacenar información sobre las películas.
Axios: Para hacer peticiones HTTP.
Cors: Para habilitar el acceso cruzado entre diferentes dominios.
Dotenv: Para gestionar variables de entorno.
Morgan: Middleware para registrar solicitudes HTTP.
Nodemon: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.
Frontend
HTML/CSS: Para estructurar y dar estilo a la interfaz.
JavaScript: Para la interactividad de la aplicación.
Webpack: Para el empaquetado de módulos JavaScript.
Live Server: Para servir la aplicación en desarrollo y hacerla interactiva.
Axios: Para hacer peticiones HTTP desde el frontend al backend.
Concurrently: Para ejecutar múltiples scripts al mismo tiempo durante el desarrollo.
Instalación
Clonar el repositorio:

bash
Copiar
git clone https://github.com/tu-usuario/cine-app.git
cd cine-app
Instalar dependencias para el backend:

bash
Copiar
cd back
npm install
Instalar dependencias para el frontend:

bash
Copiar
cd ../front
npm install
Configurar las variables de entorno: Crea un archivo .env en la carpeta back y agrega las configuraciones necesarias (como la URI de conexión a MongoDB).

Ejemplo de archivo .env:

ini
Copiar
MONGO_URI=mongodb://localhost:27017/cine_app
PORT=5000
Ejecutar el servidor de backend:

bash
Copiar
cd ../back
npm start
Ejecutar el servidor de frontend:

bash
Copiar
cd ../front
npm run dev
Ahora la aplicación estará corriendo en http://localhost:8080 y el backend en http://localhost:5000.

Endpoints del Backend
GET /api/cartelera: Obtener todas las películas en la cartelera.
POST /api/cartelera: Agregar una nueva película a la cartelera. Se debe enviar un objeto con los detalles de la película (nombre, director, año, etc.) en el cuerpo de la solicitud.
PUT /api/cartelera/:id: Modificar los detalles de una película específica.
DELETE /api/cartelera/:id: Eliminar una película de la cartelera.
Estructura de la Aplicación
bash
Copiar
cine-app/
├── back/
│   ├── controllers/      # Lógica para manejar las rutas
│   ├── models/           # Definiciones de los modelos de MongoDB
│   ├── routes/           # Rutas de la API
│   ├── .env              # Variables de entorno
│   └── index.js          # Archivo principal del servidor
├── front/
│   ├── src/              # Archivos de frontend (HTML, CSS, JS)
│   ├── public/           # Archivos estáticos
│   └── index.html        # Página principal del frontend
└── README.md             # Este archivo
Contribuciones
Si deseas contribuir a la aplicación, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una rama con la funcionalidad que deseas agregar o corregir.
Realiza los cambios y asegúrate de que las pruebas pasen.
Envía un pull request describiendo tus cambios.
Licencia
Este proyecto está bajo la licencia MIT.
