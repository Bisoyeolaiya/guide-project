import React, { Component } from 'react';
import  * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options = {
    series: [{
        name: 'Profit',
        data: [100, 200, 300, 350, 380, 400, 430]
    }]
}


class Appone extends Component {
    render() {
        return (
            <div className="Chartapp">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }

}

export default Appone;