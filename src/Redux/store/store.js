import { createStoreHook } from "react-redux";
import { cartReducers } from "../Reducers/cartReducers";

const {createStore}=require("redux");


// export const store = createStoreHook(cartReducers);

export const store = createStore(cartReducers);