import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")) || null;

const clientAxios = axios.create({
  baseURL: `${import.meta.env.VITE_URL_BACK_LOCAL}/api`,
});

// Pasamos en la cabecera el auth que viene desde el backend para ingresar en las rutas protegidas

export const configHeaders = {
  headers: {
    "content-type": "application/json",
    auth: `${token}`,
  },
};

export const configHeadersImage = {
  headers: {
    "content-type": "multipart/form-data",
    auth: `${token}`,
  },
};

export default clientAxios;
