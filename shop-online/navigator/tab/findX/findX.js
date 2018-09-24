import React from 'react'
import {View,Button,Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class FindXScreen extends React.Component{
    static navigationOptions={
        title:'发现'
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>发现</Text>
            </View>
        )
    }
}