import { Image, View, Text, StatusBar, ScrollView, FlatList } from "react-native"

const food1 = require('../../Assests/food1.png')

import styles from "./style"
import { Explore } from "../Home/Home";
import { Filters } from "../Home/Home";

export default Dish = () => {

    return (
        <ScrollView style={{ backgroundColor: 'white'}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#8ec26e'}></StatusBar>
            <View style={styles.TopImageView}>
                <Image source={food1} style={styles.TopImage}></Image>
            </View>

            <Text style={styles.Headings}>PIZZA</Text>
            <Text style={styles.Subtext}>Cheesilious pizzas to make every day extraordinary.</Text>
            <Text style={styles.Subtext2}>.......................................................................</Text>
            <Filters></Filters>
            <Explore></Explore>
        </ScrollView>
    )
}

