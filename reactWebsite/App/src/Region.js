import React from 'react';
import SingleRegion from './SingleRegion';
class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dates: '', dateIndexA: 0, dateIndexB: 1, dataAvailable: false, dataA: "", dataB:""};
        this.SingleRegionaA = React.createRef();
        this.SingleRegionaB = React.createRef();
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        this.state.value = query.get("region")
        // console.log("this is the state value: " + this.state.value)
        // this.callAPI.bind(this);
        
        this.callAPI(this.state.value)
        // function (data){
            // this.setState(data);
            // return;
        //}
        //)
    }


    async callAPI(regionName) {
        //this.callback.bind(this)
        console.log("this is the regionName: " + regionName);
        console.log("starting to fetch");
        const data = await fetch("http://localhost:9000/testAPI/region" + "/" + regionName);
        console.log("this is the REGION: " + regionName);
        const dates = await data.json();
        if (data.status >= 400){
            this.setState({errorMsg: dates.message})
            //callback(this.state.value)
            return;
        }
        this.state.dates = dates
        await this.getDateA()
        await this.getDateB() 
        // this.state.dates = dates
        // this.state.dataAvailable = true
        this.setState({dataAvailable: true})
        console.log("this is the state: " +  this.state)
        //callback({value: dates, dataAvailable: true })
        return;
    }

    async getDateA (){
        let dates = this.state.dates
        let currentDate = Object.keys(dates)[this.state.dateIndexA];
        let currentData = this.state.dates[currentDate];
        currentData.date = currentDate
        this.state.dataA = currentData
        console.log("currentDataA: " + currentData)
        return;
    }
    
    async getDateB (){
        let dates = this.state.dates
        let currentDate = Object.keys(dates)[this.state.dateIndexB];
        let currentData = this.state.dates[currentDate];
        currentData.date = currentDate;
        this.state.dataB = currentData;
        return;
    }

    leftButtonA(){
        if (this.state.dateIndexA + 1 < this.state.dateIndexB){
            this.setState({dateIndexA: this.state.dateIndexA +1})
        }
    }

    rightButtonA(){
        if(this.state.dateIndexA > 0 & this.state.dateIndexA < this.state.dateIndexB)
        this.setState({dateIndexA:  this.state.dateIndexA -=1})
        // console.log("this is the state of the region: " + this.state)
        
    }

    leftButtonB(){
        let len = Object.keys(this.state.dates).length;
        if (this.state.dateIndexB < len){
            this.setState({dateIndexB: this.state.dateIndexB +1})
        }
        
    }

    rightButtonB(){
        
        if (this.state.dateIndexB -1 > this.state.dateIndexA)
        this.setState({dateIndexB: this.state.dateIndexB -1})
    }

render (){
    return(
        <div>
            <h1>My reagion search page</h1>
            <div id="regionData">
                {/* {console.log("region: " + this.state.value)} */}
                {/* {this.state.value} */}
                {this.state.dataAvailable ? 
                    <div className="bundle">
                    <div>
                    <SingleRegion ref={this.SingleRegionaA} date={this.state.dataA}></SingleRegion>
                    {/* <SingleRegion ref={this.SingleRegionaA} dates={this.state.dates} position={this.state.dateIndexA}></SingleRegion> */}
                    <button onClick={this.leftButtonA.bind(this)}>Day before</button>
                    <button onClick={this.rightButtonA.bind(this)}>Day after</button>
                    </div>

                    <div>
                    
                    {/* <SingleRegion ref={this.SingleRegionaB} dates={this.state.dates} position={this.state.dateIndexB}></SingleRegion> */}
                    <button onClick={this.leftButtonB.bind(this)}>Day before</button>
                    <button onClick={this.rightButtonB.bind(this)}>Day after</button>
                    </div>
                </div> 
                : <div className="ErrorMsg">{this.state.errorMsg}</div>
                }
            </div>
        </div>
        );
}
}

export default Region;