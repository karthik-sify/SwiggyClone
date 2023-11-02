import { Image, StyleSheet, View ,Text} from "react-native";

export default OfferZoneZomponent = ({ OfferZoneText,OfferZoneImage,styles }) => {
    return (
        <View >
            <View style={styles.OfferZoneItem}>
            <Image source={OfferZoneImage} style={styles.OfferZoneImage}></Image>
            </View>
            <Text style={styles.OfferZoneText}>{OfferZoneText}</Text>
        </View>
    );
};

// const styles = StyleSheet.create({
//     OfferZone:{backgroundColor:'#f2f2f2',width:115,height:90,borderRadius:15,alignItems:'center',justifyContent:'flex-end'},
//     OfferZoneText: { color: 'black' ,margin:8,fontSize:14,fontWeight:'600',textAlign:'center'},
//     OfferZoneImage:{width:100,height:80}
// });