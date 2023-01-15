import { inject, observer } from "mobx-react";
import WordAddingForm from '../../components/WordAddingForm/WordAddingForm.jsx';
import WordComponent from '../../components/WordComponent/WordComponent.jsx';
import style from './wordList.module.scss'

function WordList({ words, isLoading }) {

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    return (
        <div className={style.container_words_list}>
            <WordAddingForm />
            {
                words.map((word) =>
                    <WordComponent
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        wordId={word.id}
                        tag={word.tags}
                        key={word.id}
                        word={word}
                    />
                )
            }
        </div>
    );
}

export default inject(({ wordsStore }) => {
    const { words, isLoading } = wordsStore;
    return { words, isLoading };
})(observer(WordList));