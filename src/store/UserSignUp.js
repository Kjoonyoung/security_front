import { createSlice } from '@reduxjs/toolkit';

export const userSignUpSlice = createSlice({
    name: 'userSignUp',
    initialState: {
        name: null,
        email: null,
        password: null,
    },
    reducers:{
        SET_SIGNUP_USER: (state, action) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.password = action.payload.password;

          console.log(action.payload);
        }
    }
})

export const { SET_USER_SIGNUP } = userSignUpSlice.actions;

export default userSignUpSlice.reducer;