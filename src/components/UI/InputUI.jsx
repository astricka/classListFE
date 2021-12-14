import css from './InputUI.module.css';

function InputUI({ error, name, ...rest }) {
    return(
        <div>
            <label className={css.labelUI} htmlFor={name}>{name}</label>
            <input
                className={css.input + ' ' + (error ? css['error-field'] : '')}
                name={name}
                {...rest}
            />
            {error && <span className={css['error-message']}>{error}</span>}
        </div>
    );
}

export default InputUI;
