import React, { Component } from 'react'

export default class Part extends Component {
    render() {
        return (
            <p>{this.props.name} {this.props.exercises}</p>
        )
    }
}
