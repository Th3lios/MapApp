# MapApp

Aplicación desarrollada en React Native v0.63, integrada con firebase para autenticación y creación de usuarios, y para el registro de eventos junto con validación de campos. También se integró el mapa de google maps para la localización del usuario y la búsqueda de distintos lugares del globo terraqueo.

## Instalación

**Importante**: La API KEY de google maps que se va a utilizar, debe tener activado desde la consola 
el Maps SDK for Android, Maps SDK for iOS y Places API

1. Clonar repositorio en un ambiente local
2. Instalar dependencias ingresando a la carpeta del proyecto y ejecutar el comando 
    ```sh
    $ npm install
    $ cd ios / pod install
    ```
    
3. Agregar la API KEY de google maps en las siguientes partes del proyecto:
    * MapApp/android/app/src/main/AndroidManifest (Linea 19)
    * MapApp/src/components/Search/Search (Linea 13)
    * (IOS) para añadir la API KEY en ios se debe ingresar a Xcode, luego 
      desde Xcode, seleccionar abrir/open y buscar el archivo MapApp.xcworkspace 
      en la carpeta ios del proyecto, luego abrir el archivo AppDelegate.m en la
      barra lateral izquierda y añadir la API KEY en la Linea 33
4. Ejecutar proyecto, en mi caso ocupo el compando npx react-native run-android y
   para ios, npx react-native run-ios --simulator='iPhone X'
