import { useEffect, useRef } from 'react';
import style from './header.module.scss';

function Header(props) {

    const ref = useRef(null);
    useEffect(() => ref.current.focus(), []);

    return (
        <div className={style.container}>
            <div className={style.login_form}>
                <div className={style.profil}>
                    <img className={style.profil_icon}
                        src="./assets/images/icons8-пользователь-мужчина-в-кружке-50.png"
                        alt="logo" />
                    <button onClick={props.showLoginForm} className={style.text}>Войти</button>
                    <button className={style.text}>Регистрация</button>
                </div>
            </div>
            <legend className={style.search_block}>
                <input ref={ref} className={style.input} type="text" placeholder='поиск' />
                <img className={style.search_icon} src='./assets/images/searchIcon.svg' alt="search" />
            </legend>
        </div>
    );
}

export default Header;