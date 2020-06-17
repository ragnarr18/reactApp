import React from 'react';

class SingleRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: "", currentData: "", currentPosition: this.props.position}
        // this.clickLeft = this.clickLeft.bind(this);
    }

    componentDidMount(){
        // let date = this.props.date
        // console.log("this is the single date: " , this.props.date)
        // //let currentDate = Object.keys(dates)[this.props.position];
        // //let currentData = dates[currentDate];
        
        // let currentDate = date.date
        // delete date["date"];
        // let currentData = date
        // let deaths = currentData["deaths"];
        // console.log("the deaths: " + deaths)
        // currentData = JSON.stringify(currentData)
        // // this.setState({currentDate: currentDate, currentData: currentData})
        // this.setState({currentDate: currentDate, currentData: currentData, deaths: deaths})
        // // console.log("this is the current: " + this.state.currentDate)
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
    // the loop. it'll return array of react node.
    let children = this.state.currentData.map((val) => {
        return (
          <p id={val.id}>{val.name}</p>
        )
      });
    return(
        <div className="SingleRegion">
            <p>{this.state.currentDate}</p>
            <div id="dataBox">{children}</div>
            
            {this.state.deaths}
        </div>
        );
}
}

export default SingleRegion;