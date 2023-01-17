// import { useEffect, useRef } from 'react';
import { inject, observer } from "mobx-react";

import style from './header.module.scss';

function Header({ user, showLoginForm }) {

    // const ref = useRef(null);
    // useEffect(() => ref.current.focus(), []);

    const savedUserName = localStorage.getItem('name');
    const unsavedUserName = sessionStorage.getItem('name');

    if (savedUserName != null) {
        user.name = savedUserName;
    } else if (unsavedUserName != null) {
        user.name = unsavedUserName;
    }

    return (
        <div className={style.container}>
            <div className={style.login_form}>
                <div className={style.profil}>
                    <img className={style.profil_icon}
                        src="./assets/images/icons8-man-50.png"
                        alt="logo" />
                    {user.name === 'пользователь'
                        ? <button onClick={showLoginForm} className={style.btn}>Войти</button>
                        : <p onClick={showLoginForm} className={style.userName}>{user.name}</p>
                    }
                </div>
            </div>
            {/* <legend className={style.search_block}>
                <input ref={ref} className={style.input} type="text" placeholder='поиск' />
                <img className={style.search_icon} src='./assets/images/searchIcon.svg' alt="search" />
            </legend> */}
        </div>
    );
}

export default inject(({ userStore }) => {
    const { user } = userStore;
    return { user };
})(observer(Header)); 
