import React from 'react';

class SingleRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: "", currentData: "", currentPosition: this.props.position}
        // this.clickLeft = this.clickLeft.bind(this);
    }

    componentDidMount(){
        let date = this.props.date
        console.log("this is the single date: " , this.props.date)
        //let currentDate = Object.keys(dates)[this.props.position];
        //let currentData = dates[currentDate];
        
        let currentDate = date.date
        delete date["date"];
        let currentData = date
        let deaths = currentData["deaths"];
        console.log("the deaths: " + deaths)
        currentData = JSON.stringify(currentData)
        // this.setState({currentDate: currentDate, currentData: currentData})
        this.setState({currentDate: currentDate, currentData: currentData, deaths: deaths})
        // console.log("this is the current: " + this.state.currentDate)
    }

    // clickLeft() {
    //     if (this.props.position > 0){
    //         this.props.position -=1
          
    //     }
    //     console.log("this is the new position" + this.props.position)
    //     return
    // }

    componentDidUpdate(prevProps){
        if (prevProps.position != this.props.position){
            let date = this.props.date
            //let currentDate = Object.keys(dates)[this.props.position];
            let currentDate = Object.keys(date)[0];
        let currentData = date[currentDate];
        let deaths = currentData["deaths"];
        console.log("the deaths: " + deaths)
        currentData = JSON.stringify(currentData)
        this.setState({currentDate: currentDate, currentData: currentData, deaths: deaths})
        console.log("this is the current state of SingleRegion: " + this.state.currentDate)
        }
    }

render (){
    
    return(
        <div className="SingleRegion">
            {/* {console.log(this.props.location.search)} */}
            <p>single region</p>
            {/* <button onClick={this.clickLeft}>left</button> */}
            {/* {console.log(this.props)} */}
            {this.state.currentDate}
            {this.state.currentData}
            {this.state.deaths}
            {/* <button>right</button> */}
            
        </div>
        );
}
}

export default SingleRegion;