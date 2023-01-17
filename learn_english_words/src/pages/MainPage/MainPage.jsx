import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';

import style from './mainPage.module.scss';

MainPage.defaultProps = {
    userName: 'пользователь'
}

function MainPage({ user }) {

    return (
        <div className={style.container} id='main'>
            <h3 className={style.title}>Приветствуем, {user.name}!</h3>
            <div className={style.welcome}>
                <div className={style.content}>
                    <p className={style.text}>Какое-то приветствие...</p>
                    <Link to='/cards' className={style.btn}>Учить!</Link>
                </div>
                <img className={style.image} src="./assets/images/study2-img.jpg" alt="photo" />
            </div>
        </div>
    );
}

export default inject(({ userStore }) => {
    const { user } = userStore;
    return { user };
})(observer(MainPage));
