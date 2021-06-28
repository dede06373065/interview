import React, { Component } from 'react'
import Count from './components/Count/index'
import Search from './components/Search/index'
import Searchimg from './components/Searchimg/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <Search/>
                <Searchimg />
            </div>
        )
    }
}
