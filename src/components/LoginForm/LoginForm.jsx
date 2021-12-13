import InputUI from '../UI/InputUI';
import css from './LoginForm.module.css';
import { useFormik } from 'formik';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            title: '',
            mainImage: '',
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('mainImage', values.mainImage);
            console.log(formData);

            fetch('http://localhost:7000/users/login', {
                method: 'POST',
                body: formData,
            })
                .then((resp) => resp.text())
                .then((data) => console.log(data))
        }
    })
    return(
        <section className={css.loginContainer}>
            <form onSubmit={formik.handleSubmit} className={css.loginForm}>
                <InputUI
                    name='Email'
                    type='text'
                />
                <InputUI
                    name='Password'
                    type='password'
                />
                <input
                    className='form-control'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    type='text'
                    name='title'
                    placeholder='name'
                />
                <br />
                <input
                    onChange={(e) => formik.setFieldValue('mainImage', e.target.files[0])}
                    className='form-control'
                    type='file'
                    name='mainImage'
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default LoginForm;