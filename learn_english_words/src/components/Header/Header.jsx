import { inject, observer } from "mobx-react";

import style from './header.module.scss';

function Header({ user, showLoginForm }) {

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
                    {user.name === 'пользователь'
                        ? <button onClick={showLoginForm} className={style.btn}>Войти</button>
                        : <p onClick={showLoginForm} className={style.userName}>{user.name}</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default inject(({ userStore }) => {
    const { user } = userStore;
    return { user };
})(observer(Header)); 
