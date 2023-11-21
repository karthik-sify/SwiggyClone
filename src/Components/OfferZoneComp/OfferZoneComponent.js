import { Image, StyleSheet, View ,Text} from "react-native";
import styles from "./style";

export default OfferZoneZomponent = ({ OfferZoneText,OfferZoneImage }) => {
    return (
        <View >
            <View style={styles.OfferZoneItem}>
            <Image source={OfferZoneImage} style={styles.OfferZoneImage}></Image>
            </View>
            <Text style={styles.OfferZoneText}>{OfferZoneText}</Text>
        </View>
    );
};

