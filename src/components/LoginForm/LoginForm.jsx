import InputUI from '../UI/InputUI';
import css from './LoginForm.module.css';

function LoginForm() {
    return(
        <section className={css.loginContainer}>
            <form className={css.loginForm}>
                <InputUI
                    name='Email'
                    type='text'
                />
                <InputUI
                    name='Password'
                    type='password'
                />
            </form>
        </section>
    );
}

export default LoginForm;