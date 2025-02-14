# Nodepop App

Nodepop es una aplicación web desarrollada con **React**, **Vite** y **TypeScript**, que permite a los usuarios gestionar anuncios a través de una API REST.

Este frontend con React está diseñado usando como API [Nodepop API](https://github.com/davidjj76/nodepop-api).

## 📌 Características

- Autenticación de usuarios con login y gestión de sesión.
- Listado de anuncios con filtros avanzados.
- Creación y eliminación de anuncios.
- Navegación protegida para usuarios autenticados.
- Estilos modernos con TailwindCSS.

## 🚀 Tecnologías utilizadas

- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Backend:** API REST de [Nodepop API](https://github.com/davidjj76/nodepop-api)
- **Librerías:** React Router, Axios

## 📂 Estructura del Proyecto

```
nodepop-app/
│── src/
│   ├── client.ts         # Configuración de Axios
│   ├── components/       # Componentes reutilizables
│   ├── pages/
│   │   ├── auth/         # Páginas de autenticación (Login)
│   │   ├── adverts/      # Páginas de anuncios (Listado, Detalle, Nuevo)
│   ├── main.tsx          # Punto de entrada de la app
│   ├── App.tsx           # Configuración de rutas
│   ├── index.css         # Estilos con TailwindCSS
│── public/               # Archivos estáticos
│── package.json          # Dependencias y scripts
│── tsconfig.node.json    # Configuración de TypeScript
│── vite.config.ts        # Configuración de Vite
```

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/nodepop-app.git
   cd nodepop-app
   ```

2. **Instalar dependencias:**
   ```sh
   npm install
   ```

3. **Configurar variables de entorno:**
   Crear un archivo `.env.local` en la raíz con:
   ```sh
   VITE_API_BASE_URL=http://localhost:ejemplo3001/
   ```

4. **Iniciar el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

## 📌 Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera la versión de producción.
- `npm run preview`: Previsualiza la build.
- `npm run lint`: Ejecuta ESLint.
- `npm run pretty`: Formatea el código con Prettier.

## 🔐 Autenticación y Seguridad

- El sistema de autenticación se basa en **JWT**.
- Se almacena el `accessToken` en `localStorage` si el usuario marca "Remember Me". (falta ajustar logica de si no se marca la casilla)
- Rutas protegidas redirigen a `/login` si el usuario no está autenticado.

## 🛠️ Funcionalidades Principales

### 🔹 Login Page (`/login`)
- Formulario para ingresar email y contraseña.
- Opción "Recordar sesión" para mantener la autenticación.

### 🔹 Adverts Page (`/adverts`)
- Listado de anuncios con nombre, precio, tipo (compra/venta) y etiquetas.
- Filtros por nombre, tipo, precio y etiquetas.
- Opción para cerrar sesión.

### 🔹 Advert Detail Page (`/adverts/:id`)
- Muestra detalles del anuncio.
- Permite eliminar el anuncio con confirmación.

### 🔹 New Advert Page (`/adverts/new`)
- Formulario para crear un nuevo anuncio.
- Validaciones en el frontend antes de enviar los datos.



_Proyecto desarrollado con 💻 por [Roberto Gomez]._
