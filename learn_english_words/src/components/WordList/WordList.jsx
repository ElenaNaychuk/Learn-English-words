import WordComponent from '../WordComponent/WordComponent.jsx';
import style from './wordList.module.scss'

function WordList(props) {
    return (
        <div className={style.container_words_list}>
            {
                props.words.map((word) =>
                    <WordComponent
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tag={word.tags}
                        key={word.id}
                        word={word}
                    />
                )
            }
        </div>
    );
}

export default WordList;