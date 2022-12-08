import style from './footer.module.scss';

function Footer() {
    return (
        <footer className={style.container}>
            <button className={style.block_navigation}>Выученные</button>
            <button className={style.block_navigation}>Карточки слов</button>
            <button className={style.block_navigation}>Список слов</button>
        </footer>
    );
}

export default Footer;