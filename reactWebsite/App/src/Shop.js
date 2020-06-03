import React,{useState, useEffect} from 'react';
import Date from './Date';

class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // useEffect(() => {
    //     fetchItems();
    // }, []);

    // const [dates, setItems] = useState([]);
    // componentDidMount() {
    //     this.fetchItems()
    // }

    // fetchItems = async() => {
    // async fetchItems(_reagion){
    //     const data = await fetch('https://api.quarantine.country/api/v1/spots/region?region=Iceland');
    //     const items = await data.json();
    //     const dates = items.data;
    //     console.log(dates);
    //     let keys = Object.keys(dates);
    //     //let vals = Object.values(dates);
    //     let entries = Object.entries(dates);
    //     let values = Object.values(dates);
    //     console.log("this is the entries" + entries)
    //     console.log("this is the first entry: " + Object.values(dates))
    //     console.log("my ultimate value: " + Object.values(dates["2020-06-03"]));
    //     this.setState({keys : keys, dates: dates, currentDate: 0})
        
    //     console.log(this.state.keys[0]);
       
    // }

    // currentDate() {
    //     // let curr = this.state.currentDate;
    //     // console.log(curr)
    //     // let currkey = this.state.keys[curr];
    //     // let values = Object.values(this.state.dates[currkey])
    //     // //let myval = Object.values(this.state.dates[this.state])°
    //     if(this.state.dates  != undefined) {
    //     // if (this.state.dates != undefined){
    //         let onlyValues = Object.values(this.state.dates[this.state.keys[this.state.currentDate]]);
    //         let myJson = this.state.dates[this.state.keys[this.state.currentDate]];
    //         let retString = JSON.stringify(myJson)
    //         return retString
    //     }
    //     return
        
    // }

    render () {
    return (
        // <div>
        //     <h1>Shop page</h1>
            <div>
                {/* {this.currentDate()} */}
                {/* {this.state.keys} */}
                <Date date="bla"/>
            </div>
        // </div>
    );
  }
}

export default Shop;