import { Link } from 'react-router-dom'

import style from './errorMessage.module.scss';

function ErrorMessage() {
    return (
        <div className={style.container}>
            <div className={style.title}>Ошибка 404.</div>
            <div className={style.message}>Не удалось найти страницу.</div>
            <div className={style.message}>Вернуться на <span><Link to='/' className={style.link}>главную</Link></span></div>
        </div>
    );
}

export default ErrorMessage;