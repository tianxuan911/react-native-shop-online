import React from 'react'
import {View,Button,Text} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default class GoodsScreen extends React.Component{
    static navigationOptions={
        // tabBarIcon:(<Icon name="logo-tux"/>),
        title:'商品详情'
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>商品详情</Text>
            </View>
        )
    }
}
