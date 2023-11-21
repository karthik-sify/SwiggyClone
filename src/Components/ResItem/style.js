import { StyleSheet } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    Onelite:{flexDirection:'row',justifyContent:'space-between'},
    imgbgStyle:{ width: D.WoneTwenty, height: D.Honefourty, marginLeft: D.Wseven, marginRight: D.Wseven, marginTop: D.Wseven },
    Gradient:{ flex: 1, borderRadius: 20, justifyContent: 'space-between' },
    Onelite1:{ width: D.Wfifty, height:D.Hfifteen, alignSelf: 'flex-end', margin:D.Wten, resizeMode: 'contain', borderRadius: 20 },
    Heart:{ width:D.Weighteen, height:D.Heighteen, alignSelf: 'flex-end', margin:D.Wten, resizeMode: 'contain', },
    ImgbgText:{ marginLeft: D.Wten, position: 'relative', top: D.Wtewntyfour },
    ResOffer:{ fontSize: D.Weighteen, fontWeight: '900', color: '#f0f0f0' },
    UptoView:{ marginLeft: D.Weleven, position: 'relative', top: -8 },
    UptoText:{ fontSize: D.Weleven, fontWeight: '900',color:'#bdbdbd' },
    ResInfo:{ flexDirection: 'row',alignItems:'center'},
    GreenStar:{ width: D.Weighteen, height: D.Heighteen, resizeMode: 'contain'},
    Rating:{ color: '#4e4e4f', fontSize: D.Wtwelve, fontWeight: '500', marginLeft: D.Wfour},
    Dot:{ color: '#4e4e4f', fontSize: D.Wfifteen, fontWeight: '900', marginLeft: D.Wfour,},
    Space:{ fontSize: D.Wfour},
    Mins:{ color: '#4e4e4f', fontSize: D.Wtwelve, fontWeight: '500', marginLeft: D.Wfour },
    Type:{color:'#2e2e2e',fontSize:D.Wtwelve,fontWeight:'300'},

    View2:{ marginLeft: D.Wtwelve, marginTop:D.Wfive, marginBottom:D.Wten },
    View2Text:{ color: '#282829', fontWeight: '700', fontSize: D.Wthirteen, width:D.WoneTwenty },
})