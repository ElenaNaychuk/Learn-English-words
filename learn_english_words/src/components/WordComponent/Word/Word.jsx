import style from './word.module.scss'

function Word(props) {
    if (props.isEditing) {
        return (
            <input
                className={style.input}
                type="text" value={props.content}
                onChange={() => { }}
            />
        );
    }
    else {
        return (
            <div className={style.wrapper}>{props.content}</div>
        )
    }
}

export default Word;