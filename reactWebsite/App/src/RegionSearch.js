import React from 'react';

class RegionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    async handleSubmit(event) {
        console.log(event)
        //let data = await this.fetchItems(this.state.value)
        //     .then()
        //     .catch()
        // console.log(data);
        //take out  alert() and in with routing
        this.callAPI(this.state.value, function(data){
            alert(data)
        } )
        
        event.preventDefault();
    }

    // componentWillMount() {
    //     this.callAPI("iceland");
    // }

    //needs params regionName
    async callAPI(regionName, callback) {
        console.log("this is the regionName: " + regionName);
        console.log("starting to fetch");
        const dates = await fetch("http://localhost:9000/testAPI/region" + "/" + regionName);
        console.log("this is the REGION: " + regionName) ;  
        // const items = await response.json();
        // const dates = items.data;
        const items = await dates.json();
        console.log(items);
        // let keys = Object.keys(dates);
        // //let vals = Object.values(dates);
        // let entries = Object.entries(dates);
        // let values = Object.values(dates);
        // // console.log("this is the entries" + entries)
        // // console.log("this is the first entry: " + Object.values(dates))
        // console.log("my ultimate value: " + Object.values(dates["2020-06-03"]));
        //this.setState({keys : keys, dates: dates, currentDate: 0})
        
        //console.log(this.state.keys[0]);
        console.log("this is the current state: " + this.state)
        callback(this.state)
        return;
     
    }
    

    // this needs error handling
    async fetchItems(_reagion){
        const response = await fetch('https://api.quarantine.country/api/v1/spots/region?region=' + _reagion);
        
        console.log("this is the reponse" + response) ;  
        const items = await response.json();
        const dates = items.data;
        console.log(dates);
        let keys = Object.keys(dates);
        //let vals = Object.values(dates);
        let entries = Object.entries(dates);
        let values = Object.values(dates);
        // console.log("this is the entries" + entries)
        // console.log("this is the first entry: " + Object.values(dates))
        console.log("my ultimate value: " + Object.values(dates["2020-06-03"]));
        this.setState({keys : keys, dates: dates, currentDate: 0})
        
        console.log(this.state.keys[0]);
        return this.state;
       
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} name="search" placeholder="search region"
                onChange={this.handleChange}/>
                <button>Search</button>
            </form>
        )
    }
}
export default RegionSearch;