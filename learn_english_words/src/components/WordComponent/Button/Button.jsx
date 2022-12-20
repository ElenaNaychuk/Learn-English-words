import classnames from 'classnames';
import style from './button.module.scss';

function Button(props) {

    const newClass = classnames(
        props.style,
        {
            [props.disabledStyle]: props.disabled,
            [style.btn_disabled]: props.disabled
        }
    );

    return (
        <button
            onClick={props.onClick}
            className={`${style.btn} ${newClass}`}
            disabled={props.disabled}
        >
            <img src={props.src} />
        </button >
    );
}

export default Button;