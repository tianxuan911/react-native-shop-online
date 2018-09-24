import React from 'react';
import { Text, View,Button,Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class LogoTitle extends React.Component{
    render(){
        // return (<Image source="" style={{width:30,height:30}}></Image>)
        return (<Text >主页<Icon name="logo-tux"  size={30} color="#4F8EF7" /></Text>)
    }
}

class HomeScreen extends React.Component{
    static navigationOptions=({navigation})=>{
        return {
            headerTitleContainerStyle:{justifyContent:"center"},
            headerTitle:<LogoTitle style={{flex:1}}/>,
            headerRight:(
                <Button
                    // onPress={()=>navigation.getParam('increaseCount')()}
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color={Platform.OS==='ios'?'#fff':null}>
                </Button>
            ),headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
        }
    }
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render(){
        return (
            <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
                <Text>主页</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="跳转到详情页"
                    onPress={()=> this.props.navigation.navigate('Details',{itemId:86,otherParam:'智能机器人'})}
                ></Button>
                <Icon name="logo-tux" size={30} color="#4F8EF7" />

            </View>
        )
    }
}

class DetailScreen extends React.Component{
    static navigationOptions=({navigation ,screenProps,navigationOptions })=>{
        return {
            // title:navigation.getParam('otherParam')
            headerStyle:{
                backgroundColor:navigationOptions.headerTintColor
            },
            headerTintColor:navigationOptions.headerStyle.backgroundColor,
        }
    }
    render(){
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId','NO_ID');
        const otherParam = navigation.getParam('otherParam','NO_OTHER')
        return (

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>详情页</Text>
                <Text>商品ID:{itemId}</Text>
                <Text>其他参数:{otherParam}</Text>
                <Button
                    title="跳转到详情页again"
                    // onPress={()=>this.props.navigation.navigate('Home')}
                    onPress={()=>this.props.navigation.push('Details')}
                ></Button>
                <Button
                    title="跳转到主页页"
                    // onPress={()=>this.props.navigation.navigate('Home')}
                    onPress={()=>this.props.navigation.navigate('Home')}
                ></Button>
                <Button
                    title="返回上一页"
                    // onPress={()=>this.props.navigation.navigate('Home')}
                    onPress={()=>this.props.navigation.goBack()}
                ></Button>
                <Button
                    title="更改标题"
                    onPress={()=>this.props.navigation.setParams({otherParam:'新标题'})}
                ></Button>
            </View>)
    }
}

class ModalScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text sytle={{fontSize:30}}>
                    This is a Modal!
                </Text>
                <Button onPress={()=>this.props.navigation.goBack()} title="Dismiss"/>
            </View>
        )
    }
}

const MainStack = createStackNavigator(
    {
        Home:{
            screen:HomeScreen
        },
        Details:{
            screen:DetailScreen
        }
    },
    {
        initialRouteName:'Home',
        navigationOptions:{

            headerStyle:{
                backgroundColor:'#f4511e'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        },
    },
)

const RootStack = createStackNavigator(
    {
        Main:{
            screen:MainStack
        },
        MyModal:{
            screen:ModalScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
)

export default class App extends React.Component{
    render(){
        return (<RootStack />)
    }
}
