import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input" placeholder={'Login'}/>
            </div>
            <div>
                <Field name="password" component="input" placeholder={'Passport'}/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" placeholder={'Login'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);