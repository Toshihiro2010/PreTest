import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';

class CardRetaurant extends Component {
    render() {
        let {
            title,
            onPress, disabled,
            style, textStyle,
            source
        } = this.props

        return (
            <TouchableOpacity
                style={{
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: '#000',
                    marginBottom: 16,
                    ...style
                }}
                onPress={() => {
                    if (onPress) {
                        onPress()
                    }
                }}
                disabled={disabled}
            >
                <View
                    style={{
                        height: 150
                    }}
                >
                    <Image
                        source={source ? source : noImage}
                        resizeMode={'cover'}
                        style={{
                            borderRadius: 4,
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 8
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontStyle: 'italic',
                            ...textStyle
                        }}
                        numberOfLines={2}
                    >
                        {title}
                    </Text>

                </View>
            </TouchableOpacity>
        );
    }
    

}

const noImage = require('../assets/images/no_image.png')


CardRetaurant.propTypes = {
    title: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    source: PropTypes.any,
}

CardRetaurant.defaultProps = {
    title: 'Title',
    style: {},
    textStyle: {},
    onPress: null,
    disabled: false,
    source: null
};


export default CardRetaurant;
