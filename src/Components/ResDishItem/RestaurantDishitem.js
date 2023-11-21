import { Image, ImageBackground, Text, View } from "react-native";

import styles from "./style";

export default RestaurantDishItem = ({ nonveg, bestseller, head, rate, star, rating, count, body, food }) => {
    return (
        <View style={styles.ResDishItemView1}>
            <View style={styles.ResDishItemView2}>
                <View style={styles.ResDishItemView3}>
                    <Image source={{uri:nonveg}} style={styles.ResDishItemView3Img1}></Image>
                    <Image source={{uri:bestseller}} style={styles.ResDishItemView3Img2}></Image>
                </View>
                <Text style={styles.ResDishItemView2Text1}>{head}</Text>
                <Text  style={styles.ResDishItemView2Text2}>{rate}</Text>
                <View style={styles.ResDishItemView4}>
                    <Image source={{uri:star}} style={styles.ResDishItemView4Img1}></Image>
                    <Text  style={styles.ResDishItemView4Text1}>{rating}</Text>
                    <Text  style={styles.ResDishItemView4Text2}>{count}</Text>
                </View>
                <Text  style={styles.ResDishItemView2Text3}>{body}</Text>
            </View>
            <View>
                <ImageBackground source={{uri:food}} style={styles.ResDishItemView5Img} imageStyle={{borderRadius:25}}>
                    <Text style={styles.ResDishItemView5Text}>ADD</Text>
                </ImageBackground>
            </View>
        </View>
    );
}