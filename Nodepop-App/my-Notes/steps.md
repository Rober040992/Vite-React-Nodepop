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
    1. En LoginPage.tsx, definimos el estado rememberMe con useState(false).
    2. Pasamos rememberMe y setRememberMe como props al componente RememberMeCheckbox.
    3. En Checkbox.tsx, recibimos rememberMe como prop y lo usamos para controlar si el checkbox está marcado o no (checked={rememberMe}).
    4. Cuando el usuario interactúa con el checkbox, el onChange ejecuta setRememberMe(e.target.checked), lo que actualiza el estado en LoginPage.
    5. El estado actualizado se refleja en RememberMeCheckbox, asegurando que el checkbox reaccione a los cambios correctamente.

- redirigir segun exista el token o no
    1. crear componente de AuthRedirect para redirigir segun exista o no el accessToken
- logout 
    1. crear logica en AdvertsPage para eliminar el token y redirigir a login
- 