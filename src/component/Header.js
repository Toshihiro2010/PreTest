import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    View
} from 'react-native';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let { visibleLeft, leftIconType, leftIconName
            , iconColor, visibleRight, rightIconType, rightIconName,
            hideStatusBar, titleStyle, headerStyle,
            autoFontSize
        } = this.props


        return (
            <View>

            </View>
        );
    }

    leftClick() {
        let { navigation, leftClick } = this.props

        if (leftClick) {
            leftClick()

        } else {

            if (navigation) {
                navigation.goBack(null)
            } else {
                console.log("header left click")
            }
        }
    }

    rightClick() {
        let { rightClick } = this.props
        if (rightClick) {
            rightClick()
        } else {
            console.log("header right click")
        }
    }
}


Header.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
}

Header.defaultProps = {
    
};


export default Header;
