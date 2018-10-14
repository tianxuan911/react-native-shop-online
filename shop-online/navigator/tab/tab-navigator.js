import React from 'react'
import {Platform} from 'react-native'
// import {default as Icon} from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'
import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from './home/home-screen'
import MineScreen from './mine/mine-screen'
import CategoryScreen from './category/category'
import FindXScreen from "./findX/findX";
import ShoppingCartScreen from "./shopping-cart/ShoppingCart";


const RootNavigator = createBottomTabNavigator(
    {
        Home:{
            screen:HomeScreen
        },
        Category:{
            screen:CategoryScreen
        },
        FindX:{
            screen:FindXScreen
        },
        ShoppingCart:{
            screen:ShoppingCartScreen
        },
        Mine:{
            screen:MineScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const {routeName} = navigation.state;
                let platPrefix;
                if(Platform.OS === 'ios'){
                    platPrefix = 'ios'
                }else{
                    platPrefix = 'md'
                }
                let iconName;
                if(routeName === 'Home'){
                    iconName = 'home'
                }else if(routeName === 'Category'){
                    iconName = 'list'
                }else if(routeName === 'FindX'){
                    iconName = 'locate'
                }else if(routeName === 'ShoppingCart'){
                    iconName = 'cart'
                }else if(routeName === 'Mine'){
                    iconName = 'settings'
                }
                return <Icon name={`${platPrefix}-${iconName}`} size={25} color={tintColor} />;
            },
            }),
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
    }
)

export default class App extends React.Component{
    render(){
        return (
            <RootNavigator/>
        )
    }
}