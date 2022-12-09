import { useState } from 'react';

import Word from './Word/Word.jsx';
import Button from './Button/Button';

import style from './wordComponent.module.scss';

function WordComponent(props) {

    const [isEditing, setIsEditing] = useState(props.clicked || false);

    const edit = () => {
        setIsEditing(true);
    }
    const cancelEditing = () => {
        if (window.confirm('Уверены что хотите отменить несохраненные изменения?')) {
            setIsEditing(false);
        }
    }
    return (
        <div className={style.conainer} key={props.id}>
            <Word content={props.english} isEditing={isEditing} />
            <Word content={props.transcription} isEditing={isEditing} />
            <Word content={props.russian} isEditing={isEditing} />
            <div className={`${style.btn_container} ${style.wrapper}`}>
                {isEditing && <Button
                    style={style.btn_save}
                    src='./assets/images/icons8-галочка-26.png'
                />}
                {isEditing && <Button
                    function={cancelEditing}
                    style={style.cancel_edit_btn}
                    src='./assets/images/icons8-отменить-30.png'
                />}
                {!isEditing && <Button
                    function={edit}
                    style={style.btn_edit}
                    src='./assets/images/icons8-карандаш-100.png'
                />}
                <Button
                    style={style.btn_delete}
                    src='./assets/images/icons8-сортировка-отходов-50.png'
                />
            </div>
        </div>
    );
}

export default WordComponent;