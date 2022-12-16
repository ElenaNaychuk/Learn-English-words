import { Link } from 'react-router-dom';
import style from './footer.module.scss';

function Footer() {
    return (
        <footer className={style.container}>
            <Link to='/learned' className={style.block_navigation}>Выученные</Link>
            <Link to='/cards' className={style.block_navigation}>Карточки слов</Link>
            <Link to='/list' className={style.block_navigation}>Список слов</Link>
        </footer>
    );
}

export default Footer;