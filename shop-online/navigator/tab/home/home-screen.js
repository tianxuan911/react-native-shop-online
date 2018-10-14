import React from 'react'
import {View,Button,Text,Platform,TextInput,Image,FlatList,StyleSheet,SectionList} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import GoodsScreen from "../common/goods"
import GoodsList from "./goods-list"
import Swiper from "./swiper"
import Channel from "./channel"

class HomeScreen extends React.Component{

    //渲染工具栏
    static navigationOptions=({navigation})=>{return HomeScreen.renderSearchBar(navigation)}
    render() {
        return(
            <View style={styles.container}>
                <SectionList
                    style={styles.sectionContainer}
                    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => {
                        if (title)
                            return <Text style={{fontWeight: "bold",textAlign: "center",backgroundColor:'gray'}}>{title}</Text>
                    }}
                    sections={[
                        { data: [""] ,renderItem: ()=><Swiper/>},
                        { data: [""] ,renderItem: ()=><Channel/>},
                        { title:"为您推荐",data: ["item5", "item6"],renderItem: ()=><GoodsList/> }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        )
    }

    static renderSearchBar(navigation) {
        return {
            headerTransparent:true,
            headerBackground:<View style={{flex:1,backgroundColor:"'rgba(255,255,255,0)'"}}/>,
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

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "red"
    },
    sectionContainer:{
        flex: 1,
    },


})

