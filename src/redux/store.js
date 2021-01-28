import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import categoryReducer from "./category";
import bookReducer from "./book";
import authorReducer from "./author";

//Creating Store
const reducer = combineReducers({
  categories: categoryReducer,
  books: bookReducer,
  authors: authorReducer,
});
//Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};
//Persist Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
