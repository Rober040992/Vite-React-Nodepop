# pasos 
- creacion de sacffold con cliente
- comienzo con el primer componente LoginPage
    1. creamos formulario con input para email y password y un boton de envio
    2. capturar el valor de los inputs del form
    3. controlar el submit
- conectar a la API
    1. instalar y usar axios para hacer la petición HTTP.
    2. Enviar el email y la contraseña al endpoint de login.
    3. Manejar la respuesta y guardar el token en localStorage.
    4. Manejar errores en caso de credenciales incorrectas.
    -  flujo de datos 
    [Usuario] --- Ingresa email y password ---> [LoginPage.tsx]
           --- Click en "Submit" ---> [handleSubmit()]
           --- Llama a loginUser() en service.ts ---> [Axios envía POST a /api/auth/login]
           <--- La API responde con un token ---> [service.ts retorna token]
           ---> Guardamos token en localStorage ---> [Usuario autenticado]

- persistencia del token

    