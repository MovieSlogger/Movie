import React, { Component } from 'react';
import {StyleSheet, Dimensions, WebView, Text, View, Image, Alert} from 'react-native';
import {appAxios, appToast, appLoad, appReport, appStorage, appMachine, appPrimal} from '../Common/Gather';

export default class Active extends Component {
    constructor(props) {
        super(props)
        this.webView = null;
        this.state = {
            cloud: '',
            status: Boolean
        }
    }

    componentWillMount() {
        appAxios(APP_MOVIE.base_url + '/active/cloud', {})
        .then((res) => {
            this.setState({status: res.status})
            if (res.status) {
                this.setState({cloud: res.url});
            }
        })
    }

    componentDidMount() {
        appReport('00003', 'show', 1);
    }
    
    _onMessage = (event)=> {
        appMachine(event, this.props.navigation.navigate, this.props.navigation);
    }

    render() {
        return (
            this.state.status ?
            (<View style={styles.Active}>
                <WebView
                source={{uri: this.state.cloud}}
                style={{width: Dimensions.get('window').width}}
                javaScriptEnabled={true}
                ref={( webView ) => this.webView = webView}
                onMessage={this._onMessage}
                />
            </View>)
            :(<View style={styles.Active}>
                <Image style={styles.Photo} source={require('../static/image/setout.png')}/>
                <Text style={styles.oning}>敬请期待...</Text>
            </View>)
        )
    }
}

const styles = StyleSheet.create({
    Active: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Photo: {
        width: 120,
        height: 120
    },
    oning: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: '400',
        color: '#666666'
    }
})