import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { apiResponse: "" };
    }

    render() {
        return (
        <div>
            <p>sup</p>
            <p>{this.props.date}</p>
        </div>
        )
    }
}

export default Date;