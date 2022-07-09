import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localReducer from "./Local/local.reducer";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ['bookmarks'],
};

export default combineReducers({
  user: userReducer,
  localReducer: persistReducer(persistConfig, localReducer),
});
