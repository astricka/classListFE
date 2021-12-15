import InputUI from '../UI/InputUI';
import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonUI from '../UI/ButtonUI';
import { useAuthContext } from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';

function LoginForm() {
    const { login } = useAuthContext();
    const history = useHistory();
    // const formik = useFormik({
    //     initialValues: {
    //         title: '',
    //         mainImage: '',
    //     },
    //     onSubmit: (values) => {
    //         const formData = new FormData();
    //         formData.append('title', values.title);
    //         formData.append('mainImage', values.mainImage);
    //         console.log(formData);
    //
    //         fetch('http://localhost:7000/api/new-listing', {
    //             method: 'POST',
    //             body: formData,
    //         })
    //             .then((resp) => resp.text())
    //             .then((data) => console.log(data))
    //     }
    // })
    const formik = useFormik({
        initialValues: {
            email: 'a@b.com',
            password: '123456',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(4, 'minimum 4 characters')
                .max(55, 'maximum 55 characters')
                .required(),
            password: Yup.string()
                .min(4, 'minimum 4 characters')
                .max(55, 'maximum 55 characters')
                .required(),
        }),
        onSubmit: (values) => {
            handleSubmit(values.email, values.password);
        },
    });

    const handleSubmit = async (email, password) => {
        const resp = await fetch('http://localhost:7000/api/auth/login', {
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
        const { token, email: loggedEmail } = data.loggedInUser;

        if (login(token, loggedEmail)) {
            history.replace('/myAccount');
        }
    }

    return(
        <section className={css.loginContainer}>
            <h1>Please login</h1>
            <form onSubmit={formik.handleSubmit} className={css.loginForm}>
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
                <ButtonUI type={'submit'}>Login</ButtonUI>
            </form>
        </section>
    );
}

export default LoginForm;
