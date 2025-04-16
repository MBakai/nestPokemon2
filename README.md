<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
````
yarn intall
````
3. Tener nest CLI instalado
````
npm i -g @nestjs/cli
````
4. Levantar la base de datos
````
docker-compose up -d
````
5 Conar el archivo __.en.template__ y renombrarlo a __.env__

6 Recontruir las variables de entorno

7 ejecutar la aplicacion con el comando:
````
yarn start:dev
````

8.Reconstruir la base de datos con la semilla 
````
http://localhost:3000/api/v2/seed
````

## Stack usado
* MongoDB
* Nest