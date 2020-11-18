import React, { Component } from 'react'
import ReactJson from 'react-json-view';
import List from './list';
import { If, Then, Else } from './if';

export default class HistoryPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             req : [],
             result :'',
             header : '' 
        }
    }
    
    componentDidMount(){
        let array =JSON.parse(localStorage.getItem('requests'));
        this.setState({
            req : array,
        })
    }

    handleData= (results)=>{
        this.setState({
            result : results.data,
            header : results.header
        })
    }

    render(){
        const {req,header,result} = this.state;
        return (
            <main className='user-choice row'>
                 <div className='method'>
                 <List data={req} handler={this.handleData} />
          </div>
          <If condition={result}>
              <Then>
                <div className='render'>
            <div>
              <h2 data-testid='header'>Headers</h2>
              <ReactJson src={{ Headers: header }} theme='monokai' />
            </div>
            <div>
              <h2 data-testid='result'>Results</h2>
              <ReactJson src={{ Response: result }} theme='monokai' />
            </div>
          </div>
          </Then>
          </If>
            </main>
        )
    }
}
