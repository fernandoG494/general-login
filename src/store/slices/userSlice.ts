import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../interfaces/StoreInterfaces";

const initialState: InitialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
