import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RootView from '../component/RootView';
import MyButton from '../component/MyButton';
import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';
import Container from '../component/Container';
import { ScrollView } from 'react-native-gesture-handler';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataX: 3,
            update: 2,
            dataArray: [3]
        };
    }

    componentDidMount() {
        this.intial()
    }

    intial() {
        let { update, dataX, dataArray } = this.state
        let myUpdate = update
        let myDataX = dataX
        let dataArrayNew = dataArray
        for (let index = 0; index < 3; index++) {
            myDataX = myDataX + myUpdate
            myUpdate += 2
            dataArrayNew = [
                ...dataArrayNew,
                myDataX
            ]
        }
        this.setState({
            dataX: myDataX,
            update: myUpdate,
            dataArray: dataArrayNew
        })
    }

    render() {
        return (
            <Container>
                <Header
                    title='Test'
                    navigation={this.props.navigation}
                />
                <Body>
                    <Text>
                        {this.state.dataArray.map((value, index) => {
                            return value + "  "
                        })}
                    </Text>
                    <MyButton
                        title='FindNext'
                        onPress={() => {
                            this.findNextValue()
                        }}
                        style={{
                            marginTop: 16,
                        }}
                    />
                </Body>
                <Footer />

            </Container>
        );
    }

    findNextValue() {
        let { update, dataX, dataArray } = this.state
        let result = dataX + update
        let arrayNew = [
            ...dataArray,
            result
        ]
        this.setState((prevState) => ({
            update: prevState.update + 2,
            dataX: result,
            dataArray: arrayNew
        }))
    }


}
export default Test;
