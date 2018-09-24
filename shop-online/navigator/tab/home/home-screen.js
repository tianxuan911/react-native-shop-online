import React from 'react'
import {View,Button,Text,Platform,TextInput,ScrollView} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchBar from 'react-native-search-bar'
import GoodsScreen from "../common/goods";

class HomeScreen extends React.Component{

    // static navigationOptions = ({navigation,screenProps}) => ({
    //     headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Test2',
    //     tabBarLabel:navigation.state.params?navigation.state.params.tabBarLabel:'Test2',
    //     headerStyle:{
    //         backgroundColor:navigation.state.params?navigation.state.params.navigationBackGroundColor:'rgba(255, 255 ,255, 0)',
    //     },
    //     headerLeft:(
    //         <View style={{
    //             flexDirection:'row',
    //             marginLeft:10,
    //             marginRight:5,
    //             width:200,
    //             height:20,
    //             backgroundColor:'rgba(31,35,32,0.4)',
    //             borderRadius: 7,
    //         }}>
    //             <Icon name={'md-locate'} size={15} style={{marginLeft:6,marginTop:2}} color={'white'}/>
    //             <Text style={{color:'white',marginTop:1.5,marginRight:2}}>{'Test2'}</Text>
    //         </View>
    //     ),
    //     headerRight:(
    //         <View style={{
    //             flexDirection:'row',
    //             backgroundColor:'white',
    //             borderRadius: 7,
    //             marginRight:10,
    //             height:20,
    //             // width:deviceWidth / 2 -10,
    //         }}>
    //             <Icon name={'md-search'} size={12} color={'black'} style={{
    //                 marginTop:3,
    //                 marginLeft:5,
    //             }}></Icon>
    //             <TextInput
    //                 style={{
    //                     fontSize:13,
    //                     marginLeft:3,
    //                 }}
    //                 placeholder={'搜索所有商品'}
    //             />
    //         </View>
    //     ),
    // })

    static navigationOptions=({navigation})=>{
        return {
            headerTransparent:true,
            headerBackground:<View style={{flex:1,backgroundColor:"'rgba(255,255,255,0.5)'"}}/>,
            headerTintColor:'#fdd',
            headerTitleContainerStyle:{justifyContent:"center",alignItems:'center',},
            headerTitle:(
                <View style={{flex:1,flexDirection:'row',borderRadius:25,height:40,borderWidth:1}}>
                    <Icon style={{paddingLeft:10,paddingTop:8}} size={25} name={`${Platform.OS==='ios'?'ios':'md'}-search`} />
                    <TextInput style={{flex:1,fontSize:15,textAlign:'center'}} placeholder="搜索" />
                    <Icon style={{paddingRight:10,paddingTop:8}} size={25} name={`logo-${Platform.OS==='ios'?'apple':'android'}`} onPress={()=>alert('I am robot!')}/>
                </View>

            ),
            headerLeftContainerStyle:{
                paddingLeft:7
            },
            headerRightContainerStyle:{
                paddingRight:7
            },
            headerRight:(
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:40,
                    height:40,
                    backgroundColor:'rgba(128, 138 ,135, 0.2)',
                    borderRadius: 100,
                }}>
                    <Icon style={{}} size={25} name={`${Platform.OS==='ios'?'ios':'md'}-notifications`} onPress={()=>alert('message')}/>
                </View>
            ),headerLeft: (
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:40,
                    height:40,
                    backgroundColor:'rgba(128, 138 ,135, 0.3)',
                    borderRadius: 100,
                }}>
                <Icon style={{}} size={25} name={`${Platform.OS==='ios'?'ios':'md'}-qr-scanner`} onPress={()=>alert('sanner')}/>
                </View>
            ),
        }
    }
    render(){
        return (

            <ScrollView contentContainerStyle={{}}>
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />
                <Text>首页</Text>
                <Button onPress={()=>this.props.navigation.navigate('Goods')} title="商品详情" />

            </ScrollView>
        )
    }
    componentDidMount() {
        console.log('ddddddd');
    }
}

const HomeStackNavigator = createStackNavigator(
    {
        Home:HomeScreen,
        Goods:GoodsScreen,
    },
    {
        initialRouteName:'Home'
    }
)
HomeStackNavigator.navigationOptions={
    title:"首页",
}

export default HomeStackNavigator;
