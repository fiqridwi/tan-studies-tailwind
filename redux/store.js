import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/reducer";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["cartAmount"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

export const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
