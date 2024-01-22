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
      const { name = "", email = "", access_token = "", address = "", phone = "", avatar = "", _id = "", isAdmin = "", city = "", refreshToken = "", } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state.id = _id ? _id : state.id
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.city = city ? city : state.city;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = "";
      state.city = "";
      state.refreshToken = "";
    }
  }
})


export const { updateUser, resetUser } = UserSlice.actions

export default UserSlice.reducer