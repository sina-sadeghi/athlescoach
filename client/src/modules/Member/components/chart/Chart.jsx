import React, {useEffect} from 'react';
import {Chart, initTE,} from "tw-elements";
initTE({Chart});


const dataLine = {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
        datasets: [
            {
                label: 'Traffic',
                data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                backgroundColor: "rgba(235,0,0, 0.2)",
                borderColor: "rgba(235,0,0, 0.2)",
            },
        ],
    },
};

const ChartPage = props => {
    useEffect(() => {
        new Chart(document.getElementById('line-chart'), dataLine);
    },)

    return <div className="mx-auto w-3/5 overflow-hidden">
        <canvas id="line-chart" className={''}/>
    </div>
}
export default ChartPage;