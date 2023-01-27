import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} placeholder={'Login'} validate={[required]}/>
            </div>
            <div>
                <Field name="password" component={Input} placeholder={'Passport'} validate={[required]}/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox" placeholder={'Login'} validate={[required]}/>remember me
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