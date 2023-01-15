import { useState, useEffect } from 'react';
import { inject, observer } from "mobx-react";

import Word from './Word/Word.jsx';
import Button from '../Button/Button';

import style from './wordComponent.module.scss';

function WordComponent(props) {
    const { english, transcription, russian, wordId, tag, deleteWord, updateWord, serverError } = props;

    const [isEditing, setIsEditing] = useState(false);

    const [errors, setErrors] = useState({
        english: undefined,
        transcription: undefined,
        russian: undefined
    });

    const [newValues, setNewValues] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
        id: wordId,
        tags: tag,
    });

    useEffect(() => setNewValues(newValues), [newValues]);

    const hasChanges = () => {
        for (const [name, value] of Object.entries(newValues)) {
            if (props[name] !== value) return true
        }
        return false
    }

    const hasErrors = () => Object.values(errors).filter(error => error !== undefined).length > 0

    const edit = () => {
        setIsEditing(true);
    }

    const cancelEditing = () => {
        if (window.confirm('Уверены что хотите отменить несохраненные изменения?')) {
            setIsEditing(false);
        }
    }

    function validate(inputValue) {
        if (inputValue === '') {
            return 'Заполните поле!'
        } else if (/\d/.test(inputValue)) {
            return 'Цифры вводить нельзя!'
        }
    }

    const createOnChangeHandler = (propertyName) => (newValue, error) => {
        setNewValues({ ...newValues, [propertyName]: newValue });
        setErrors({ ...errors, [propertyName]: error });
    }

    const saveChanges = () => {
        updateWord(wordId, newValues);
        setIsEditing(!isEditing);
    }
    const removeWord = () => {
        deleteWord(wordId)
    }

    return (
        <div className={style.container} key={props.id}>
            <Word validate={validate}
                onChange={createOnChangeHandler('english')}
                content={props.word.english}
                isEditing={isEditing}
                name='english'
            />
            <Word
                validate={validate}
                onChange={createOnChangeHandler('transcription')}
                content={transcription}
                isEditing={isEditing}
                name='transcription'
            />
            <Word
                validate={validate}
                onChange={createOnChangeHandler('russian')}
                content={russian}
                isEditing={isEditing}
                name='russian'
            />
            <div className={`${style.btn_container} ${style.wrapper}`}>
                {isEditing && <Button
                    onClick={saveChanges}
                    src='./assets/images/icons8-checkbox-26.png'
                    disabled={!hasChanges() || hasErrors()}
                    style={style.btn_save}
                    disabledStyle={style.btn_save_disabled}
                />}
                {isEditing && <Button
                    onClick={cancelEditing}
                    style={style.cancel_edit_btn}
                    src='./assets/images/icons8-cancel-30.png'
                />}
                {!isEditing && <Button
                    onClick={edit}
                    style={style.btn_edit}
                    src='./assets/images/icons8-pen-100.png'
                />}
                <Button
                    onClick={removeWord}
                    style={style.btn_delete}
                    src='./assets/images/icons8-delete-50.png'
                />
            </div>
            {errors && <div className={style.error_text}>{[errors.english, errors.transcription, errors.russian]}</div>}
        </div>
    );
}

export default inject(({ wordsStore }) => {
    const { deleteWord, updateWord, serverError } = wordsStore;
    return { deleteWord, updateWord, serverError };
})(observer(WordComponent)); 
