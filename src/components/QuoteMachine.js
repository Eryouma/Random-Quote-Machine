import React, { Component } from 'react'
import quoteDetails from '../components/Quotes'
import Quote from '../components/Quote'

export class QuoteMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            currentQuote : quoteDetails[0]
        }
        this.nextQuote = this.nextQuote.bind(this);
    }

    nextQuote(){
        this.setState ((prevState,index)=>{
            index = Math.floor(Math.random()*10)
            if(index <= 8){
            return({
                count : prevState.count + 1,
                currentQuote : quoteDetails[index]
            });}
            else{
                return (alert('Error!Quote not found'));
            }
        })
    }
    
    render() {
        
        return (
            <div>
                <Quote quote={this.state.currentQuote.quote} author={this.state.currentQuote.author}/>
                <hr className="lineBreak"/>
                <button onClick={this.nextQuote} className="btn btn-dark">Next Quote</button>
            </div>
        )
    }
}

export default QuoteMachine
