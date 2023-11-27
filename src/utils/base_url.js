export const base_url = "https://eccomers-test.onrender.com/api/";

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
