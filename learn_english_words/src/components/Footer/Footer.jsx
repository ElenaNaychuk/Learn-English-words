import style from './footer.module.scss';

function Footer(props) {
    return (
        <footer className={style.container}>
            <button className={style.block_navigation}>Выученные</button>
            <button onClick={props.showCardGallery}
                className={style.block_navigation}>Карточки слов</button>
            <button onClick={props.showWordsList}
                className={style.block_navigation}>Список слов</button>
        </footer>
    );
}

export default Footer;