import React, {useState} from "react";
// import { Redirect} from "react-router-dom";
import MemberLayout from '../layouts/member/MemberLayout';
// import Loading from '../shared/loading/Loading';
// import Alert from "../shared/alert/Alert";

export default (props) => {

    const [loading, setLoading] = useState(false)

    // TODO: پس از اتمام storage =>
    // اگر لوگین بود به فحه ی لوگین و ثبت نام دسترسی نداشته باشد
    // redirect to home

    return (
        <div className={''}>
            <MemberLayout {...props}>
                {/*{!!loading && <Loading/>}*/}
                {/*<Alert/>*/}
                <props.Component loading = {state => setLoading(state)}/>
            </MemberLayout>
        </div>
    )
}