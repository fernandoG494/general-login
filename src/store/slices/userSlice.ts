import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../interfaces/StoreInterfaces";

const initialState: InitialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state) => {
      console.log("action: ", state);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
