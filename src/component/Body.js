import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import PropTypes from 'prop-types';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let { style } = this.props
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    padding: 8,
                    ...style
                }}
            >
                {this.props.children}
            </View>
        );
    }
}


Body.propTypes = {
    style: PropTypes.any,
}

Body.defaultProps = {
    style: {}
};


export default Body;
