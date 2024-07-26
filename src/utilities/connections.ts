import { LoginUserData } from "../interfaces/LoginInterfaces";

export const login = async (values: LoginUserData) => {
  // [IMPORTANT]: Adjust the user login endpoint to you API
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

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error getting the user");
  }
};

export const register = () => {};
