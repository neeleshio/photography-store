import React from 'react'
import { Line } from 'react-chartjs-2'

function Charts() {
    const data = {
        labels: [
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20',
            'Jan 20'

        ],
        datasets: [
            {
                label: 'Your  Activity',
                data: [100, 200, 220, 210, 200, 210, 220, 230, 210, 220, 230, 220],
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#9591de',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Your  Activity'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 300,
                        stepSize: 50
                    }
                }
            ]
        }
    }

    return <Line data={data} options={options} width={100}
        height={300}
        options={{ maintainAspectRatio: false }} />
}


export default Charts