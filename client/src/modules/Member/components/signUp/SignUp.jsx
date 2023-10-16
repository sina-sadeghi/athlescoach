import React, {useState, useEffect} from 'react';
import Form from '../../../../shared/form/Form';
import Filed from '../../../../shared/filed/Filed';
import {Link} from "react-router-dom";
import Button from "../../../../shared/button/Button";

const arregex =/^[a-zA-Z0-9!@#$%^&*+/_ ]*$/

const SignUp = props => {

    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')


    const phoneValue = (index, value) => {
        setPhone(value)
    }

    const passValue = (index, value) => {
        if (arregex.test(value[value.length-1]) && value.length <= 20)
            setPass(value)
        else
            alert('رمز عبور فقط کارکترهای انگلیسی و عدد و !@#$%^&*+ تا 20 کاراکتر')
    }

    const passValue2 = (index, value) => {
        if (arregex.test(value[value.length-1]) && value.length <= 20)
            setPass2(value)
        else
            alert('رمز عبور فقط کارکترهای انگلیسی و عدد و !@#$%^&*+ تا 20 کاراکتر')
    }

    const sendForm = pr => {
        if (!(phone == +phone)) // اگه عدد بیست رقمی باشه و نشه به عدد تبدیل شه چی todo
            alert('شماره همراه فقط عدد تا 11 کارکتر است.')
        else if(!(arregex.test(pass[pass.length-1]) && pass.length <= 20))
            alert('رمز عبور فقط کارکترهای انگلیسی و عدد و !@#$%^&*+ تا 20 کاراکتر')
        else if (phone.length !== 11)
            alert('شماره همراه باید 11 کاراکتر باشد')
        else if (pass.length < 8)
            alert('رمز عبور حداقل باید 8 کاراکتر باشد')
        else if(pass !== pass2)
            alert('تکرار رمز عبور اشتباه است')
        else {
            console.log({
                phone: phone,
                password: pass
            })
            alert('ارسال فرم به سرور')
        }
    }

    return (
        <div className={'w-screen h-screen bg-background'}>
            <div className={'w-5/6 md:w-[calc(430px)] m-auto pt-[calc(50vh_-_170px)]'}>
                <Form title={'ثبت نام'}>
                    <Filed
                        name={'ایمیل'}
                        type={'text'}
                        value={phone}
                        change={e => phoneValue(1, e.target.value)}/>
                    <Filed
                        name={'رمز عبور'}
                        type={'password'}
                        value={pass}
                        change={e => passValue(1, e.target.value)}
                    />
                    <Filed
                        name={'تکرار رمز عبور'}
                        type={'password'}
                        value={pass2}
                        change={e => passValue2(1, e.target.value)}
                    />
                    <div className={'px-14 pt-2 pb-6 text-left'}>
                        <Button type={'ok'} onClick={sendForm}>تایید</Button>
                    </div>
                </Form>
            </div>
        </div>
    );

}
export default SignUp;