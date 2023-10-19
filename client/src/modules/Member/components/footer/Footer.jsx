import React from 'react';
import {Link} from "react-router-dom";
// import './footer.scss';

const aboutUs = "با خوشحالی \"تن ساز\" را به شما معرفی می‌کنیم، همراه فعال و وفادار در سفر به بهترین ورزش زندگی‌تان. \"تن ساز\" با ارائه یک دستیار هوشمند و یکپارچه، به شما این امکان را می‌دهد که برنامه‌های ورزشی شخصی خود را بدون استفاده از ماشین لرنینگ، به‌روزرسانی و مدیریت کنید. با تاکید بر شخصی‌سازی بالا، این برند به شما ابزارها و منابعی پیشرفته ارائه می‌دهد تا تجربه ورزشی شما به یک سطح جدید ارتقا یابد. از اطلاعات شخصی شما با امانت حفاظت می‌کنیم تا شما با اعتماد به \"تن ساز\"، به بهبود فیزیکی و روحی خود بپردازید. به \"تن ساز\" بپیوندید و باور کنید که بهترین نسخه از خود را ارائه می‌دهید."
const connectUs = [
    {link: "https://instagram.com/sin_sad_79", className: 'fa-brands fa-instagram'},
    {link: "https://t.me/sin_sad_79", className: 'fa-brands fa-telegram'},
    {link: "https://twitter.com/sin_sad_79", className: 'fa-brands fa-twitter'},
    {link: "https://github.com/sina-sadeghi", className: 'fa-brands fa-github'},
    {link: "https://www.linkedin.com/in/sina-sadeghi79", className: 'fa-brands fa-linkedin'},
    {link: "https://www.facebook.com/profile.php?id=100091972094555&mibextid=ZbWKwL", className: 'fa-brands fa-facebook'},
]
const Footer = () => {
    return (
        <div className={'bg-slate-200 mt-36'}>
            <ul className={'mb-8'}>
                <li className={'m-2 border'}><Link to={'/sign-up'}>{'SignUp'}</Link></li>
                <li className={'m-2 border'}><Link to={'/login'}>{'Login'}</Link></li>
                <li className={'m-2 border'}><Link to={'/profile'}>{'Profile'}</Link></li>
                <li className={'m-2 border'}><Link to={'/sport-plan'}>{'SportPlan'}</Link></li>
                <li className={'m-2 border'}><Link to={'/sport-moves'}>{'SportMoveList'}</Link></li>
                <li className={'m-2 border'}><Link to={'/activity-registration'}>{'activityRegistration'}</Link></li>
            </ul>
            <div className={'bg-text text-background flex justify-items-center py-6'}>
                <div className={'w-4/6'}>
                    <p className={'mx-2 mb-4 text-3xl'}>{'درباره ما'}</p>
                    <p className={'mx-2 text-base'}>{aboutUs}</p>
                </div>
                <div className={'mr-6'}>
                    <div className={'flex items-center gap-8 mb-4'}>
                        <p className={'text-3xl'}>{'ارتباط با ما'}</p>
                        <div className={'flex gap-x-6'}>
                            {connectUs.map(item => {
                                return <a href={item.link} title={'sin_sad_79'} target={'_blank'}>
                                    <i className={`${item.className} text-xl opacity-70 hover:opacity-90`}/>
                                </a>
                            })}
                        </div>
                    </div>
                    <div className={'flex gap-10 my-2'}>
                        <p className={'text-lg'}>{'آدرس'}</p>
                        <p className={'text-slate-400'}>{'مشهد - خیابان راهنمایی - راهنمایی 22'}</p>
                    </div>
                    <div className={'flex gap-10 my-2'}>
                        <p className={'text-lg'}>{'ایمیل'}</p>
                        <p className={'text-slate-400'}>{'sinasadeghi0ss0@gmail.com'}</p>
                    </div>
                    <div className={'flex gap-10 my-2'}>
                        <p className={'text-lg'}>{'تلفن همراه'}</p>
                        <p className={'text-slate-400'}>{'09152822484'}</p>
                    </div>
                    <div className={'flex justify-start gap-10 w-full inline-block'}>
                        <a href="/" className={'text-xl underline hover:no-underline'}>{'پرسش های متداول'}</a>
                        <a href="/" className={'text-xl underline hover:no-underline'}>{'راهنمای سایت'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;