import React from 'react';

class RegionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render () {
        return(
            
            <div>
            <form action="/region" method="get">
            <input type="text" value={this.state.value} name="region" placeholder="search region..."
                onChange={this.handleChange}/>
            <input type="submit" value="Search" />
            </form>
            </div>
        )
    }
}
export default RegionSearch;