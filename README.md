# Formulario SENA - Proyecto con Linters y Despliegue en Azure

Este proyecto es una aplicación web que implementa un formulario interactivo, desarrollado como parte del currículo de Redes SysAdmin del SENA. Incluye configuraciones de linters, un flujo de trabajo de CI/CD para despliegue en Azure, y un servidor Express para servir la aplicación.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Autores](#autores)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

El proyecto incluye un formulario web que permite a los usuarios ingresar datos personales y preferencias. La aplicación está construida con HTML, CSS y JavaScript, y utiliza herramientas modernas como Webpack, Babel y linters para garantizar la calidad del código.

## Características

- **Formulario interactivo**: Validación de campos y mensajes dinámicos.
- **Configuración de linters**: ESLint, Stylelint y Webhint para mantener la calidad del código.
- **Flujo de trabajo CI/CD**: Automatización del despliegue en Azure mediante GitHub Actions.
- **Servidor Express**: Para servir la aplicación en producción.
- **Optimización con Webpack**: Empaquetado y optimización de recursos.

## Estructura del Proyecto
.babelrc .eslintrc.json .gitignore .hintrc .stylelintrc.json eslint.config.mjs package.json README.md server.js webpack.config.js .github/ workflows/ .github/workflows/azure-deploy.yml .github/workflows/linters.yml src/ src/index.html src/main.js assets/ src/assets/styles.css img/ 8379454.png Tetraedro.jpg js/ modules/ src/js/modules/formHandler.js


## Requisitos Previos

- Node.js (versión 18 o superior)
- npm
- Git

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/JuanCRiano/RepositorioPrueba.git
   cd RepositorioPrueba
   
2. Instala las dependencias

   npm install


3. Construye el proyecto e inicia el servidor local

   npm run build
   npm start

## Pruebas
Este proyecto incluye configuraciones para linters. Ejecuta los siguientes comandos para verificar la calidad del código:

1. ESLint:
  npx eslint .

2. Stylelint:
  npx stylelint "**/*.{css,scss}"

3. Webhint:
  npx hint .

## Despliegue

El proyecto incluye un flujo de trabajo de GitHub Actions para desplegar en una máquina virtual de Azure. Asegúrate de configurar los secretos necesarios en tu repositorio:

1. VM_IP
2. VM_USERNAME
3. VM_PRIVATE_KEY
4. VM_PORT (opcional)

El flujo de trabajo se ejecuta automáticamente al hacer push en la rama develop.

## Autores

Juan C. Riaño
GitHub

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para sugerir mejoras.

## Licencia
Este proyecto está bajo la licencia ISC. ```
