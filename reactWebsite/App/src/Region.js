import React from 'react';
import SingleRegion from './SingleRegion';
class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', dateA: 0, dateB: 1, dataAvailable: false};
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        this.state.value = query.get("region")
        console.log("this is the state value: " + this.state.value)
        this.callAPI(this.state.value, function(data){
            return data
        })
    }


    async callAPI(regionName, callback) {
        console.log("this is the regionName: " + regionName);
        console.log("starting to fetch");
        const data = await fetch("http://localhost:9000/testAPI/region" + "/" + regionName);
        console.log("this is the REGION: " + regionName);
        const dates = await data.json();
        if (data.status >= 400){
            this.setState({value: dates.message})
            callback(this.state.value)
            return;
        }
        this.state.dates = dates
        this.state.dataAvailable = true
        this.setState({value: dates, dataAvailable: true })
        callback(this.state.value)
        return;
    }

render (){
    return(
        <div>
            {/* {console.log(this.props.location.search)} */}
            <h1>My reagion search page</h1>
            <div id="regionData">
                {console.log("region: " + this.state.value)}
                {/* {this.state.value} */}
                {this.state.dataAvailable ? <div> <SingleRegion dates={this.state.dates} position={0}></SingleRegion> <SingleRegion dates={this.state.dates} position={1}></SingleRegion> </div> : <div></div>
                }
            </div>
        </div>
        );
}
}

export default Region;