import { StyleSheet,Dimensions } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    TopImageView:{ height:D.Hhundred, backgroundColor: '#8ec26e', alignItems: 'flex-end', justifyContent: 'center',marginBottom:D.Wten },
    TopImage:{ width: D.WoneTwenty, height:D.Honetwenty, resizeMode: 'contain', marginRight: D.Wtwenty },
    Headings:{ fontSize:D.Wseventeen, fontWeight: '700', color: 'black', marginLeft:D.Wfifteen, marginTop:D.Wtwenty, marginBottom:D.Wten },
    Subtext:{fontSize:D.Wten,color:'grey',marginLeft:D.Wfifteen},
    Subtext2:{fontSize:D.Wtwenty,color:'lightgrey',marginLeft:D.Wfifteen,fontWeight:'300'},
    Reorder2: { backgroundColor: 'white', marginLeft:D.Wfifteen, padding:D.Wseven,paddingLeft:D.Wten,paddingRight:D.Wten, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize:D.Wthirteen,marginBottom:D.Wten,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },



})