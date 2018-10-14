import React from 'react'
import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import {Apis, ApiUtils} from "../../../utils/ApiUtils";
import GoodsScreen from "../common/goods";

/**
 * 首页商品列表
 */
export default class GoodsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            listRefreshing:false,
            currentPage:0,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData(pageNo){
        fetch(Apis.GOOD_LIST,ApiUtils.getCommonRequestInit("pageNo&pageSize=&goodsId=&thirdId"))
            .then((ret)=>{return ret.json()})
            .then(retJson=>{
                if(retJson.total_results == 0 ){
                    return
                }
                for(let item in retJson.item){
                    retJson.item[item]['key'] = retJson.item[item].goodsInfoId+''
                }
                this.setState({
                    data: !pageNo || pageNo==1?(this.state.data=retJson.item):this.state.data.concat(retJson.item),
                    loaded: true,
                });
                if(this.state.listRefreshing === true){
                    console.log('数据加载完毕，关闭上啦刷新开关')
                    this.setState({listRefreshing:false})

                }
            })
            .catch(error=>{
                console.error(error)
            })
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载数据……
                </Text>
            </View>
        );
    }

    renderGood({ item }) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.container} >
                <Image
                    source={{uri: item.goodsInfoLogo}}
                    style={styles.thumbnail}
                    onPress={()=>{alert(item.goodsInfoName)}}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}  onPress={()=>{alert(item.goodsInfoName)}}>{item.goodsInfoName}</Text>
                    <Text style={styles.year}>{item.goodsInfoId}</Text>
                </View>
            </View>
        );
    }
    render(){
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                refreshing={this.state.listRefreshing}
                onRefresh={()=>{console.debug('打开刷新组建开关');this.setState({listRefreshing:true});this.fetchData();console.debug('刷新到第一页，重新绘制整个列表')}}
                onEndReachedThreshold={0.1}
                onEndReached={()=>{console.debug('刷新列表，下一页');this.fetchData(2)}}
                data={this.state.data}
                renderItem={this.renderGood}
                style={styles.list}
                numColumns={2}
            />
        );
    }

    componentDidMount() {
        console.log('在第一次渲染后调用');
        this.fetchData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    rightContainer: {
        flex: 1,

    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center",
    },
    year: {
        textAlign: "center",
    },
    thumbnail: {
        width: 100,
        height: 100
    },
    list: {
        flex:1,
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    }
});
