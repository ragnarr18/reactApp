import React from 'react';
import SingleRegion from './SingleRegion';
import RegionForm from './RegionForm';
class RegionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'Region does not exist', dates: '', dateIndexA: 0, dateIndexB: 1, dataAvailable: false, dataA: "", dataB:""};
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
        console.log("this is the regionName: " + regionName);
        console.log("starting to fetch");
        const data = await fetch("/region" + "/" + regionName);
        console.log("the data: ", data);
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
            this.state.dateIndexA +=1;
            let newIndex = this.state.dateIndexA;
            this.getDateA();
            this.setState({dateIndexA: newIndex})
            // console.log("the state inleftbutton: " + this.state)
        }
        return;
    }

    rightButtonA(){
        if(this.state.dateIndexA > 0 && this.state.dateIndexA < this.state.dateIndexB){
            this.state.dateIndexA -= 1;
            let newIndex = this.state.dateIndexA;
            this.getDateA()
            this.setState({dateIndexA: newIndex})
        }
        return;
    }

    leftButtonB(){
        let len = Object.keys(this.state.dates).length;
        if (this.state.dateIndexB < len){
            this.state.dateIndexB += 1
            let newIndex = this.state.dateIndexB;
            this.getDateB() 
            this.setState({dateIndexB: newIndex})
        }
        return;
    }

    rightButtonB(){
        if (this.state.dateIndexB -1 > this.state.dateIndexA) {
            this.state.dateIndexB -=1;
            let newIndex = this.state.dateIndexB;
            this.getDateB();
            this.setState({dateIndexB: newIndex})
        }
        return;
    }

render (){
    return(
        <div>
            {/* <h1>My reagion search page</h1> */}
            <div id="regionData">
            <h1 style={{ textTransform: 'uppercase'}} >{this.state.value}</h1>
                {/* {console.log("region: " + this.state.value)} */}
                {/* {this.state.value} */}
                {this.state.dataAvailable ?
                    
                    <div className="RegionContainer">
                    <div className="mainDataInfo">
                        graphs and data go here 
                    </div>

                    <div className="SingleRegionBundle">
                    <div className="SingleRegionContainer">
                        <SingleRegion ref={this.SingleRegionaA} date={this.state.dataA}></SingleRegion>
                        {/* <SingleRegion ref={this.SingleRegionaA} dates={this.state.dates} position={this.state.dateIndexA}></SingleRegion> */}
                        <button onClick={this.leftButtonA.bind(this)}>Day before</button>
                        <button onClick={this.rightButtonA.bind(this)}>Day after</button>
                    </div>

                    <div className="SingleRegionContainer">
                        {/* <SingleRegion ref={this.SingleRegionaB} dates={this.state.dates} position={this.state.dateIndexB}></SingleRegion> */}
                        <SingleRegion ref={this.SingleRegionaB} date={this.state.dataB}></SingleRegion>
                        <button onClick={this.leftButtonB.bind(this)}>Day before</button>
                        <button onClick={this.rightButtonB.bind(this)}>Day after</button>
                    </div>
                    </div>
                </div> 
                : <div>
                        <div className="ErrorMsg">{this.state.errorMsg}
                        </div><RegionForm></RegionForm>
                    </div>
                }
            </div>
        </div>
        );
}
}

export default RegionSearch;