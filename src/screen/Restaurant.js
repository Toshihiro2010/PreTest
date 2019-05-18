import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import RootView from '../component/RootView';
import MyButton from '../component/MyButton';
import { getDataRestaurant, getImageGoogle, getDataNextPageToken } from '../service/googleAPI';
import CardRetaurant from '../component/CardRetaurant';
import googlePlaceModel from '../models/googlePlaceModel';

class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nextPageToken: '',
            loading: true
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        getDataRestaurant().then(response => {
            let { status, data } = response
            if (status == '200') {
                if (data.results) {
                    this.setState({
                        data: data.results,
                        nextPageToken: data.next_page_token,
                        loading: false
                    })
                }
            }
        }).catch(error => {
            console.log("error : " + error)
            this.setState({
                loading: false
            })
        })
    }


    render() {
        let { navigation } = this.props
        return (
            <RootView
                navigation={navigation}
                title='Restaurant'
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: 8,
                        color: '#000'
                    }}
                >
                    Restaurant BangSue
                </Text>
                {this.state.loading ? (
                    <ActivityIndicator
                        size={'large'}
                        color='red'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                ) : (
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item) => item.id}
                            extraData={this.state}
                            style={{
                                paddingLeft: 8,
                                paddingRight: 8
                            }}
                            renderItem={({ item, index }) => {
                                let dataModel = new googlePlaceModel(item)
                                return (
                                    <CardRetaurant
                                        title={dataModel.name}
                                        source={dataModel.photoMain ? { uri: getImageGoogle(dataModel.photoMain) } : null}
                                        disabled={true}
                                        // onPress={() => {
                                        //     let latLong = dataModel.location.lat + " / " + dataModel.location.lng
                                        // }}
                                    />
                                )
                            }}
                            onEndReached={() => {
                                this.loadMoreItem()
                            }}
                        />

                    )}

            </RootView>
        );
    }

    loadMoreItem() {
        let { nextPageToken } = this.state
        if (nextPageToken) {
            getDataNextPageToken(nextPageToken).then((response) => {
                let { data, status } = response
                if (status == 200) {
                    if (data.results) {
                        let newArray = [
                            ...this.state.data,
                            ...data.results
                        ]
                        this.setState({
                            data: newArray,
                            nextPageToken: data.next_page_token
                        })
                    }
                }
            }).catch(error => {
                console.log("error : " + error)
            })
        }
    }


}
export default Restaurant;
