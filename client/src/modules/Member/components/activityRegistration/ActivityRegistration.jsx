import React, {useState, useEffect} from 'react';
import 'jb-date-input';
import {connect} from "react-redux";
import {ActivityRegistrationPopup} from "../../../../actions/popup-action";
import Button from "../../../../shared/button/Button";
import Alert from "../../../../shared/alert/Alert";
import Checkbox from "../../../../shared/checkbox/Checkbox";


// TODO:: خیلی باید کد تمیز تر از اینی که هست بشه
const plans = [
    {
        name: 'برنامه سخت',
        id: 1
    }, {
        name: 'برنامه نرم',
        id: 2
    }, {
        name: 'برنامه آزاد',
        id: 3
    }
]

const plan = [
    {
        name: 'اسکات',
        id: 1,
        sets: 3,
        time: false,
        number: true,
    }, {
        name: 'بارفیکس',
        id: 2,
        sets: 2,
        time: true,
        number: true,
    }, {
        name: 'شنا',
        id: 3,
        sets: 2,
        time: true,
        number: false,
    },
]

const exam = [
    {
        id: 1,
        name: 'اسکات',
        time: true,
        number: true,
    },
    {
        id: 2,
        name: 'بارفیکس',
        time: true,
        number: true,
    },
    {
        id: 3,
        name: 'دو استقامتی',
        time: true,
        number: false
    },
    {
        id: 4,
        name: 'دراز نشست',
        time: false,
        number: true,
    },
    {
        id: 9,
        name: 'دراز نشست',
        time: false,
        number: true,
    },
    {
        id: 8,
        name: 'دراز نشست',
        time: false,
        number: true,
    },
    {
        id: 7,
        name: 'دراز نشست',
        time: false,
        number: true,
    },
    {
        id: 6,
        name: 'دراز نشست',
        time: false,
        number: true,
    },
    {
        id: 5,
        name: 'دراز نشست',
        time: false,
        number: true,
    }
]

