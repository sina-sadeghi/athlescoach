import React, {useState, useEffect} from 'react';
import Form from '../../../../shared/form/Form';
import Filed from '../../../../shared/filed/Filed';
import {Link} from "react-router-dom";
import Button from "../../../../shared/button/Button";

const arregex =/^[a-zA-Z0-9!@#$%^&*+/_ ]*$/

const Login = props => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const emailValue = (index, value) => {
            setEmail(value)
    }

    const passValue = (index, value) => {
        if (arregex.test(value[value.length-1]) && value.length <= 20)
            setPass(value)
        else
            alert('رمز عبور فقط کارکترهای انگلیسی و عدد و !@#$%^&*+ تا 20 کاراکتر')
    }

    const sendForm = pr => {
        if (email.indexOf("@") !== -1) // todo regex
            alert('ایمیل نامعتبر')
        else if(!(arregex.test(pass[pass.length-1]) && pass.length <= 20))
            alert('رمز عبور فقط کارکترهای انگلیسی و عدد و !@#$%^&*+ تا 20 کاراکتر')
        else if (pass.length < 8)
            alert('رمز عبور حداقل باید x8 کاراکتر باشد')
        else {
            console.log({
                email: email,
                password: pass
            })
            alert('ارسال فرم به سرور')
        }
    }

    return (
        <div>
            <div className={'w-5/6 md:w-[calc(430px)] m-auto mt-[calc(50vh_-_140px)]'}>
                <Form title={'ورود'}>
                    <Filed
                        name={'ایمیل'}
                        type={'text'}
                        value={email}
                        change={e => emailValue(1, e.target.value)}/>
                    <Filed
                        name={'رمز عبور'}
                        type={'password'}
                        value={pass}
                        change={e => passValue(1, e.target.value)}
                    />
                    <div className={'mx-14 my-7 text-left'}>
                        <Button type={'ok'} onClick={sendForm}>تایید</Button>
                    </div>
                </Form>
            </div>
        </div>
    );

}
export default Login;