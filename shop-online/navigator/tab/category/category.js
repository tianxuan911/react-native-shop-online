import React from 'react'
import {View,Button,Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class CategoryScreen extends React.Component{
    static navigationOptions={
        title:'分类'
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>分类</Text>
            </View>
        )
    }
}