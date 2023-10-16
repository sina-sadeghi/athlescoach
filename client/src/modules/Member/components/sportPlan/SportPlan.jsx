import React, {useState, useEffect} from 'react';
import 'jb-date-input';
import {connect} from "react-redux";
import {SportPlanPopup} from "../../../../actions/popup-action";
import {SportPlanAlert} from "../../../../actions/alert-action";
import Button from "../../../../shared/button/Button";
import Alert from "../../../../shared/alert/Alert";
import Filed from "../../../../shared/filed/Filed";
import Checkbox from "../../../../shared/checkbox/Checkbox";
import week from '../../../../core/utils/week';
// import {withRouter} from "react-router-dom"; todo::redux


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

const SportPlan = props => {

    const [showPopup, setShowPopup] = useState(true)
    const [numberSet, setNumberSet] = useState( [])
    const [selectedMove, setSelectedMove] = useState([])
    const [values, setValues] = useState([])

    const [showAlert, setShowAlert] = useState(false)
    const [namePlan, setNamePlan] = useState('')
    const [daysPlan, setDaysPlan] = useState([false, false, false, false, false, false, false])
    const [expirationPlan, setExpirationPlan] = useState('')

    useEffect((() => {
        if (props.sportPlanPopup?.sportPlanState !== showPopup)
            setShowPopup(props.sportPlanPopup.sportPlanState)

        if (props.sportPlanAlert.sportPlanState !== showAlert)
            setShowAlert(props.sportPlanAlert.sportPlanState)
    }),)

    const actionShowPopup = (state, e = false) => {
        if (e)
            e.stopPropagation();
        props.OnSportPlanPopup(state);
    }

    const showAlertFinal = (state, e = false) => {
        if (e)
            e.stopPropagation();
        props.OnSportPlanAlert(state)
    }

    const addNumberSet = item => {
        setNumberSet(numberSet.concat([0]))
        editNumberSet(item, 'total')

        const index = values.findIndex(i => i.id === item.id)
        values[index].sets.push(['', ''])
        setValues(values)
    }
    const removeNumberSet = item => {
        setNumberSet(numberSet.slice(0, -1))
        editNumberSet(item, 'minus')

        const index = values.findIndex(i => i.id === item.id)
        values[index].sets.pop()
        setValues(values)
    }
    const addSportMove = item => {
        if (selectedMove.length < 6) {
            setSelectedMove([...selectedMove, item.id])
            editNumberSet(item, 1)

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
        editNumberSet(item, 0)
        setValues(values.filter(i => i.id !== item.id))
    }

    const editNumberSet = (item, type) => {
        const index = exam.findIndex(i => i.id === item.id)
        switch (type) {
            case 0:
                numberSet[index] = 0
                break;
            case 1:
                numberSet[index] = 1
                break;
            case 'total':
                numberSet[index] += 1
                break;
            case 'minus':
                numberSet[index] -= 1
        }
        setNumberSet(numberSet)
    }

    const changeValue = (value, id, set, timeNumber) => {
        const index = values.findIndex(i => i.id === id)
        values[index].sets[set][timeNumber] = value
        setValues(values)
    }

    const changeNamePlan = e => {
        setNamePlan(e.target.value)
    }
    const changeDaysPlan = index => {
        daysPlan[index] = !daysPlan[index]
        setDaysPlan(daysPlan)
    }
    const changeExpirationPlan = e => {
        setExpirationPlan(e.target.value)
        setExpirationPlan(e)
        setExpirationPlan('e')
    }

    return <div className={'w-5/6 md:w-[calc(700px)] m-auto mt-[calc(50vh_-_140px)]'}>

        {showAlert && <Alert header={'ثبت برنامه ورزشی'} top={'top-64'} onClick={showAlertFinal}>
            <div className={'text-text-background my-4 mr-6'}>
                <span className={'ml-6'}>{'نام برنامه ورزشی:'}</span>
                <input className={'border-b-2 focus-visible:outline-0 bg-text'} dir={'auto'} value={namePlan}
                       onChange={e => changeNamePlan(e)}/>
            </div>

            <div className={'flex flex-wrap items-center my-6'}>
                <div className={'mr-6'}>{'چه روزهایی از هفته'}</div>

                <div className={'flex justify-evenly w-4/6 text-center mx-auto'}>
                    {week.map((day, index) => {
                        return <div>
                            <Checkbox value={daysPlan[index]} action={e => changeDaysPlan(index)}/>
                            <div>{day}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className={'text-text-background my-4 mr-6'}>
                <span className={'ml-6'}>{'تاریخ انقضا:'}</span>
                <span className={'inline-block'}>
                    <jb-date-input/>
                </span>
            </div>

            <div className={'w-28 mx-6 mt-4'}><Button>{'تایید'}</Button></div>
        </Alert>}

        <div className={'rounded m-auto border-4 border-third_color bg-third_color'}>
            <i className="fa-light fa-circle-arrow-left float-left ml-3 cursor-pointer text-xl text-background my-1"/>
            <h3 className={'text-center bg-third_color p-1 text-xl text-background'}>{'برنامه ورزشی'}</h3>
            <div className="rounded text-background bg-text pt-0.5 py-3">
                <i className="fa-light fa-square-plus m-2 cursor-pointer"
                   onClick={e => actionShowPopup(!showPopup, e)}/>
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
                                    {numberSet[ind] < 6 && <i onClick={e => addNumberSet(i)}
                                                              className="fa-light fa-square-plus cursor-pointer"/>}
                                    {numberSet[ind] < 6 || <span/>}

                                    {[...Array(numberSet[ind])].map((item, index) => {
                                        return <>
                                            {numberSet[ind] === index + 1 && index > 0 &&
                                            <i onClick={e => removeNumberSet(i)}
                                               className="fa-light fa-minus cursor-pointer"/>}
                                            {numberSet[ind] !== index + 1 && index > 0 && <span/>}
                                            <div>
                                                <span
                                                    className={'inline-block mr-1 w-14'}>{'ست '}{index + 1}{' :'}</span>
                                                <input type="text" disabled={i.time ? '' : "disable"}
                                                       onChange={e => changeValue(e.target.value, i.id, index, 0)}
                                                       value={values[values.find(el => el.id === i.id)]?.sets[index][0]}
                                                       title={i.time ? '' : "غیرفعال"}
                                                       className={`border-b-2 focus-visible:outline-0 bg-text w-28 px-2 ml-2 mr-10 ${i.time ? '' : "border-b-third_color"}`}/>
                                                <i className={`fa-light fa-input-numeric ${i.time ? '' : "text-third_color"}`}/>
                                                <input type="text" disabled={i.number ? '' : "disable"}
                                                       onChange={e => changeValue(e.target.value, i.id, index, 1)}
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
                <div className={'w-28 mx-4 mt-4'}><Button type={values.length > 0 ? 'ok' : 'disable'}
                                                          onClick={e => showAlertFinal(true, e)}>{'تایید'}</Button>
                </div>
            </div>
        </div>
    </div>
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

// export default SportPlan;
export default connect(mapStateToProps, mapDispatchToProps)(SportPlan);
