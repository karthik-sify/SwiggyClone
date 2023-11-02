import { StyleSheet,Dimensions } from "react-native";

let { height, width } = Dimensions.get('window');


export default styles=StyleSheet.create({
    TopImageView:{ height: 100, backgroundColor: '#8ec26e', alignItems: 'flex-end', justifyContent: 'center',marginBottom:10 },
    TopImage:{ width: 120, height: 120, resizeMode: 'contain', marginRight: 20 },
    Headings:{ fontSize: width/25.96, fontWeight: '700', color: 'black', marginLeft: width/29.42, marginTop:width/22, marginBottom:10, },
    Subtext:{fontSize:10,color:'grey',marginLeft:15},
    Subtext2:{fontSize:20,color:'lightgrey',marginLeft:15,fontWeight:'300'},
    Reorder2: { backgroundColor: 'white', marginLeft: width/29.42, padding: 7,paddingLeft:10,paddingRight:10, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize: width/33.95,marginBottom:10,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },



})