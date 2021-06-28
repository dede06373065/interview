import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Searchimg extends Component {
    state = {
        name: '',
        pic: ''
    }
    render() {
        PubSub.subscribe('details', (msg, data) => {
            this.setState({
                name: data.name,
                pic: data.pic
            })
        });
        const { name, pic } = this.state;
        return (
            <div>
                <img src={pic} alt="Loading..." />
                <p>{name}</p>
            </div>
        )
    }
}
