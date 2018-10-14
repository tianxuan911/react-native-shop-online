import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        height:150
    },
    slide1: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1DD6EB',
    },
    slide1Sub: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    slide2: {
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#17CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

class ImageButton extends Component{
    render(){
        return(
            <TouchableOpacity  onPress={this.props.onButtonPress}  activeOpacity={0.2} focusedOpacity={0.5}>
                <View style=  {{flex:1,justifyContent:'center',alignItems:'center',height:60,width:60,backgroundColor:'#841584'}}>
                    <Image source={this.props.source} style=  {{height:45,width:45}} >
                    </Image>
                    <Text style={{color:'#ffffff'}}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class Channel extends Component {
    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <View style={styles.slide1Sub}>
                        <ImageButton name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                    </View>
                    <View style={styles.slide1Sub}>
                        <ImageButton name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                        <ImageButton name="京东到家" source={{uri: "http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                    </View>
                </View>
                <View style={styles.slide2}>
                    <ImageButton style={{height:30}} name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                    <ImageButton style={{height:30}} name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                    <ImageButton style={{height:30}} name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                    <ImageButton style={{height:30}} name="京东到家" source={{uri:"http://ssh-upyun.weka.cc/1535425241007.jpg"}} onButtonPress={()=>alert('点我干哈')}></ImageButton>
                </View>
            </Swiper>
        );
    }
}
