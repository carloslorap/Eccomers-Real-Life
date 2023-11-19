export const base_url = "http://localhost:4000/api/";

// Obtén el usuario del localStorage si está disponible
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    // Verifica si el usuario del localStorage tiene el token antes de usarlo
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
