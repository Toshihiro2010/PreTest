import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export class RootView extends Component {

    render() {

        let { title, navigation, visibleIcon } = this.props
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <Header
                    title={title}
                    navigation={navigation}
                    visibleIcon={visibleIcon}
                />
                <Body>
                    {this.props.children}
                </Body>
                <Footer />
            </View >
        )
    }
}

RootView.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
}

RootView.defaultProps = {
    title: 'Header',
    navigation: null
};


export default RootView;

