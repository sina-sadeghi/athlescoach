import React from 'react';
import profile from '../../../../assets/images/profile.jpg';
import body from '../../../../assets/images/body.jpg';

const Profile = props => {

    const fields = (name, value) => {
        return <div className={'flex flex-wrap'}>
            <div className={'w-28 lg:w-48'}>{name}</div>
            <div>{value}</div>
        </div>
    }

    const bodyFields = (name, value) => {
        return <span className={'inline-block ml-16'}>
            <span className={'inline-block w-10'}>{name}</span>
            <span className={'underline'}>{value}</span>
        </span>
    }

    return <div>

        <img src={profile} alt="me" className={'object-cover rounded-full h-32 w-32 mx-auto my-4 border-2 shadow-xl border-third_color'}/>

        <div
            className={'relative border-4 border-third_color rounded w-9/12 mx-auto mb-16 p-5 pl-12 bg-text text-background shadow-xl'}>
            <div className={'absolute -my-10 p-1 rounded bg-third_color text-background'}>{'اطلاعات شخصی'}</div>
            <span
                className={'absolute left-0 -mt-2.5 ml-2.5 px-2 py-1 cursor-pointer border rounded-full hover:bg-white hover:text-third_color'}>
                    <i className={'fa-thin fa-pen'}/>
                </span>
            {fields('ایمیل', 'sainsadeghi0790@gmail.com')}
            {fields('نام', 'سنیا صادقی')}
            {fields('شماره همراه', '09152822484')}
            {fields('تاریخ تولد', '27/9/1379')}
            {fields('جنسیت', 'مرد')}
            {fields('باشگاه ورزشی', 'برادران قلی')}
        </div>
        <div
            className={'relative border-4 border-third_color rounded w-9/12 mx-auto my-16 p-5 pl-12 bg-text text-background shadow-xl'}>
            <div className={'absolute -my-10 p-1 rounded bg-third_color text-background'}>{'اطلاعات بدنی'}</div>
            <span
                className={'absolute left-0 -mt-2.5 ml-2.5 px-2 py-1 cursor-pointer border rounded-full hover:bg-white hover:text-third_color'}>
                    <i className={'fa-thin fa-pen'}/>
                </span>
            {bodyFields('سن', '22')}
            {bodyFields('قد', '167')}
            {bodyFields('وزن', '50')}
            <br/><br/>
            <div className={'flex flex-wrap mb-6'}>
                <div className={'w-28 lg:w-48'}>{'مشکلات خاص'}</div>
                <div>
                    <div>- {'آسم(تنگی نفس)'}</div>
                    <div>- {'پوکی استخوان'}</div>
                    <div
                        className={'max-w-xs'}>- {'سیبلاتنمیبلا تنطزرذدئسیبلاتن تصضصنل بصثین qwj rq;wjeqp dq jqe[f qe[ fjqe f[o'}</div>
                </div>
            </div>
            <div className={'flex flex-wrap'}>
                <div className={'w-28 lg:w-48'}>{'آخرین عکس بدن'}</div>
                <img src={body} alt="my picture" className={'object-cover w-48 h-64'}/>
            </div>
        </div>

    </div>
}

export default Profile;