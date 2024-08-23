import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "..";
import { userStateProps } from "../../types";


const initialState: userStateProps = {
  error: null,
  user: null,
  isLoggedIn: false
}

const userInfo = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    hasError(state, action) {
      state.error = action.payload
    }
  }
})



export const getUserInfo = async (data: { email: string; password: string }) => {
  try {
    const response = await instance.post("/auth/login", data);
    return dispatch(userInfo.actions.logIn(response.data.data)); // Adjust based on your API response structure
  } catch (error) {
    return console.log(error);
  }
};


export default userInfo.reducer;