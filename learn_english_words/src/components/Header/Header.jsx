import style from './header.module.scss';

function Header() {
    return (
        <div className={style.container}>
            <div className={style.registration_form}>
                <img className={style.logo} src='./assets/images/eng.png' alt="logo" />
                <div className={style.profil}>
                    <img className={style.profil_icon} src="./assets/images/icons8-пользователь-мужчина-в-кружке-64.png" alt="logo" />
                    <p className={style.text}>Регистрация</p>
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