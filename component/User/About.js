import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Back from '../Common/Back';
import {appAxios, appToast, appLoad, appReport, appStorage, appMachine, appPrimal} from '../Common/Gather';

export default class About extends Component {

    componentDidMount() {
        appReport('00009', 'show', 1);
    }

    render() {
        return (
            <View style={styles.About}>
                <Back navigation={this.props.navigation} active={false} before={false}/>
                <View style={styles.Panel}>
                    <Text>关于我及项目</Text>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    About: {
        flex: 1
    },
    Panel: {
        flex: 1
    }
})