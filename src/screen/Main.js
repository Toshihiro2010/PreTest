import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../component/Header';
import RootView from '../component/RootView';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <RootView>
                <Text> textInComponent </Text>
            </RootView>
        );
    }
}

export default Main;
