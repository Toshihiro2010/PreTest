import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let {
            title,
            style, textStyle,
            children
        } = this.props


        return (
            <View
                style={{
                    backgroundColor: 'gray',
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderTopWidth: 1,
                    borderColor: 'gray',
                    ...style
                }}
            >
                {children}
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'blue',
                        ...textStyle
                    }}
                >
                    {title}
                </Text>

            </View>
        );
    }
}


Footer.propTypes = {
    title: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
}

Footer.defaultProps = {
    title: 'Coding By Patipan Ongarj',
    style: {},
    textStyle: {}
};


export default Footer;
