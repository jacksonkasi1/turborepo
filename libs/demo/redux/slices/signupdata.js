import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userSignupData: {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number_code: "",
    phone_number: "",
    nationality: "IN",
    currency: "INR",
    password: "",
    confirm_password: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    n_c_centre: "",
    proof: "AR",
    proof_id: "",
    passport: "",
    is_notification: false,
    is_terms: false,
    bio: "",
    interested: []
  }
}

const userSignupDataSlice = createSlice({
  name: "userSignupData",
  initialState,
  reducers: {
    setUserSignupData: (state, action) => {
      state.userSignupData = action.payload
    },
    clearSignupData:(state, action) =>{
      state.userSignupData = initialState.userSignupData
    }
  }
})

export const { setUserSignupData } = userSignupDataSlice.actions
export default userSignupDataSlice.reducer
