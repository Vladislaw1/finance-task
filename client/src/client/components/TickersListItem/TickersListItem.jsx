import React from 'react';

import {ReactComponent as UpIcon} from "../../../icon/arrow-thin-up-svgrepo-com.svg";
import {ReactComponent as DownIcon} from "../../../icon/arrow-thin-down-svgrepo-com.svg";

import style from "./TickersListItem.module.scss"

function TickersListItem({tick}) {
    const {ticker, exchange, price, change, change_percent, dividend, last_trade_time, class_price_change} = tick;

    const className = class_price_change === "up" ? style.up : style.down;
    const plusMinus = class_price_change === "up" ? "+" : "-";
    const UpDown = class_price_change === "up" ? UpIcon : DownIcon;

    return (
        <tr className={className}>
            <td className={style.td}><UpDown/></td>
            <td className={style.td}>{ticker}</td>
            <td className={style.td}>{exchange}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{plusMinus}{change}</td>
            <td className={style.td}>{plusMinus}{change_percent}</td>
            <td className={style.td}>{dividend}</td>
            <td className={style.td}>{last_trade_time}</td>
        </tr>
    );
}

export default TickersListItem;