const ActivityRegistration = props => {
    const [planId, setPlanId] = useState(null)
    const [selectPlan, setSelectPlan] = useState(false)
    const [values, setValues] = useState([])
    const [showFinishedAlert, setShowFinishedAlert] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [selectedMove, setSelectedMove] = useState([])
    const [numberSet, setNumberSet] = useState( [])



    useEffect(() => {
        if (props.ActivityRegistrationPopup?.activityRegistrationState !== showPopup)
            setShowPopup(props.ActivityRegistrationPopup?.activityRegistrationState)
    },)

    const actionAlert = (i, e) => {
        // if(!i)
        //     history.push('/') todo:: add history.js
    }
    const actionNoPlan = () => {
        setPlanId(null)
        setSelectPlan(true)
    }
    const actionSetPlan = () => {
        if (planId) {
            let value = []
            for (let i of plan) {
                value = [...value, {name: i.name, id: i.id, sets: Array(i.sets).fill(false)}]
                for (let j = 0; j < i.sets; j += 1)
                    value[value.findIndex(k => i.id === k.id)].sets[j] = ['', '', false]
            }
            setValues(value)
            setSelectPlan(true)
        } else
            setSelectPlan(true)
    }

    const changeValuePlan = (value, id, set, timeNumber) => {
        const index = values.findIndex(i => i.id === id)
        values[index].sets[set][timeNumber] = value
        setValues(values)
        // const index = values.findIndex(i => i.id === id)
        // if(timeNumber !== 2) {
        //     values[index].sets[set][timeNumber] = value
        //     values[index].sets[set][2] = true
        // }
        // else if(timeNumber === 2) {
        //     if (values[index].sets[set][timeNumber]){
        //         values[index].sets[set][0] = ''
        //         values[index].sets[set][1] = ''
        //     }
        //
        //     values[index].sets[set][timeNumber] = !values[index].sets[set][timeNumber]
        // }
        // setValues(values)
        // console.log(values)
    }

    const actionFinishedAlert = (state, e = false) => {
        if (!state)
            setShowFinishedAlert(false)
    }

    const actionShowPopup = (state, e = false) => {
        if (e)
            e.stopPropagation();
        props.OnActivityRegistrationPopup(state);
    }

    const addSportMove = item => {
        if (selectedMove.length < 6) {
            setSelectedMove([...selectedMove, item.id])
            setNumberSet([...numberSet, 1])

            setValues([...values, {
                id: item.id,
                sets: [['', '']]
            }])
        } else {
            alert("حداکثر 6 حرکت میتوان انتخاب کرد")
        }
    }
    const removeSportMove = item => {
        setSelectedMove(selectedMove.filter(i => i !== item.id))

        numberSet.splice(selectedMove.indexOf(item.id), 1)
        setNumberSet([...numberSet])

        setValues(values.filter(i => i.id !== item.id))
    }
    const addNumberSet = item => {
        numberSet[selectedMove.indexOf(item.id)] += 1
        setNumberSet([...numberSet])

        const index = values.findIndex(i => i.id === item.id)
        values[index].sets.push(['', ''])
        setValues(values)
    }
    const removeNumberSet = item => {
        numberSet[selectedMove.indexOf(item.id)] -= 1
        setNumberSet([...numberSet])

        const index = values.findIndex(i => i.id === item.id)
        values[index].sets.pop()
        setValues(values)
    }

    return <div className={'w-5/6 md:w-[calc(700px)] m-auto mt-[calc(50vh_-_140px)]'}>
        {!selectPlan && <Alert header={'برنامه خود را انتخاب کنید'} onClick={actionAlert}>
            <div className={'flex'}>{plans.map(i => <span onClick={e => setPlanId(i.id)}
                                                          className={'cursor-pointer mx-4 mt-6 border border-background px-2 py-1 rounded'}>
                {i.name}</span>)}</div>
            <div className={'mt-4'}>
                <span className={'mx-2'}>{'برنامه انتخاب شده'}</span>
                {!!planId &&
                <span className="inline-block w-36 border-b">{plans[plans.findIndex(i => i.id === planId)].name}</span>}
                {!planId && <span className="inline-block w-36 border-b"/>}
            </div>
            <div className={'flex justify-end mx-2'}>
                <span className={'mx-2'}><Button type={'cancel'} onClick={actionNoPlan}>{'بدون برنامه'}</Button></span>
                <span className={'mx-2'}><Button type={planId ? 'ok' : 'disable'}
                                                 onClick={actionSetPlan}>{'تایید برنامه'}</Button></span>
            </div>
        </Alert>}
        <div className={'rounded m-auto border-4 border-third_color bg-third_color'}>
            <i className="fa-light fa-circle-arrow-left float-left ml-3 cursor-pointer text-xl text-background my-1"/>
            <h3 className={'text-center bg-third_color p-1 text-xl text-background'}>{'ثبت فعالیت ها'}</h3>
            {!!selectPlan && <div className="rounded text-background bg-text pt-0.5 py-3">
                {!!planId && <div>
                    <div className={'text-xs mt-2 mr-24 mb-2 text-third_color'}>{'|انجام شد|'}</div>
                    {plan.map(move => {
                        return <div className={'mr-4'}>
                            <span className={'inline-block w-20 truncate'}>{move.name}</span>
                            <div className={'inline-block mr-4'}>
                                <div className={'grid justify-items-center items-center gap-x-3 gap-y-1'}
                                     style={{gridTemplateColumns: '25px 400px'}}>
                                    {[...Array(move.sets)].map((i, index) => {
                                        return <><Checkbox
                                            value={values[values.find(el => el.id === move.id)]?.sets[index][2]}
                                            action={e => changeValuePlan(e.target.value, move.id, index, 2)}/>
                                            <div>
                                                <span
                                                    className={'inline-block mr-1 w-14'}>{'ست '}{index + 1}{' :'}</span>
                                                <input type="text" disabled={move.time ? '' : "disable"}
                                                       onChange={e => changeValuePlan(e.target.value, move.id, index, 0)}
                                                       value={values[values.find(el => el.id === move.id)]?.sets[index][0]}
                                                       title={move.time ? '' : "غیرفعال"}
                                                       className={`border-b-2 focus-visible:outline-0 bg-text w-28 px-2 ml-2 mr-10 ${move.time ? '' : "border-b-third_color"}`}/>
                                                <i className={`fa-light fa-input-numeric ${move.time ? '' : "text-third_color"}`}/>
                                                <input type="text" disabled={move.number ? '' : "disable"}
                                                       onChange={e => changeValuePlan(e.target.value, move.id, index, 1)}
                                                       value={values[values.find(el => el.id === move.id)]?.sets[index][1]}
                                                       title={move.number ? '' : "غیرفعال"}
                                                       className={`border-b-2 focus-visible:outline-0 bg-text w-28 px-2 ml-2 mr-10 ${move.number ? '' : "border-b-third_color"}`}/>
                                                <i className={`fa-light fa-clock ${move.number ? '' : "text-third_color"}`}/>
                                            </div>
                                        </>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={'flex justify-end'}>
                        <div className={'w-28 mx-4 mt-4'} onClick={e => setShowFinishedAlert(true)}>
                            <Button>{'تایید'}</Button>
                        </div>
                    </div>
                </div>}

                {!planId && <div className="rounded text-background bg-text pt-0.5">
                    <i className="fa-light fa-square-plus m-2 cursor-pointer" onClick={e => actionShowPopup(!showPopup, e)}/>
                    <div className={`${showPopup ? '' : 'hidden'} absolute w-40 rounded-sm px-3 text-center bg-third_color`}
                         onClick={e => actionShowPopup(false)}>
                        {exam.map((item) => {
                            if (selectedMove.indexOf(item.id) === -1)
                                return <div className={'py-1 cursor-pointer truncate'}
                                            onClick={e => addSportMove(item)}>{item.name}</div>
                        })}
                    </div>
                    {exam.map((i, ind) => {
                        if (selectedMove.indexOf(i.id) > -1)
                            return <div>
                                <i onClick={e => removeSportMove(i)}
                                   className="fa-light fa-minus cursor-pointer px-2"/>
                                <span className={'inline-block w-20 truncate'}>{i.name}</span>
                                <div className={'inline-block mr-4'}>
                                    <div className={'grid justify-items-center items-center'}
                                         style={{gridTemplateColumns: '25px 400px'}}>
                                        {numberSet[selectedMove.indexOf(i.id)] < 6 && <i onClick={e => addNumberSet(i)}
                                                                  className="fa-light fa-square-plus cursor-pointer"/>}
                                        {numberSet[selectedMove.indexOf(i.id)] < 6 || <span/>}
                                        {[...Array(numberSet[selectedMove.indexOf(i.id)])].map((item, index) => {
                                            return <>
                                                {numberSet[selectedMove.indexOf(i.id)] === index + 1 && index > 0 &&
                                                <i onClick={e => removeNumberSet(i)}
                                                   className="fa-light fa-minus cursor-pointer"/>}
                                                {numberSet[selectedMove.indexOf(i.id)] !== index + 1 && index > 0 && <span/>}
                                                <div>
                                                <span
                                                    className={'inline-block mr-1 w-14'}>{'ست '}{index + 1}{' :'}</span>
                                                    <input type="text" disabled={i.time ? '' : "disable"}
                                                           onChange={e => changeValuePlan(e.target.value, i.id, index, 0)}
                                                           value={values[values.find(el => el.id === i.id)]?.sets[index][0]}
                                                           title={i.time ? '' : "غیرفعال"}
                                                           className={`border-b-2 focus-visible:outline-0 bg-text w-28 px-2 ml-2 mr-10 ${i.time ? '' : "border-b-third_color"}`}/>
                                                    <i className={`fa-light fa-input-numeric ${i.time ? '' : "text-third_color"}`}/>
                                                    <input type="text" disabled={i.number ? '' : "disable"}
                                                           onChange={e => changeValuePlan(e.target.value, i.id, index, 1)}
                                                           value={values[values.find(el => el.id === i.id)]?.sets[index][1]}
                                                           title={i.number ? '' : "غیرفعال"}
                                                           className={`border-b-2 focus-visible:outline-0 bg-text w-28 px-2 ml-2 mr-10 ${i.number ? '' : "border-b-third_color"}`}/>
                                                    <i className={`fa-light fa-clock ${i.number ? '' : "text-third_color"}`}/>
                                                </div>
                                            </>
                                        })}

                                    </div>
                                </div>
                            </div>
                    })}
                    <div className={'flex justify-end'}>
                        <div className={'w-28 mx-4 mt-4'} onClick={e => setShowFinishedAlert(true)}>
                            <Button>{'تایید'}</Button>
                        </div>
                    </div>
                </div>}


            </div>}
        </div>

        {!!showFinishedAlert && <Alert header={'انتخاب روز'} onClick={actionFinishedAlert} top={'top-64'}>
            <div className={'text-text-background mr-6'}>
                <span className={'ml-6'}>{'تاریخ روز'}</span>
                <span className={'inline-block'}>
                    <jb-date-input/>
                </span>
                <div className={'flex justify-end'}>
                    <div className={'w-28 mx-4 mt-4'} onClick={e => actionFinishedAlert(false)}>
                        <Button type={'cancel'}>{'انصراف'}</Button>
                    </div>
                    <div className={'w-28 mx-4 mt-4'}>
                        <Button>{'تایید'}</Button>
                    </div>
                </div>
            </div>
        </Alert>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        ActivityRegistrationPopup: state.popupReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    OnActivityRegistrationPopup: (state) => dispatch(ActivityRegistrationPopup(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ActivityRegistration);
