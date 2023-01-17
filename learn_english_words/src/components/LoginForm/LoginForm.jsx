import { useState, useEffect, useRef } from 'react';
import { inject, observer } from "mobx-react";

import style from './loginForm.module.scss';

function LoginForm({ closeLoginForm, changeUserName }) {

    const [userName, setUserName] = useState('');
    const [rememberUser, setRememberUser] = useState(false);

    const ref = useRef(null);
    useEffect(() => ref.current.focus(), []);

    const handleChenge = () => {
        setRememberUser(!rememberUser)
    }

    function onNameChange(e) {
        e.preventDefault();
        let value = e.target.value;
        let name = value.trim();
        let newName = name.toLowerCase();
        let newUserName = newName.charAt(0).toUpperCase() + newName.slice(1);
        setUserName(newUserName);
    }

    const saveUserData = (e) => {
        e.preventDefault();
        if (rememberUser) {
            localStorage.setItem('name', userName)
            changeUserName(userName);
        } else {
            sessionStorage.setItem('name', userName)
            changeUserName(userName);
        }
        closeLoginForm();
        setUserName('');
    }

    return (
        <div className={style.favDialog}>
            <form className={style.form}>
                <h2 className={style.title}>Вход</h2>
                <legend>
                    <input
                        onChange={onNameChange}
                        value={userName}
                        className={style.input}
                        ref={ref}
                        name='userName'
                        type="text"
                        placeholder='Имя'
                    />
                </legend>
                <legend>
                    <input
                        type="checkbox"
                        checked={rememberUser}
                        onChange={handleChenge}
                    /> <span className={style.text}>Запомнить меня</span>
                </legend>
                <button onClick={saveUserData} className={style.saveDate_btn}>Готово</button>
                <button
                    onClick={closeLoginForm}
                    className={style.close_btn}
                >
                    &#10006;
                </button>
            </form>
        </div>
    )
}
export default inject(({ userStore }) => {
    const { changeUserName } = userStore;
    return { changeUserName };
})(observer(LoginForm));

