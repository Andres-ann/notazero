# Notazero

Este repositorio contiene el código fuente y la documentación para el proyecto final de la materia "Proyecto Integrador" de la carrera "Técnicatura Superior en Desarrollo de Software". 

La aplicación utiliza una arquitectura basada en servicios en la nube de Amazon Web Services (AWS) para proporcionar una solución escalable, segura y eficiente. A continuación, se describen los principales componentes y tecnologías utilizadas en el desarrollo del proyecto.

## AWS Services

### AWS Lambda

AWS Lambda se utiliza para implementar la lógica de negocio y la funcionalidad principal de la aplicación. Este servicio sin servidor permite ejecutar código de manera eficiente sin la necesidad de administrar servidores.

### Amazon DynamoDB

Amazon DynamoDB actúa como la base de datos NoSQL para almacenar la información de la aplicación. Su escalabilidad flexible y alto rendimiento garantizan un acceso rápido a los datos.

### Amazon Amplify

Amazon Amplify se encarga de gestionar el frontend de la aplicación, automatizando los despliegues de nuevas versiones. La integración con el repositorio de Git simplifica el desarrollo, permitiendo actualizaciones automáticas en respuesta a cambios en la rama seleccionada.

### Amazon Cognito

Para la autenticación de usuarios, se utiliza Amazon Cognito, aprovechando su propio pool. Esto facilita un proceso de inicio de sesión casi automático, mejorando la experiencia del usuario y garantizando la seguridad en todo el proceso de registro y logueo de usuarios.

### API Gateway

El servicio de API Gateway de Amazon gestiona las solicitudes HTTP, dirigiéndolas a las funciones Lambda correspondientes para su procesamiento.

### Amazon S3 (Amazon Simple Storage Service)

Amazon S3 se utiliza para almacenar de manera segura y confiable imágenes necesarias para el desarrollo del sistema, como firmas electrónicas y cabeceras de documentos. Su fácil acceso y gestión aseguran la disponibilidad y durabilidad de estos recursos.

## Frontend

### Angular

El framework Angular se emplea para el desarrollo del frontend de la aplicación. Su arquitectura modular y robusta facilita la creación de aplicaciones web de página única (SPA).

## Otros Recursos

### Entorno de Desarrollo

Se utiliza Visual Studio Code como entorno de desarrollo integrado para escribir y editar el código de la aplicación.

### Control de Versiones

Git se emplea como sistema de control de versiones, permitiendo gestionar el código fuente y facilitar la colaboración entre los miembros del equipo. Se crea un repositorio en la nube para trabajar simultáneamente.

### Documentación

La documentación oficial de AWS Lambda, Amazon DynamoDB, API Gateway, Cognito, Amplify, S3 y Angular se utiliza como recurso para consultar y aprender sobre el uso adecuado de estas tecnologías.

### Herramienta de Gestión de Proyectos

Notion se elige como la herramienta de gestión de proyectos colaborativa. Su versatilidad y capacidad para aplicar metodologías ágiles de manera efectiva, junto con su capa gratuita, facilitan la gestión del proyecto con todas las herramientas necesarias sin costo alguno.

Enlace a la documentación: [Notion - Proyecto Integrador](https://www.notion.so/NotaZero-1df345f5845f46b68f10f319bf40ec80)



