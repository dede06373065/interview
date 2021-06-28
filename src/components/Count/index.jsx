import React, { Component } from 'react'

export default class Count  extends Component {
    state={
        count:0
    }
    add=()=>{
        const {count}=this.state
        this.setState({count:count+1})
        return count;
    }

    render() {
        const {count}=this.state
        return (
            <div>
                <span>{count}</span>&nbsp;
                <button onClick={this.add}>add+1</button>
                <hr />
            </div>
        )
    }
}
