import WordComponent from '../WordComponent/WordComponent.jsx';

function WordList(props) {
    return (
        <div className="container_words_list">
            {
                props.words.map((word) =>
                    <WordComponent
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tag={word.tags}
                        key={word.id}
                    />
                )
            }
        </div>
    );
}

export default WordList;