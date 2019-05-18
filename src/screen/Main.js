import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../component/Header';
import RootView from '../component/RootView';
import MyButton from '../component/MyButton';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { navigation } = this.props
        return (
            <RootView
                title={'PreTest'}
                visibleIcon={false}
            >
                <MyButton
                    title='Test Page'
                    onPress={() => {
                        navigation.navigate('Test')
                    }}
                />

                <MyButton
                    title='Place Restaurant'
                    onPress={() => {
                        navigation.navigate('Restaurant')
                    }}
                    style={{
                        marginTop: 32,
                    }}
                />
            </RootView>
        );
    }
}

export default Main;
