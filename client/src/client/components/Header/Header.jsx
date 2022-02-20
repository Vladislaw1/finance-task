import React from 'react';

import style from "./Header.module.scss"
import FormFetchInterval from "../FormFetchInterval";

function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.header_caption}>Finance-task</h1>
            <FormFetchInterval/>
        </header>
    );
}

export default Header;