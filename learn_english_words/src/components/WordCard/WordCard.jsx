import { useEffect, useRef } from 'react';
import style from './wordCard.module.scss'

function WordCard(props) {

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    });

    useEffect(() => console.log('я родился!'))

    return (
        <div className={style.container_card} id={props.key}>
            <div className={style.wordEnglish}>{props.english}</div>
            <div className={style.transcription}>{props.transcription}</div>
            <div className={style.buttons}>
                {
                    props.clicked
                        ? <p className={style.wordRussian}>{props.russian}</p>
                        : <button onClick={props.handelClick}
                            className={style.button}
                            ref={ref}>Проверить
                        </button>
                }
            </div>
        </div>
    );
}

WordCard.defaultProps = {
    english: 'dog',
    transcription: '[dog]',
    russian: 'собака',
    key: '0'
}

export default WordCard;