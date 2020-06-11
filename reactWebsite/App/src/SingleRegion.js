import React from 'react';

class SingleRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: "", currentData: ""}
    }

    componentDidMount(){
        let dates = this.props.dates
        // console.log("this is the single dates: " + this.state.dates)
        let currentDate = Object.keys(dates)[this.props.position];
        let currentData = dates[currentDate];
        currentData = JSON.stringify(currentData)
        this.setState({currentDate: currentDate, currentData: currentData})
        console.log("this is the current: " + this.state.currentDate)
    }

render (){
    return(
        <div>
            {/* {console.log(this.props.location.search)} */}
            <p>single region</p>
            <button>left</button>
            {console.log(this.props)}
            {this.state.currentDate}
            {this.state.currentData}
            <button>right</button>
            
        </div>
        );
}
}

export default SingleRegion;