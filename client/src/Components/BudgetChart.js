import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['Clothing', 'Donations', 'Collectibles'],
    datasets: [
        {
            label: 'Budget',
            backgroundColor: [
                '#53599a',
                '#cadce4',
                '#c1eeff',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#63668f',
                '#cadce3',
                '#93bfcf',
                '#003350',
                '#35014F'
            ],
            data: [650, 190, 800]
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div>

                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Budget per month',
                            fontSize: 30,
                            fontFamily: "'Nunito', sans-serif"
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            fontSize: 50,
                            usePointStyle: true,
                            boxWidth: 180

                        },
                    }}
                />
            </div>
        );
    }
}