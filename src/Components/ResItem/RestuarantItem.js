import { Image, ImageBackground, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styles from "./style";

export default RestuarantItem = ({ Hotel, Rating, Mins, Type, Off, Upto, FoodImage, Heart, Onelite, GreenStar, navigation }) => {
    return (
        <View>
            <ImageBackground
                source={{ uri: FoodImage }}
                style={styles.imgbgStyle}
                imageStyle={{ borderRadius: 20 }}
            >
                <LinearGradient colors={['rgba(0,0,0, 0.1)', 'rgba(0, 0, 0, 1)']} start={{ x: 0, y: 0.60 }} end={{ x: 0, y: 1 }} style={styles.Gradient} >

                    <View style={styles.Onelite}>
                        <Image style={styles.Onelite1} source={{ uri: Onelite }}></Image>

                        <Image style={styles.Heart} source={{ uri: Heart }}></Image>
                    </View>


                    <View style={styles.ImgbgText}>
                        <Text style={styles.ResOffer}>{Off}</Text>
                    </View>
                    <View style={styles.UptoView}>
                        <Text style={styles.UptoText}>{Upto}</Text>
                    </View>

                </LinearGradient>
            </ImageBackground >

            <View style={styles.View2}>
                <Text style={styles.View2Text}>
                    {Hotel}
                </Text>


                <View style={styles.ResInfo}>
                    <Image style={styles.GreenStar} source={{ uri: GreenStar }}></Image>
                    <Text style={styles.Rating}>{Rating}</Text>
                    <View>
                        <Text style={styles.Dot}>.</Text>
                        <Text style={styles.Space}> </Text>
                    </View>
                    <Text style={styles.Mins}>{Mins}</Text>
                </View>


                <Text style={styles.Type}>{Type}</Text>
            </View>
        </View>

    );
}