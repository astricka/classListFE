import InputUI from '../UI/InputUI';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonUI from '../UI/ButtonUI';
import { useHistory } from 'react-router-dom';
import css from './RegisterForm.module.css';

function RegisterForm() {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(4, 'minimum 4 characters')
                .max(55, 'maximum 55 characters')
                .required('required'),
            password: Yup.string()
                .min(4, 'minimum 4 characters')
                .max(55, 'maximum 55 characters')
                .required('required'),
            repeatPassword: Yup.string()
                .min(4, 'minimum 4 characters')
                .oneOf([Yup.ref('password'), ''], 'Password should match')
                .required('required'),
        }),
        onSubmit: (values) => {
            handleSubmit(values.email, values.password);
        },
    });

    const handleSubmit = async (email, password) => {
        const resp = await fetch('http://localhost:7000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await resp.json();
        if (data.msg === 'success') {

        }
    }
    return(
        <section className={css.registerFormContainer}>
            <form className={css.registerForm} onSubmit={formik.handleSubmit}>
                <InputUI
                    name='email'
                    type='text'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <span className={css.errorMsg}>{formik.errors.email}</span>}
                <InputUI
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <span className={css.errorMsg}>{formik.errors.password}</span>}
                <InputUI
                    name='repeatPassword'
                    type='password'
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.repeatPassword && formik.errors.repeatPassword && <span className={css.errorMsg}>{formik.errors.repeatPassword}</span>}
                <ButtonUI type={'submit'}>Register</ButtonUI>
            </form>
        </section>
    );
}

export default RegisterForm;
