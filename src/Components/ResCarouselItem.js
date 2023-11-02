import {View,Image,Text} from 'react-native'
export default ResCarouselItem=({image,head,body,styles})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <Image source={{uri:image}} style={{width:40,height:40,resizeMode:'contain',marginRight:10}}></Image>
            <View>
                <Text style={{color:'black',fontWeight:'800',fontSize:18,marginBottom:2}}>{head}</Text>
                <Text style={{color:'grey',fontWeight:'700',fontSize:12}}>{body}</Text>
            </View>

        </View>
    );
};