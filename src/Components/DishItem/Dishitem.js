import { Image,View ,Text} from "react-native";
import styles from "./style";

export default DishItem = ({ DishName,DishImage }) => {
    return (
        <View style={styles.DishItemView} >
            <Image source={{uri:DishImage}} style={styles.DishItemImg} resizeMode="contain"></Image>
            <Text style={styles.DishItemText}>{DishName}</Text>
        </View>
    );
};
