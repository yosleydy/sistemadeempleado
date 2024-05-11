# Sistema De Empleados
Prueba Técnica
 

 Este Proyecto se centra en la prueba tecnica solicitada, se creó dos carpetas para separa el Backend y Frontend

# Pre-requisitos

Para la correcta ejecución de este proyecto, necesitas tener las siguientes tecnologías instaladas en tu ordenador.

 * PHP
 * Composer
 * MySQL
 * npm
 * Angular

# instalación

1. Clona este proyecto.
2. Instala las dependencias de node con npm.

```
npm install

```

3. Ejecuta el proyecto Angular en modo desarrollo y navega a http://localhost:4200/.

```
ng serve

```

4. Ejecutar la carpeta del Backend
5. Instala las dependencias de PHP con composer.
6. Crea una nueva base de datos con tu gestor de base de datos preferido. Como sugerencia podrías crear una base de datos llamada.

```
sistemaDeEmpleados
```
7. Crea una copia del archivo env.example, renombralo como .env y configura las variables de entorno correspondientes, preferiblemente las variables para la conexión a la base de datos.

8. Genera una APP_KEY

```
php artisan key:generate
```

9. Ejecuta las migraciones y los seeders.
10. Ejecuta el proyecto laravel.

```
php artisan serve
```
# Endpoints

A continuación se detallan los endpoints disponibles en la API:


|    Métodos    |               Rutas              |                Descripcion                   |
| ------------- |----------------------------------| ---------------------------------------------|
|      GET      | /api/employees                   | Devuelve un array de empleados               |
|      POST     | /api/employees                   |     Crea un empleado                         |
|      GET      | /api/employees/{ID}              | devuelve los datos de empleado               |
|      PUT      | /api/employees/{ID}              | Actualiza los datos de empleado              |
|    DELETE     | /api/employees/{ID}              | Elimina el empleado con su ID específico     |
|      GET      | /api/employees/countries         | Devuelve un array de Los paises              |
|      GET      | /api/employees/areas             | Devuelve un array de las áreas               |
|      GET      | /api/employees/state             | Devuelve un array de los estados             |
|      GET      |/api/employees/typeIdentification | Devuelve un array de el tipo de identificación|


# Autor

Yosleydy Peña

