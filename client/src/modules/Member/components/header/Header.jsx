// import './header.scss';
import React from 'react';
import profile from '../../../../assets/images/profile.jpg';
import logo from '../../../../assets/images/logo.png';
import Button from "../../../../shared/button/Button";
// import logo from '../../../../assets/image/logo.png';
// import Image from "../../../../shared/image/Image";

const Header = () => {
    return (
        <div className={'bg-third_color fixed top-0 w-full h-20 flex justify-around items-center text-background px-8 z-10'}>
            <a href="/"><img className={'object-cover h-20 w-20 my-2'} src={logo}/></a>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'مدیریت حرکات ورزشی'}</a>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'مدیریت برنامه های ورزشی'}</a>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'ثبت برنامه های ورزشی'}</a>
            <div className={'text-text'}>|</div>
            <div className={'flex items-center cursor-pointer'} href={"/"}>
                            <a className={'px-2 hover:underline'}>{'sinasadeghi0ss0@gmaill.com'}</a>
                            <a><img className={'object-cover h-16 w-16 my-2 rounded-full border-4 border-border hover:border-2 hover:transition-all hover:duration-200 duration-200 ease-linear'}
                            src={profile}/>
                            </a>
                        </div>
        </div>
    )
}
export default Header;