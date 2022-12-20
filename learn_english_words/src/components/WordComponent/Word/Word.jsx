import { useEffect, useState } from 'react';
import classnames from 'classnames';
import style from './word.module.scss'

function Word(props) {

    let [inputValue, setInputValue] = useState(props.content);

    useEffect(() => setInputValue(inputValue), [inputValue]);

    let handleChange = (e) => {
        e.preventDefault();
        setInputValue(inputValue = e.target.value);
        const error = props.validate(inputValue);
        props.onChange(error ? undefined : inputValue, error);
    }

    const newClass = classnames(
        style.input,
        {
            [style.input_red]: inputValue === '',
        }
    );

    if (props.isEditing) {
        return (
            <>
                <input
                    className={newClass}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    name={props.name}
                />
            </>
        );
    }
    else {
        return (
            <div className={style.wrapper}>{props.content}</div>
        )
    }
}

export default Word;