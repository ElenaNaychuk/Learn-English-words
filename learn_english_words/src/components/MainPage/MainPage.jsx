import style from './mainPage.module.scss';

MainPage.defaultProps = {
    userName: 'пользователь'
}

function MainPage(props) {

    return (
        <div className={style.container} id='main'>
            <h3 className={style.title}>Приветствуем, {props.userName}!</h3>
            <div className={style.welcome}>
                <div className={style.content}>
                    <p className={style.text}>Какое-то приветствие...</p>
                    <button className={style.button}>Учить!</button>
                </div>
                <img className={style.image} src="./assets/images/study2-img.jpg" alt="photo" />
            </div>
            <div className={style.info}>
                <img className={style.image} src="./assets/images/study_img.png" alt="photo" />
                <div className={style.content}>
                    <p className={style.text}>Мотивирующий текст...</p>
                    <button className={style.button}>Учить!</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;