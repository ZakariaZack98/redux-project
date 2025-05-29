import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
import formReducer from "./slices/formSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer
  }
})