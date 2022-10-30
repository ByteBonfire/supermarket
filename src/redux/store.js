import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import userReducer from "./userSlice";
// import cartReducer from "./cart";

// const persistConfig = {
//   key: "items",
//   storage,
//   blacklist: ["bhatbhateniCart", "restaurantCart"],
// };

// const reducer = combineReducers({
//   cart: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });
