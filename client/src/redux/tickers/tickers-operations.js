import action from "./tickers-action";

export const addTickers = (data) => async dispatch => {
    dispatch(action.addTickersRequest())
    try {
        dispatch(action.addTickersSuccess(data))
    } catch (e) {
        dispatch(action.addTickersError(e.message))
    }
}