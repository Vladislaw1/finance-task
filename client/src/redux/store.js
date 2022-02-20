import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import tickersReducer from "./tickers/tickers-reducer";

const middleware  = getDefaultMiddleware(thunk)

export const store = configureStore({
    reducer:{
        tickers: tickersReducer
    },
    middleware
})