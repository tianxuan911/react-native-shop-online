import React from 'react'
import {View,Button,Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class MineScreen extends React.Component{
    static navigationOptions={
        title:'我的'
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>我的</Text>
            </View>
        )
    }
}