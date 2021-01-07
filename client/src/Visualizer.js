import React from 'react';
import Chart from 'chart.js';

var link = 'https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a'
class Visualizer extends React.Component{
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render(){
        const { data, title, color } = this.props;
        return( 
            <canvas ref={this.chartRef}/>
        )
    }
}
export default Visualizer;