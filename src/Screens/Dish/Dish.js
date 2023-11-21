import { Image, View, Text, StatusBar, ScrollView, FlatList } from "react-native"

const food1 = require('../../Assests/food1.png')

import styles from "./style"
import { Explore } from "../Home/Home";
import { Filters } from "../Home/Home";
import Strings from "../../Utils/Strings";

export default Dish = ({navigation}) => {

    return (
        <ScrollView style={{ backgroundColor: 'white'}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#8ec26e'}></StatusBar>
            <View style={styles.TopImageView}>
                <Image source={food1} style={styles.TopImage}></Image>
            </View>

            <Text style={styles.Headings}>{Strings.Pizza}</Text>
            <Text style={styles.Subtext}>{Strings.PizzaSubText}</Text>
            <Text style={styles.Subtext2}>{Strings.PizzaSubText2}</Text>
            <Filters></Filters>
            <Explore navigation={navigation}></Explore>
        </ScrollView>
    )
}

