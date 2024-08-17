# only-chat-api

## Requisitos

Configurar las variables de entorno, note el **example.env**.

## Formatos

- **username:** 3 y 15 caráteres, sin carácteres especiales, no empezar ni terminar con espacio.

- **email:** Debe ser un email real.

- **role:** **CHIEF**, **CLIENT**, **ADMIN**.

- **password:** 6 a 127 carácteres.

- **img:** Cadena de texto en formato url, opcional.

- **page:** Página deseada.

- **limit:** Cantidad de registros deseados.

### Módulo welcome

- GET http://localhost:3000

### Módulo auth

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

### Módulo follows

- POST http://localhost:3000/follows/follow-to/:id

  Registra si un usuario **A** sigue a otro **B**.

  - **token:**
  - **followerId:** Seguidor tomado del **id** asociado al **token**.
  - **followingId:** Seguido tomado del **id** pasado por **params**.

- DELETE http://localhost:3000/follows/unfollow-to/:id

  Elimina el seguimiento de un usuario **A** a otro **B**.

  - **token:**
  - **followerId:** Seguidor tomado del **id** asociado al **token**.
  - **followingId:** Seguido tomado del **id** pasado por **params**.

### Módulo messages

- POST http://localhost:3000/msg/save-msg/:id

  Guarda un msg enviado del usuario **A** a otro **B**.

  - **token:**
  - **issuerId:** Emisor tomado del **id** asociado al **token**.
  - **receptorId:** Receptor tomado del **id** pasado por **params**.

  ```
  BODY
  {
    "text": "Hola, ¿cómo estás?"
  }
  ```

- DELETE http://localhost:3000/msg/remove-msg

  Elimina un msg enviado del usuario **A** a otro **B**.

  - **token:**
  - **issuerId:** Emisor tomado del **id** asociado al **token**.

  ```
  BODY
  {
    "receptorId" : "2ba0fdf2-e11c-4894-9832-9afd362606f8",
    "createdAt" : "2024-08-06 19:22:03.98"
  }
  ```

- GET http://localhost:3000/messages/get-chat/:id

  Obtiene el chat de un usuario **A** con otro **B**.

  - **token:**
  - **issuerId:** Tomado del **id** asociado al **token**.
  - **followingId:** Tomado del **id** pasado por **params**.
