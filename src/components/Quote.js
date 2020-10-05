import React, { Component } from 'react'


export class Quote extends Component {
    render() {
        return (
            <div id="quote-box">
                <h1>"{this.props.quote}"</h1>
                <h4>{this.props.author}</h4>
                <hr/>
                <a href="twitter.com/intent/tweet">Tweet the Quote</a>
                
            </div>
        )
    }
}

export default Quote
