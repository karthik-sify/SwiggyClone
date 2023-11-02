import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default CarouselItem = ({startColor,endColor,foodImage,heading,body,styles}) => {
    return (
        <LinearGradient colors={[startColor, endColor]} start={{x:0.30,y:1}} end={{x:1,y:1}} style={styles.CarouselItem}>
                <View style={styles.TextAndImage}>
                    <View style={styles.Texts}> 
                        <Text style={styles.Text1}>{heading}</Text>
                        <Text style={styles.Text2}>{body}</Text>
                        <Text style={[styles.Text3,{color:startColor}]}>Order Now</Text>
                    </View>
                    <Image source={{uri:foodImage}} style={styles.foodImage}></Image>
                </View>

        </LinearGradient>
    );
};

// const styles = StyleSheet.create({
//     CarouselItem: {width:350,height:220,borderRadius:15,marginLeft:15},
//     TextAndImage:{flex:1,flexDirection:'row'},
//     Texts:{flex:1,justifyContent:'space-evenly'},
//     foodImage:{width:170,height:170,alignSelf:'flex-end',resizeMode:'contain'},
//     Text1:{marginLeft:15,fontSize:22,fontWeight:'900',color:'white',width:250},
//     Text2:{marginLeft:15,fontSize:16,fontWeight:'400',color:'white',width:200},
//     Text3:{marginLeft:15,backgroundColor:'white',fontSize:16,fontWeight:'900',padding:10,borderRadius:10,width:120,textAlign:'center'},
// });