import { useState } from 'react';
import { inject, observer } from "mobx-react";

import Button from '../Button/Button';
import style from './WordAddingForm.module.scss';

function WordAddingForm({ addWord }) {
    const [isValue, setIsValue] = useState({
        english: '',
        transcription: '',
        russian: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setIsValue({ ...isValue, [name]: value })
    }

    const validateForm = (isValue) => {
        const errors = {};
        const valuesArr = Object.values(isValue);
        for (const value of valuesArr) {
            if (value === '') {
                errors.emptyField = 'Все поля должны быть заполнены. ';
            }
            if (/\d/.test(value)) {
                errors.isNumber = 'Цифры вводить нельзя. '
                break;
            }
        }
        return errors;
    };

    const errors = validateForm(isValue);

    function saveNewWord(e) {
        e.preventDefault()
        try {
            addWord(isValue);
        } catch (error) {
            console.log(error);
            alert('Ой, произошла ошибка.')
        }
        setIsValue({
            english: '',
            transcription: '',
            russian: '',
        })
    }

    return (
        <section className={style.container}>
            <h4 className={style.formTitle}>Добавить новое слово</h4>
            <form className={style.form}>
                <input
                    onChange={handleChange}
                    value={isValue.english}
                    className={style.form__input}
                    type="text"
                    name='english'
                    placeholder='english' />
                <input
                    onChange={handleChange}
                    value={isValue.transcription}
                    className={style.form__input}
                    type="text"
                    name='transcription'
                    placeholder='transcription' />
                <input
                    onChange={handleChange}
                    value={isValue.russian}
                    className={style.form__input}
                    type="text"
                    name='russian'
                    placeholder='russian' />
                <Button
                    onClick={saveNewWord}
                    src='./assets/images/icons8-checkbox-26.png'
                    disabled={errors.emptyField || errors.isNumber}
                />
            </form>
            {errors.isNumber
                ? <p className={style.form__errorMessage}>{errors.isNumber}</p>
                : null}
        </section>
    );
}

export default inject(({ wordsStore }) => {
    const { addWord } = wordsStore;
    return { addWord };
})(observer(WordAddingForm));