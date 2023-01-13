import { useState } from 'react';
import Button from '../Button/Button';
import style from './WordAddingForm.module.scss';

function WordAddingForm() {
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
        const valueArr = Object.values(isValue)
        for (const value of valueArr) {
            if (value === '') {
                errors.emptyField = 'Все поля должны быть заполнены. ';
            }
            if (/\d/.test(value)) {
                errors.isNumber = 'Цифры вводить нельзя. '
                break;
            }
        }
        console.log(errors);
        return errors;
    };

    const errors = validateForm(isValue);

    return (
        <section className={style.container}>
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
                    onClick={() => { }}
                    src='./assets/images/icons8-checkbox-26.png'
                    disabled={errors.emptyField || errors.isNumber}
                />
            </form>
            {errors.isNumber && <p className={style.form__errorMessage}>{[errors.isNumber, errors.emptyField]}</p>}
        </section>
    );
}

export default WordAddingForm;