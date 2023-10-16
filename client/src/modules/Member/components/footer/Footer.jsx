import React from 'react';
import {Link} from "react-router-dom";
// import './footer.scss';

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
        </div>
    );
}
export default Footer;