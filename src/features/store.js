import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
import formReducer from "./slices/formSlice"
import postReducer from "./slices/postSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    posts: postReducer,
  }
})