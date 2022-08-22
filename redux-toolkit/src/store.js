import { configureStore } from '@reduxjs/toolkit'
import tutorialReducer from './slices/tutorials';
// import authReducer from "./slices/auth";
const reducer = {
  tutorials: tutorialReducer,
    // auth:authReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;