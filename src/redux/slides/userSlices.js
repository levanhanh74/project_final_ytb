import { createSlice } from '@reduxjs/toolkit'



export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    email: "",
    access_token: ""
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, email, access_token } = action.payload;
      state.name = name;
      state.email = email;
      state.access_token = access_token;
    }
  }
})


export const { updateUser } = UserSlice.actions

export default UserSlice.reducer