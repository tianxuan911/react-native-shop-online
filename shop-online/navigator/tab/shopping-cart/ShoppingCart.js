import React from 'react'
import {View,Button,Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class ShoppingCartScreen extends React.Component{
    static navigationOptions={
        title:'购物车'
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>购物车</Text>
            </View>
        )
    }
}