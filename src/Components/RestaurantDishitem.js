import { Image, ImageBackground, Text, View } from "react-native";

export default RestaurantDishItem = ({ styles, nonveg, bestseller, head, rate, star, rating, count, body, food }) => {
    return (
        <View style={{flexDirection:"row",marginLeft:5,alignItems:'center',marginBottom:50}}>
            <View style={{width:220}}>
                <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
                    <Image source={{uri:nonveg}} style={{width:15,height:15,resizeMode:'contain',marginRight:5}}></Image>
                    <Image source={{uri:bestseller}} style={{width:80,height:20,resizeMode:'contain'}}></Image>
                </View>
                <Text style={{color:'#3d3d3d',fontWeight:'600',fontSize:16,marginTop:2}}>{head}</Text>
                <Text  style={{color:'#4a4a4a',marginTop:8,marginBottom:8,fontSize:14,fontWeight:'500'}}>{rate}</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                    <Image source={{uri:star}} style={{width:12,height:12,resizeMode:'contain',marginRight:5}}></Image>
                    <Text  style={{color:'#0b6b02',fontWeight:'800',fontSize:13,marginRight:5}}>{rating}</Text>
                    <Text  style={{color:'grey',fontSize:12}}>{count}</Text>
                </View>
                <Text  style={{color:'#737373',fontWeight:'400',fontSize:14}}>{body}</Text>
            </View>
            <View>
                <ImageBackground source={{uri:food}} style={{width:160,height:140}} imageStyle={{borderRadius:25}}>
                    <Text style={{backgroundColor:'white',padding:10,position:'absolute',top:110,left:20,borderWidth:1,borderColor:'lightgrey',width:120,borderRadius:10,color:'#25a120',fontWeight:'800',fontSize:16,textAlign:"center"}}>ADD</Text>
                </ImageBackground>
            </View>
        </View>
    );
}