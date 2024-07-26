import { LoginUserData } from "../interfaces/LoginInterfaces";

export const login = async (values: LoginUserData) => {
  // const user = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(import.meta.env.VITE_API_URL, values);
};

export const register = () => {};
