import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let {
            visibleIcon,
            title,
        } = this.props


        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 8,
                    paddingRight: 8,
                    borderBottomWidth: 1,
                    borderColor: '#000000',
                    backgroundColor: '#d1d2d4',
                    alignItems: 'center'
                }}
            >
                <Icon
                    name='left'
                    type='antdesign'
                    underlayColor='transparent'
                    onPress={() => {
                        this.leftClick()
                    }}
                    containerStyle={{
                        opacity: visibleIcon ? 1 : 0
                    }}
                />
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        fontSize: 18,
                        color: '#FF0000'
                    }}
                >
                    {title}
                </Text>
                <Icon
                    name='left'
                    type='antdesign'
                    underlayColor='transparent'
                    containerStyle={{
                        opacity: 0
                    }}
                />
                <StatusBar
                    hidden={true}
                />


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
}


Header.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
    leftClick: PropTypes.func,
    visibleIcon: PropTypes.bool
}

Header.defaultProps = {
    title: 'Header',
    navigation: null,
    leftClick: null,
    visibleIcon: true
};


export default Header;
