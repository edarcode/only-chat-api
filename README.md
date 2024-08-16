# edarcode-api

## Requisitos

Configurar las variables de entorno, note el **example.env**.

## Rutas

Tener en cuenta los sgts formatos:

- **username:** 3 y 15 caráteres, sin carácteres especiales, no empezar ni terminar con espacio.

- **email:** Debe ser un email real.

- **role:** **CHIEF**, **CLIENT**, **ADMIN**.

- **password:** 6 a 127 carácteres.

- **img:** Cadena de texto en formato url, opcional.

- **page:** Página deseada.

- **limit:** Cantidad de registros deseados.

### Módulo welcome

- GET http://localhost:3000

### Módulo Auth

- POST http://localhost:3000/auth/signup

  Envia un un msj con un link de confirmación al email proporcionado y solo al confirmar se creará la nueva cuenta o registro de usuario.

  ```
  BODY
  {
    "username": "edarcode",
    "email": "edarcode@gmail.com",
    "password": "123456"
  }
  ```

- POST http://localhost:3000/auth/login

  Entrega un token.

  ```
  BODY
  {
    "email": "edarcode@gmail.com",
    "password": "123456"
  }
  ```

- POST http://localhost:3000/auth/refresh-token

  Entrega un nuevo token con la misma información del token proporcionado. También es útil para validar el mismo.

  ```
  BODY
  {
    "email": "edarcode@gmail.com",
    "password": "123456"
  }
  ```
