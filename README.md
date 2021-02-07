# MapApp

Aplicación desarrollada en React Native v0.63, integrada con firebase para autenticación y creación de usuarios, y para el registro de eventos junto con validación de campos. También se integró el mapa de google maps para la localización del usuario y la búsqueda de distintos lugares del globo terraqueo.

## Instalación

**Importante**: La API KEY de google maps que se va a utilizar, debe tener activado desde la consola 
el Maps SDK for Android, Maps SDK for iOS y Places API. También se
recomienda tener instalado java 11

1. Clonar repositorio en un ambiente local
2. Crear archivo en android llamado local.properties agregar la ruta del android sdk: 
    ```sh
    $ sdk.dir=$HOME/Library/Android/sdk
    ```
2. Instalar dependencias ingresando a la carpeta del proyecto y ejecutar el comando 
    ```sh
    $ npm install
    $ cd ios / pod install
    ```
    
3. Agregar la API KEY de google maps en las variables de entorno (archivo .env)

4. Ejecutar proyecto:
    ```sh
    $ npx react-native run-android
    $ npx react-native run-ios --simulator='iPhone X'
    ```
