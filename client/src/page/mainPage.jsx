import React, {useEffect} from 'react';
import Header from "../client/components/Header";

import TickersList from "../client/components/TickersList";
import {io} from "socket.io-client";
import {addTickers} from "../redux/tickers/tickers-operations";
import {useDispatch} from "react-redux";

function MainPage(props) {
    const dispatch = useDispatch()

    function connectSocket() {
        const socket = io("http://localhost:4000")
        socket.emit("start")
        socket.on("ticker",(data)=>{
            dispatch(addTickers(data))
        })
    }

    useEffect(()=>{
        connectSocket()
    },[])

    return (
        <>
            <Header/>
            <TickersList/>
        </>
    );
}

export default MainPage;