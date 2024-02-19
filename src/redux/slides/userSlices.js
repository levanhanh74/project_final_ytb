import { createSlice } from '@reduxjs/toolkit'



export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    email: "",
    address: "",
    phone: "",
    avatar: "",
    isAdmin: false,
    city: "",
    access_token: "",
    refresh_token: "",
  },
  reducers: {
    updateUser: (state, action) => {
      const { name = "", email = "", access_token = "", _id = "", address = "", phone = "", avatar = {}, password = "", isAdmin, city = "", refresh_token = "", } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state._id = _id ? _id : state._id;
      state.password = password ? password : state.password;
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.city = city ? city : state.city;
      state.refresh_token = refresh_token ? refresh_token : state.refresh_token;
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = false;
      state.city = "";
      state.refresh_token = "";
    }
  }
})


export const { updateUser, resetUser } = UserSlice.actions

export default UserSlice.reducer