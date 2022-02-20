import action from "./tickers-action";
import {combineReducers, createReducer} from "@reduxjs/toolkit";

const initialState = [];

const tickers = createReducer(initialState, {
    [action.addTickersSuccess]: (state, {payload}) => {
        let arr = [];

        if (state.length === 0) {
            arr = [...payload]
        } else {
                payload.forEach((el,idx) => {
                    const pric = state[idx].price
                    if (pric < el.price) {
                        arr.push({...el, class_price_change: "up"})
                    } else {
                        arr.push({...el, class_price_change: "down"})
                    }
                })
        }
        return arr
    }

})

export default combineReducers({
    tickers
})