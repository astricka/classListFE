import css from './ButtonUI.module.css';

function ButtonUI({ children, type }) {
    return(
        <button className={css.buttonUI} type={type}>{children}</button>
    );
}

export default ButtonUI;
