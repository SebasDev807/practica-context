# Backend - MERN App

Este es el backend de una aplicación MERN, desarrollado con **Node.js**, **Express** y **MongoDB**. El proyecto está gestionado con **pnpm**.

## 🖠️ Tecnologías

* Node.js
* Express
* MongoDB (Mongoose)
* PNPM

## 🚀 Instalación

1. Clona el repositorio (si no lo has hecho):

   ```bash
   git clone https://github.com/usuario/repositorio.git
   cd backend
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Crea un archivo `.env` con la configuración del entorno:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/miapp
```

4. Inicia el servidor en modo desarrollo tanto en el frontend como en el backend:

   ```bash
   pnpm dev
   ```

## ⚙️ Scripts

* `pnpm dev` – Inicia el servidor con hot reload (usando nodemon)
* `pnpm start` – Inicia el servidor en modo producción

## 📁 Estructura sugerida

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── index.js
└── .env
```

## 🛡️ Notas

* Asegúrate de que MongoDB esté corriendo en local o usa un servicio en la nube como Atlas.
* Si el backend expone una API para el frontend, asegúrate de configurar CORS correctamente.
* La URL base de la API será algo como: `http://localhost:5000/api`
