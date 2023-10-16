import React, {useEffect} from 'react';
import week from '../../../../core/utils/week';
import {Chart, initTE,} from "tw-elements";
import {Link} from "react-router-dom";

initTE({Chart});


const dataLine = {
    type: 'line',
    data: {
        labels: week,
        datasets: [
            {
                label: 'تعداد ست کل',
                data: [7, 15, 10, 12, 4, 10, 13],
                // backgroundColor: "rgba(235,0,0, 0.2)",
                // borderColor: "rgba(235,0,0, 0.2)",
            },{
                label: 'تعداد ست بارفیکس',
                data: [4, 5, 5, 5, 2, 3, 5],
                backgroundColor: "#e62828",
                borderColor: "#e62828",
            },{
                label: 'تعداد ست اسکات',
                data: [1, 2, 1, 2, 0, 0, 2],
                backgroundColor: "#ecea15",
                borderColor: "#ecea15",
            },
        ],
    },
};

const statusCodePlans = {
    0: 'شروع نشده',
    1: 'ناقص',
    2: 'انجام شده'
}

const statusMarksPlans = {
    0: 'xmark',
    1: 'exclamation',
    2: 'check'
}
const statusColorPlans = {
    0: 'red',
    1: 'yellow',
    2: 'green'
}

const plans = [
    {
        id: 1,
        name: 'برنامه روزهای زوج',
        status: 2,
    }, {
        id: 1,
        name: 'برنامه ورزش های های هوازی',
        status: 1
    }, {
        id: 1,
        name: 'برنامه ورزش صبحگاهی',
        status: 0
    },
]

const Home = props => {
    useEffect(() => {
        new Chart(document.getElementById('line-chart'), dataLine);
    },)

    return <div>
        <div className={'mb-2 mt-4 mr-2'}>
            <span className={'text-xl text-bold mx-2'}>{'سینا صادقی '}</span>
            <span className={'text-xs'}>{'(تاریخ عضویت: '}{'31 شهریور 1401)'}</span>
        </div>
        <div className={'flex'}>
            <div className="w-3/5 overflow-hidden text-center pb-2">
                <canvas id="line-chart" width={550} height={200}/>
                <div className={'m-auto inline-block'}>
                    <div className={'inline-block rounded-full border-2 px-2 py-1 mx-0.5 border-third_color cursor-pointer'}>{'ماهانه'}</div>
                    <div className={'inline-block rounded-full border-2 px-2 py-1 mx-0.5 border-third_color bg-blue-100 cursor-pointer'}>{'هفتگی'}</div>
                </div>
            </div>
            <div className={'grid grid-cols-2 justify-center mt-8 mr-4 w-2/5'}>
                <div className="text-xl text-bold text-orange-500">
                    <span className={'underline text-xl text-bold'} style={{fontWeight: 'bold'}}>{'16'}</span>
                    {' روز تا مسابقات '}
                    <i className="fa-sharp fa-regular fa-calendar-days"/>
                </div>
                <div>
                    <Link to={''} className={'text-lg text-yellow-400 underline'}>
                        {'2 روز تا مدال توالی ورزش'}
                        <i className="fa-solid fa-trophy-star"/>
                    </Link>
                </div>
                <div className={'text-green-400'}>
                    {'وزن فعلی:'}
                    <input type="text" value={56}
                           className={`text-center border-b-2 focus-visible:outline-0 w-6 mx-1 border-b-third_color`}/>
                    {'kg '}
                    <i className="fa-regular fa-weight-scale vertical-middle"/>
                </div>
                <div className={'text-blue-400'}>
                    {'میزان نوشیدن آب امروز:'}
                    <input type="text"
                           className={`text-center border-b-2 focus-visible:outline-0 w-6 mx-1 border-b-third_color`}/>
                    <i className="fa-regular fa-glass"/>
                </div>
                <div className={'text-orange-300'}>
                    {'میزان کالری ورودی امروز:'}
                    <input type="text"
                           className={`text-center border-b-2 focus-visible:outline-0 w-6 mx-1 border-b-third_color`}/>
                    {'کیلوکالری'}
                </div>
            </div>
        </div>
        <div className={'flex items-center'}>
            <table className={'w-3/5 mt-4'}>
                <tr>
                    <th className={'text-lg text-bold border-2 border-third_color py-2'}>{'برنامه های امروز'}</th>
                    <th className={'text-lg text-bold border-2 border-third_color py-2'}>{'وضعیت'}</th>
                    <th className={'border-2 border-third_color text-sm text-bold'}>{'ثبت/ویرایش فعالیت'}</th>
                </tr>
                {plans.map(i => {
                    return <tr>
                        <th className={'border-2 border-third_color py-2'}>{i.name}</th>
                        <th className={`text-${statusColorPlans[i.status]}-400 border-2 border-third_color py-2`}>
                            {statusCodePlans[i.status]}<i className={`fa-regular fa-${statusMarksPlans[i.status]} mr-1`}/>
                        </th>
                        <th className={'border-2 border-third_color py-2'}>
                            <Link to={'/activity-registration'} className={'text-xs underline'}>
                                {i.status === 2 ? 'ویرایش' : 'ثبت'}
                                {' فعالیت'}</Link>
                        </th>
                    </tr>
                })}
            </table>
            <div className={'mx-auto border-2 border-third_color rounded py-2'}>
                <div className={'py-1 mx-2'}>{'آخرین نظر مربی در مورد شما:'}</div>
                <div className={'py-1 px-2 rounded-full mx-4 bg-blue-300'}>{'تا یک هفته رو همین برنامه ها پیش برو'}</div>
            </div>
        </div>
    </div>
}
export default Home;