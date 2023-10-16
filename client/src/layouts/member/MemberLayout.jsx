import React from 'react';
import Header from '../../modules/Member/components/header/Header';
import Footer from "../../modules/Member/components/footer/Footer";
import {connect} from "react-redux";
import {SportPlanPopup} from "../../actions/popup-action";
import {SportPlanAlert} from "../../actions/alert-action";
// import {withRouter} from "react-router-dom";

const MemberLayout = (props) => {

    const actionClickBody = () => {
        props.OnSportPlanPopup(false);
        props.OnSportPlanAlert(false);
    }


    return (
        <div onClick={actionClickBody}>
            {props.header && <Header/>}
            {props.header && <div className={'w-full h-20'}/>}
            <main>
                {props.children}
            </main>
            {props.footer && <Footer/>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        sportPlanPopup: state.popupReducer,
        sportPlanAlert: state.alertReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    OnSportPlanPopup: (state) => dispatch(SportPlanPopup(state)),
    OnSportPlanAlert: (state) => dispatch(SportPlanAlert(state)),
});

// export default MemberLayout;
export default connect(mapStateToProps, mapDispatchToProps)(MemberLayout);
