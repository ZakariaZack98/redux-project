import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  phone: null,
  email: '',
  address: '',
  zipCode: '',
  errors: {
    firstNameError: '',
    lastNameError: '',
    genderError: '',
    phoneError: '',
    emailError: '',
    addressError: '',
    zipCodeError: '',
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName: (state, actions) => {
      state.firstName = actions.payload
    },
    setLastName: (state, actions) => {
      state.lastName = actions.payload
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    setFirstNameError: (state, action) => {
      state.errors.firstNameError = action.payload;
    },
    setLastNameError: (state, action) => {
      state.errors.lastNameError = action.payload;
    },
    setGenderError: (state, action) => {
      state.errors.genderError = action.payload;
    },
    setPhoneError: (state, action) => {
      state.errors.phoneError = action.payload;
    },
    setEmailError: (state, action) => {
      state.errors.emailError = action.payload;
    },
    setAddressError: (state, action) => {
      state.errors.addressError = action.payload;
    },
    setZipCodeError: (state, action) => {
      state.errors.zipCodeError = action.payload;
    },
  }
})

export default formSlice.reducer;
export const {setFirstName, setLastName, setGender, setPhone, setEmail, setAddress, setZipCode, setFirstNameError, setLastNameError, setGenderError, setPhoneError, setEmailError, setAddressError, setZipCodeError} = formSlice.actions;