import React, {useState, useEffect} from 'react';
import Alert from "../../../../shared/alert/Alert";
import Checkbox from "../../../../shared/checkbox/Checkbox";
import Button from "../../../../shared/button/Button";
import {SportPlanAlert} from "../../../../actions/alert-action";
import {connect} from "react-redux";


const moves = [
    {
        id: 1,
        name: 'بارفیکس',
        time: false,
        number: true,
        describe: 'آویزون شدن از میله با دستان و بالا پایین شدن سبنذلتسبمترنیسگحبکت بیجکمتزکزمئ  یب اسیبم',
    }, {
        id: 2,
        name: 'اسکات',
        time: true,
        number: true,
        describe: '',
    }, {
        id: 3,
        name: 'دراز نشست',
        time: true,
        number: true,
        describe: 'نشستن و دراز کشیدن ممتد',
    }, {
        id: 4,
        name: 'دو استقامت',
        time: true,
        number: false,
        describe: '',
    }, {
        id: 5,
        name: 'شنا',
        time: false,
        number: true,
        describe: '',
    },
]

const SportMoveList = props => {
    const [editId, setEditId] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [name, setName] = useState('')
    const [time, setTime] = useState(true)
    const [number, setNumber] = useState(true)
    const [describe, setDescribe] = useState('')

    useEffect((() => {
        if (props.sportPlanAlert.sportPlanState !== showAlert)
            setShowAlert(props.sportPlanAlert.sportPlanState)
    }),)

    const editMove = item => {
        setEditId(item.id)
        setName(item.name)
        setTime(item.time)
        setNumber(item.number)
        setDescribe(item.describe)
    }

    const actionShowAlert = e => {
        e.stopPropagation();
        props.OnSportPlanAlert(true)
    }

    return <div className={'w-4/6 mx-auto my-8'}>
        {showAlert && <Alert header={'show'} top={'top-1/3'}>HI</Alert>}
        {moves.map(i => {
            return <div className={'my-1'}>
                <div
                    className={'flex justify-between items-center py-4 px-4 text-lg text-white b-Cyan-400 bg-third_color rounded-full'}>
                    <span className={'w-24 truncate text-lg'}>{i.name}</span>
                    <span>{i.time && <i className="fa-regular fa-check text-green-400 mx-1"/>}{!i.time &&
                    <i className="fa-regular fa-xmark text-red-500 mx-1"/>}{'ثبت زمان'}</span>
                    <span>{i.number && <i className={'fa-regular fa-check text-green-400 mx-1'}/>}{!i.number &&
                    <i className="fa-regular fa-xmark text-red-500 mx-1"/>}{'ثبت تعداد'}</span>
                    <span className={'w-2/6 truncate'}>{i.describe}</span>
                    <span className={'flex'}><i
                        className="fa-light fa-pen mx-1 text-sm text-blue-700 bg-slate-300 border border-blue-700 rounded-full px-2.5 py-2 cursor-pointer hover:bg-white"
                        title={'ویرایش'} onClick={e => editMove(i)}/><i
                        className="fa-regular fa-trash text-base mr-1 text-red-800 bg-red-500 border border-red-800 rounded-full px-2.5 py-2 cursor-pointer hover:text-white"
                        title={'حذف'} onClick={actionShowAlert}/></span>
                </div>
                {editId === i.id && <div
                    className={'w-11/12 border-2 border-slate-400 border-t-0 bg-slate-200 rounded-b px-2 pt-4 m-auto'}>{
                    <div>
                        <div className="flex">
                            <div className={'w-2/4'}><span className={'ml-4'}>{'نام'}</span>
                                <input type={props.type} className={'border-b-2 focus-visible:outline-0 bg-transparent'}
                                       value={name} onChange={e => setName(e.target.value)} dir={'right'}/></div>
                            <div className={'mx-2'}>
                                <Checkbox value={time} action={e => setTime(!time)}/><span
                                className={'mx-1'}>{'زمان'}</span></div>
                            <div>
                                <Checkbox value={number} action={e => setNumber(!number)}/><span
                                className={'mx-1'}>{'تعداد'}</span></div>
                        </div>
                        <div className={'mt-4 mr-2 mb-1'}>{'شرح'}</div>
                        <textarea className={'bg-slate-400 w-full rounded h-28 resize-none'} value={describe}
                                  onChange={e => setDescribe(e.target.value)}/>
                        <div className={'mb-2 text-left '}>
                            <div className="inline-block w-28"><Button type={'cancel'}>{'انصراف'}</Button></div>
                            <div className="inline-block w-28 mr-4"><Button type={'ok'}>{'تایید'}</Button></div>
                        </div>
                    </div>}</div>}
            </div>
        })}
        <div
            className={'w-52 py-3 px-3 my-2 text-lg text-white b-Cyan-400 bg-third_color rounded-full cursor-pointer hover:text-black'}>
            <i className="fa-regular fa-square-plus mx-2 cursor-pointer"/>
            <span>{'افرودن حرکت ورزشی'}</span>
        </div>
    </div>
}


const mapStateToProps = (state) => {
    return {
        sportPlanAlert: state.alertReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    OnSportPlanAlert: (state) => dispatch(SportPlanAlert(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportMoveList);
