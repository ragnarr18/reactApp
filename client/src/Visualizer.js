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
        const {data} = this.props;
        let currentDate = Object.keys(data)[0];
        let total_cases = [];
        let total_deaths = [];
        console.log(Object.keys(data));
        for (let index = 0; index < Object.keys(data).length; index++) {
            total_cases[index] = data[Object.keys(data).reverse()[index]]["total_cases"];
            total_deaths[index] = data[Object.keys(data).reverse()[index]]["deaths"];
            
            
        }
        let currentData = data[currentDate];
        console.log("the dates", currentData);
        console.log("total cases", total_cases);
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                // labels: ["Jan", "Feb"],
                labels: Object.keys(data).reverse(),
                datasets: [
                    {
                        label: "Total cases of covid 19",
                        data: total_cases,
                        
                    },

                    {
                        label: "Total deaths related to covid 19",
                        data: total_deaths,
                    }
                ]
            },
            options: {
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