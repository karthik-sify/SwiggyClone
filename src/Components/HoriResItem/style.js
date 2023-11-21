import { StyleSheet } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    ExpOnelite:{flexDirection:'row',justifyContent:'flex-end'},
    ExpimgbgStyle:{ width:D.Wonefourty, height:D.Honesixtyfive, marginLeft:D.Wten, marginRight:D.Wfifteen,marginBottom:D.Wthirty},
    ExpGradient:{ flex: 1, borderRadius: 20, justifyContent: 'space-between' },
    ExpHeart:{ width:D.Wtwenty, height:D.Htwenty, alignSelf: 'flex-end', margin:D.Wten, resizeMode: 'contain', },
    ExpImgbgText:{ marginLeft:D.Wten, position: 'relative', top:D.Wthirty },
    ExpResOffer:{ fontSize:D.Weighteen, fontWeight: '900', color: '#f0f0f0' },
    ExpUptoView:{ marginLeft:D.Weleven, position: 'relative', top:-12 },
    ExpUptoText:{ fontSize: D.Wtwelve, fontWeight: '900',color:'#bdbdbd' },
    ExpResInfo:{ flexDirection: 'row',alignItems:'center'},
    ExpGreenStar:{ width:D.Wtwenty, height:D.Htwenty, resizeMode: 'contain'},
    ExpRating:{ color: '#282829', fontSize: D.Wfourteen, fontWeight: '600', marginLeft: D.Wfour},
    ExpDot:{ color: '#282829', fontSize: D.Weighteen, fontWeight: '600', marginLeft: D.Wfour,},
    ExpSpace:{ fontSize: D.Wfour},
    ExpMins:{ color: '#282829', fontSize: D.Wfourteen, fontWeight: '600', marginLeft: D.Wfour },
    ExpType:{color:'#8a8a8a',fontSize:D.Wfourteen,fontWeight:'400'},

    View1:{marginTop:D.Wten},
    HotelStyle:{ color: '#282829', fontWeight: '700', fontSize: D.Wsixteen,  },
    FreeDelivery:{width:D.Wtwotwenty,height:D.Hfourty,marginTop:D.Wten}
})