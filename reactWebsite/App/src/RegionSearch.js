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
    //alert('A name was submitted: ' + this.state.value);
    console.log(event)
    let data = await this.fetchItems(this.state.value)
    console.log(data);
    alert(data)
    event.preventDefault();
    }

    //   fetchItems = async() => {
    async fetchItems(_reagion){
        const data = await fetch('https://api.quarantine.country/api/v1/spots/region?region=' + _reagion);
        
        const items = await data.json();
        const dates = items.data;
        console.log(dates);
        let keys = Object.keys(dates);
        //let vals = Object.values(dates);
        let entries = Object.entries(dates);
        let values = Object.values(dates);
        console.log("this is the entries" + entries)
        console.log("this is the first entry: " + Object.values(dates))
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