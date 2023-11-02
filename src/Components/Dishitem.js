import { Image,View ,Text} from "react-native";

export default DishItem = ({ DishName,DishImage,styles }) => {
    return (
        <View style={{marginLeft:15,marginRight:5 ,alignItems:'center',justifyContent:'center'}} >
            <Image source={{uri:DishImage}} style={{width:100,height:100}} resizeMode="contain"></Image>
            <Text style={{color:'#6b6b6b',fontSize:14,fontWeight:'500'}}>{DishName}</Text>
        </View>
    );
};
