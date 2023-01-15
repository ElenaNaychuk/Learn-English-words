import { useState } from 'react';
import { inject, observer } from "mobx-react";

import WordCard from '../../components/WordCard/WordCard.jsx';
import Button from '../../components/Button/Button';

import style from './cardGallery.module.scss';

function CardGallery({ words, isLoading }) {
    const [clicked, setClick] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [isLearnedNow, setIsLearnedNow] = useState(0);

    const handelClick = () => {
        setClick(true);
        setIsLearnedNow((isLearnedNow) => isLearnedNow + 1);
    }

    const showPreviousCard = () => {
        setCardIndex(cyclicDecrement(cardIndex, words.length - 1));
        setClick(false);
    }

    const showNextCard = () => {
        setCardIndex(cyclicIncrement(cardIndex, words.length - 1));
        setClick(false);
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Button
                    onClick={showPreviousCard}
                    className={style.btn}
                    src='./assets/images/icons8-left-arrow-50.png'
                    style={style.btn}
                />
                <WordCard
                    handelClick={handelClick}
                    english={words[cardIndex].english}
                    transcription={words[cardIndex].transcription}
                    id={words[cardIndex].id}
                    russian={words[cardIndex].russian}
                    clicked={clicked}
                />
                <Button
                    onClick={showNextCard}
                    className={style.btn}
                    src='./assets/images/icons8-right-arrow-50.png'
                    style={style.btn}
                />
            </div>
            <div className={style.card_number}>{cardIndex + 1} / {words.length}</div>
            <div className={style.text}>Выучено в этот раз: {isLearnedNow}.</div>
        </div>
    );
}

export default inject(({ wordsStore }) => {
    const { words, isLoading } = wordsStore;
    return { words, isLoading }
})(observer(CardGallery));


function cyclicDecrement(current, max) {
    if (current === 0) {
        return max;
    }
    return current - 1;
}
function cyclicIncrement(current, max) {
    if (current === max) {
        return 0;
    }
    return current + 1;
}
