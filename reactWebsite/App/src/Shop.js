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
    componentDidMount() {
        this.fetchItems()
    }

    fetchItems = async() => {
        const data = await fetch('https://api.quarantine.country/api/v1/spots/region?region=Iceland');
        const items = await data.json();
        const dates = items.data;
        console.log(dates);
        let keys = Object.keys(dates);
        //let vals = Object.values(dates);
        let entries = Object.entries(dates);
        console.log(entries)
        this.setState({keys : keys})
        //setItems(keys);
    }

    // function currentDate() {

    // }
    render () {
    return (
        // <div>
        //     <h1>Shop page</h1>
            <div>
                {this.state.keys}
                <Date date="bla"/>
            </div>
        // </div>
    );
  }
}

export default Shop;