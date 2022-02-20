import React from 'react';
import {useSelector} from "react-redux";

import {v4} from "uuid";

import TickersListItem from "../TickersListItem";

import {tickersSelector} from "../../../redux/tickers/tickers-selector";

import style from "./TickersList.module.scss"

function TickersList() {

    const tickers = useSelector(tickersSelector)

    return (
        <>
            <table className={style.table}>
                <thead>
                <tr>
                    <th></th>
                    <th>Ticker</th>
                    <th>Exchange</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Percent</th>
                    <th>Dividend</th>
                    <th>Last time</th>
                </tr>
                </thead>
                <tbody>
                {tickers.map(el => <TickersListItem key={v4()} tick={el}/>)}
                </tbody>
            </table>
        </>
    );
}

export default TickersList;