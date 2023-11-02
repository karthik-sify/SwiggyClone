import { Image, ImageBackground, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default HorizontalRestuarantItem=({ Hotel, Rating, Mins, Type, Off, Upto, FoodImage, styles, Heart,Location, GreenStar,FreeDelivery })=>{
    return(
        <View style={{flexDirection:'row',}}>
            <ImageBackground
                source={{ uri: FoodImage }}
                style={styles.ExpimgbgStyle}
                imageStyle={{ borderRadius: 20 }}
            >
                <LinearGradient colors={['rgba(0,0,0, 0.1)', 'rgba(0, 0, 0, 1)']} start={{ x: 0, y: 0.60 }} end={{ x: 0, y: 1 }} style={styles.ExpGradient} >

                    <View style={styles.ExpOnelite}>
                        {/* <Image style={styles.ExpOnelite1} source={{ uri: Onelite }}></Image> */}

                        <Image style={styles.ExpHeart} source={{ uri: Heart }}></Image>
                    </View>


                    <View style={styles.ExpImgbgText}>
                        <Text style={styles.ExpResOffer}>{Off}</Text>
                    </View>
                    <View style={styles.ExpUptoView}>
                        <Text style={styles.ExpUptoText}>{Upto}</Text>
                    </View>

                </LinearGradient>
            </ImageBackground >

            <View style={{marginTop:10}}>
                <Text style={{ color: '#282829', fontWeight: '700', fontSize: 16,  }}>
                    {Hotel}
                </Text>


                <View style={styles.ExpResInfo}>
                    <Image style={styles.ExpGreenStar} source={{ uri: GreenStar }}></Image>
                    <Text style={styles.ExpRating}>{Rating}</Text>
                    <View>
                        <Text style={styles.ExpDot}>.</Text>
                        <Text style={styles.ExpSpace}> </Text>
                    </View>
                    <Text style={styles.ExpMins}>{Mins}</Text>
                </View>

                <Text style={styles.ExpType}>{Type}</Text>
                <Text style={styles.ExpType}>{Location}</Text>
                <Image style={{width:220,height:40,marginTop:10}}  source={{uri:FreeDelivery}}></Image>


            </View>
        </View>
    )
}