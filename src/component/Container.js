import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Container extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                {this.props.children}
            </View>
        )
    }
}

export default Container
