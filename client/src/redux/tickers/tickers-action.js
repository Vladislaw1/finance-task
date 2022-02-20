import {createAction} from "@reduxjs/toolkit";

const addTickersRequest = createAction("addTickersRequest")
const addTickersSuccess = createAction("addTickersSuccess")
const addTickersError = createAction("addTickersError")

const action = {
    addTickersRequest,
    addTickersSuccess,
    addTickersError
}

export default action;