import { LoginUserData } from "../interfaces/LoginInterfaces";

export const login = async (values: LoginUserData) => {
  // [IMPORTANT]: Adjust the user login endpoint to you API
  console.log(import.meta.env.VITE_API_URL + "/user/login", values);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL + "/user/login"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error("Error getting the user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting the user");
  }
};

export const register = () => {};
