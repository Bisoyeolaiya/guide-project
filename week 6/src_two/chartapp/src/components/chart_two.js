import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    series: [{
        name: 'Loss',
        data: [80, 60, 50, 40, 30, 20, 10]
    }]
}


class Apptwo extends Component {
    render() {
        return (
            <div className="Chartapp">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }


}

export default Apptwo;