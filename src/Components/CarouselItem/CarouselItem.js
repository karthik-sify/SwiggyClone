import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./style";

export default CarouselItem = ({startColor,endColor,foodImage,heading,body}) => {
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

