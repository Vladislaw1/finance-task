import React, {useState} from 'react';
import {io} from "socket.io-client";

import {useForm} from "../../../shared/hooks/useForm";

import style from "./FormFetchInterval.module.scss"

function FormFetchInterval() {
    const [interval,setInterval] = useState({
        interval: ""
    })

    const fetch_interval = (data) => {
        const socket = io("http://localhost:4000")
        socket.emit("fetch interval",data)
    }

    const [data,handleChange, handleSubmit] = useForm(interval, fetch_interval)


    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input className={style.form_input} onChange={handleChange} name={"interval"} value={data.interval} autoComplete={"off"}/>
            <button className={style.form_button} onClick={fetch_interval}>Send</button>
        </form>
    );
}

export default FormFetchInterval;