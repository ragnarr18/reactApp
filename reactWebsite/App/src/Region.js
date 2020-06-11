import React from 'react';

class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        this.state.value = query.get("region")
        console.log("this is the state value: " + this.state.value)
        this.callAPI(this.state.value, function(data){
           // alert(data)
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
        console.log(dates );
        let stringValue = JSON.stringify(dates);
        this.setState({value: stringValue})
        callback(this.state.value)
        return;
    }

render (){
    return(
        <div>
            {console.log(this.props.location.search)}
            My data
            <div id="regionData">
                {console.log(this.state.value)}
                {this.state.value}
            </div>
        </div>
        );
}
}

export default Region;