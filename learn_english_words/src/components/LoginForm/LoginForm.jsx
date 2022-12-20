// import React from "react";
import { useState } from 'react';
import style from './loginForm.module.scss';

export default function LoginForm(props) {

    const [checked, setChecked] = useState(false)
    const handleChenge = () => {
        setChecked(!checked)
    }
    return (
        <div className={style.favDialog}>
            <form className={style.form}>
                <h2 className={style.title}>Вход</h2>
                <legend>
                    <input className={style.input} type="text" placeholder='Имя' />
                </legend>
                <legend>
                    <input className={style.input} type="text" placeholder='Пароль' />
                </legend>
                <legend>
                    <input onClick={handleChenge} type="checkbox" checked={checked} /> <span className={style.text}>Запомнить меня</span>
                </legend>
                <button className={style.saveDate_btn}>Готово</button>
                <button onClick={props.closeLoginForm}
                    className={style.close_btn}>&#10006;
                </button>
            </form>
        </div>
    )
}

