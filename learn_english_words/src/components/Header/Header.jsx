import style from './header.module.scss';
import RegistrationForm from '../LoginForm/LoginForm';

function Header(props) {

    return (
        <div className={style.container}>
            <div className={style.registration_form}>
                <div className={style.profil}>
                    <img className={style.profil_icon}
                        src="./assets/images/icons8-пользователь-мужчина-в-кружке-50.png"
                        alt="logo" />
                    <button onClick={props.showLoginForm} className={style.text}>Войти</button>
                    <button className={style.text}>Регистрация</button>
                </div>
            </div>
            <legend className={style.search_block}>
                <input className={style.input} type="text" placeholder='поиск' />
                <img className={style.search_icon} src='./assets/images/searchIcon.svg' alt="search" />
            </legend>
        </div>
    );
}

export default Header;