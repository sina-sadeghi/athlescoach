// import './header.scss';
import React from 'react';
import profile from '../../../../assets/images/profile.jpg';
import Button from "../../../../shared/button/Button";
// import logo from '../../../../assets/image/logo.png';
// import Image from "../../../../shared/image/Image";

const Header = () => {
    return (
        <div className={'bg-third_color fixed top-0 w-full h-20 flex justify-around items-center text-background px-8 z-10'}>
            <div className={'flex items-center cursor-pointer'} href={"/"}>
                <a><img className={'object-cover h-16 w-16 my-2 rounded-full border-4 border-border hover:border-2 hover:transition-all hover:duration-200 duration-200 ease-linear'}
                src={profile}/>
                </a>
                <a className={'px-2 hover:underline'}>{'sinasadeghi0ss0@gmaill.com'}</a>
            </div>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'آرشیو'}</a>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'حرکت ها'}</a>
            <div className={'text-text'}>|</div>
            <a href="/" className={'hover:underline'}>{'ثبت گزارش'}</a>
        </div>
    )
}
export default Header;