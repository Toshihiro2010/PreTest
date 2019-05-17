import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export class RootView extends Component {

    render() {

        let { title, navigation } = this.props
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <Header
                    title={title}
                    navigation={navigation}
                />
                <StatusBar
                    hidden={true}
                />
                <View
                    style={{
                        flex: 1
                    }}
                >
                    {this.props.children}
                </View>
                <Footer/>
            </View>
        )
    }
}

RootView.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
}

RootView.defaultProps = {
    title: 'Header',
    navigation: PropTypes.any
};


export default RootView;

