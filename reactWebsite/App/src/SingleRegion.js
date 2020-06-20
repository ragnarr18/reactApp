import React from 'react';

class SingleRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: "", currentData: "", currentPosition: this.props.position}
        // this.clickLeft = this.clickLeft.bind(this);
    }

    componentDidMount(){    	
        this.setUpDate();
    }

    setUpDate(){
        let date = this.props.date
        console.log("this is the single date: " , this.props.date)
        //let currentDate = Object.keys(dates)[this.props.position];
        //let currentData = dates[currentDate];
        
        let currentDate = date.date
        delete date["date"];
        let currentData = date
        let deaths = currentData["deaths"];
        console.log("the deaths: " + deaths)
        // currentData = JSON.stringify(currentData)
        this.setState({currentDate: currentDate, currentData: currentData, deaths: deaths})
    }

    componentDidUpdate(prevProps){
        if (prevProps.date.date != this.props.date.date){
            this.setUpDate()
        }
    }

    constructDataBox(){
        let objLen = Object.keys(this.state.currentData).length
        let retValue = document.getElementById("dataBox")
        var i;
        for (i = 0; i < objLen; i++) {
            
            let theKey = Object.keys(this.state.currentData)[i];
            let theValue = this.state.currentData[theKey];
            // var a = document.createElement("DIV")
            // retValue.appendChild(a);
            }
        let a = <div>a</div>
        
        return a;
    }

render (){
    // the loop. it'll retur n array of react node.
    let deathPercentage = parseFloat(this.state.currentData.death_ratio) * 100;
    deathPercentage =  deathPercentage.toFixed(3) 
    console.log(deathPercentage)

    let recoverdPercentage = parseFloat(this.state.currentData.recovery_ratio) * 100;
    recoverdPercentage =  recoverdPercentage.toFixed(3)  
    console.log(recoverdPercentage)
    
      
    
    return(
        <div className="SingleRegion">
            <h6>{this.state.currentDate}</h6>
        <div className="dataBox">
    <div className="dataBoxItem">{this.state.currentData.total_cases} <div className="dataType">total cases</div></div>
    <div className="dataBoxItem">{this.state.currentData.deaths}<div className="dataType">deaths</div> </div>
    <div className="dataBoxItem">{this.state.currentData.recovered} <div className="dataType">recovered</div></div>
    <div className="dataBoxItem">{this.state.currentData.critical} <div className="dataType">critical</div></div>
    <div className="dataBoxItem">{deathPercentage + "%"}<div className="dataType">death ratio</div></div>
    <div className="dataBoxItem">{recoverdPercentage + "%"} <div className="dataType">recovery ratio</div></div>
        </div>
        
        </div>
        );
}
}

export default SingleRegion;