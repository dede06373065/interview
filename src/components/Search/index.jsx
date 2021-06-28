import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {
    state={
       name:'',
       pic:'',
       result:[]
    }
    search=()=>{
        axios.get('https://randomuser.me/api').then(res=>{
            const result=res.data.results
            this.setState({
                name:result[0].name.first,
                pic:result[0].picture.medium,
                result
            })
            return result
        }).catch(e=>{
            console.log(e)
        })
    }

    render() {
        const {result, name,pic}=this.state;
        PubSub.publish('details',{name,pic})
        const str=JSON.stringify(result)?JSON.stringify(result):'Searching...'//need to find a good way

        return (
            <div>
                <button onClick={this.search}>Search Information</button>
                <p>{str}</p>
                <hr />
            </div>
        )
    }
}
