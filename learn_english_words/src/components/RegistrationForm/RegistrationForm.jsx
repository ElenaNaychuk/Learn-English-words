import style from './registrationForm.module.scss'
import { useState } from 'react';

function RegistrationForm(props) {

    const [checked, setChecked] = useState(false)
    const handleChenge = () => {
        setChecked(!checked)
    }

    return (
        <div className={style.favDialog}>
            <form className={style.form}>
                <h2 className={style.title}>Регистрация</h2>
                <div className={style.registration_inputs}>
                    <p>Поля с <span>*</span> обязательны.</p>
                    <div className={style.input_block}>
                        <span>*</span>
                        <input className={style.input}
                            id="login"
                            type="text"
                            minlength="5"
                            maxlength="25"
                            placeholder="Введите логин"
                            required
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <input
                            className={style.input}
                            id="email"
                            type="text"
                            placeholder="Введите Email"
                            required
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <input
                            className={style.input}
                            id="name"
                            type="text"
                            placeholder="Имя"
                            required
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <input
                            className={style.input}
                            id="password1"
                            type="password"
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <input
                            className={style.input}
                            id="password2"
                            type="password"
                            placeholder="Повторите пароль"
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="tel"
                            name="phone"
                            placeholder="Телефон"
                        />
                    </div>
                    <div id="errorMessage"></div>
                </div>
                <input onClick={handleChenge}
                    type="checkbox"
                    checked={checked} />
                <span className={style.text}>Согласие на обработку персональных данных
                </span>
                <button className={style.saveDate_btn}>Готово</button>
                <button onClick={props.closeRegistrationForm}
                    className={style.close_btn}>&#10006;
                </button>
                <div id="message"></div>
            </form>
        </div>
    );
}

export default RegistrationForm;