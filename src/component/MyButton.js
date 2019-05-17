import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
    render() {
        let {
            title,
            onPress, disabled,
            style, textStyle
        } = this.props

        return (
            <TouchableOpacity
                style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 12,
                    backgroundColor: '#ff0000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...style
                }}
                onPress={() => {
                    if (onPress) {
                        onPress()
                    }
                }}
                disabled={disabled}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: '#ffffff',
                        ...textStyle
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

}


MyButton.propTypes = {
    title: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
}

MyButton.defaultProps = {
    title: 'Button',
    style: {},
    textStyle: {},
    onPress: null,
    disabled: false
};


export default MyButton;
