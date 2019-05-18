import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Container from './Container';

export class RootView extends Component {

    render() {

        let { title, navigation, visibleIcon } = this.props
        return (
            <Container>
                <Header
                    title={title}
                    navigation={navigation}
                    visibleIcon={visibleIcon}
                />
                <Body>
                    {this.props.children}
                </Body>
                <Footer />
            </Container>
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

