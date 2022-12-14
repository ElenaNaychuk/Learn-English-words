import React from "react";
import style from './loginForm.module.scss';

export default class LoginForm extends React.Component {

    render() {
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
                    <button className={style.saveDate_btn}>Готово</button>
                    <button onClick={this.props.closeLoginForm}
                        className={style.close_btn}>&#10006;
                    </button>
                </form>
            </div>
        )
    }
}
