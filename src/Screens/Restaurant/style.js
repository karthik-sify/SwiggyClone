import { StyleSheet,Dimensions } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    flexDirection:{flexDirection:'row',alignItems:'center'},
    TopPortion:{backgroundColor:'lightgrey',borderBottomLeftRadius:D.Wtwenty,borderBottomRightRadius:D.Wtwenty},
    back:{width:D.Wsixty,height:D.Hsixty,resizeMode:'contain',},
    infos:{backgroundColor:'white',borderRadius:20,paddingTop:D.Wfifteen,paddingLeft:D.Wfifteen,marginLeft:D.Wfifteen,marginRight:D.Wfifteen,marginBottom:D.Wtwenty},
    share:{ width: D.Wtwenty, height: D.Htwenty, resizeMode: 'contain'},
    heartGrey:{ width: D.Wtwenty, height: D.Htwenty, resizeMode: 'contain',marginLeft:D.Wtwenty,marginRight:D.Wtwenty},
    ExpResInfo:{ flexDirection: 'row',alignItems:'center',},
    ExpGreenStar:{ width: D.Wtwenty, height: D.Htwenty, resizeMode: 'contain',},
    ExpRating:{ color: '#545454', fontSize: D.Wthirteen, fontWeight: '700', marginLeft: D.Wfour},
    infoImg:{width:D.Wfourteen,height:D.Hfourteen,resizeMode:'contain',marginLeft:D.Wfive,},
    ExpDot:{ color: '#282829', fontSize: D.Weighteen, fontWeight: '600', marginLeft: D.Wfour,},
    ExpSpace:{ fontSize:D.Wseven},
    ExpType:{color:'#6b6b6b',fontSize:D.Wtwelve,fontWeight:'400'},
    fromtoview:{flexDirection:'row',marginTop:D.Wfifteen},
    fromto:{width:D.Wten,height:D.Hfourty,resizeMode:'contain',marginRight:D.Wtwenty},
    line:{height:1,backgroundColor:'#ededed',marginTop:D.Wfifteen},
    Triangle:{width:D.Wnine,height:D.Hnine,resizeMode:'contain',margin:D.Wfive},
    fromtoText:{ color: '#282829', fontWeight: '700', fontSize: D.Wtwelve,marginRight:D.Wten },
    fromView:{flexDirection:'row',marginBottom:D.Wseven},
    onelite:{width:D.Wseventy,height:D.Htwenty,resizeMode:'contain'},
    freeDelivery:{color:"#f56011",fontSize:D.Weleven,fontWeight:'400',marginLeft:D.Wfive},

    ResCarouselView:{margin:D.Wfifteen,borderRadius:20,borderWidth:1,borderColor:'lightgrey',flexDirection:'row',padding:D.Wtwelve,alignItems:'center',justifyContent:'center',paddingRight:D.Wfifteen},

    SearchBar: { borderRadius: D.Wfifteen, margin:D.Wfifteen, flexDirection: 'row', backgroundColor: '#ebebeb',justifyContent:'space-between', alignItems: 'center', paddingEnd: D.Wten, paddingStart: D.Wten },
    searchText: { color: 'grey', paddingTop: D.Wtwelve, paddingBottom: D.Wtwelve,fontSize:D.Wfourteen,fontWeight:'400'},
    searchText2: { color: 'lightgrey', marginRight: D.Wfive },
    searchImage: { width:D.Wtwenty, height:D.Htwenty, marginRight: D.Wfive },
    searchImageView: { flexDirection: 'row' },

    Reorder2: { backgroundColor: 'white', marginLeft: D.Wfifteen, padding: D.Wseven,paddingLeft:D.Wten,paddingRight:D.Wten, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize:D.Wthirteen,marginBottom:D.Wten,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },

    line2:{height:1,backgroundColor:'lightgrey',margin:D.Wten},

    TrustedPick: { fontSize: D.Weighteen, fontWeight: '700', color: 'black', marginLeft: D.Wfifteen, marginTop:D.Wtwenty, marginBottom:D.Wtwenty },

    TopPortion2:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    Zaitoon:{ color: '#282829', fontWeight: '800', fontSize: D.Wseventeen, },
    index:{ color: '#f56011', fontSize: D.Wtwelve,fontWeight:'500' },
    CaroDotView:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' ,marginTop:D.Wten},
    DotSide:{ backgroundColor: 'lightgrey', width: D.Wsix, height: D.Hsix, borderRadius: 20, marginRight: 2 },
    DotCenter:{ backgroundColor: 'grey', width: D.Weight, height: D.Height, borderRadius: 20, marginLeft: 2, marginRight: 2},
    MenuView:{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:D.Wten},
    MenuLeftImg:{width:D.Wthirty,height:D.Hthirty,resizeMode:'contain',marginRight:D.Wten},
    MenuRightImg:{width:D.Wthirty,height:D.Hthirty,resizeMode:'contain',marginLeft:D.Wten},
    MenuText:{color:'black',fontSize:D.Weleven},
    ResDish:{ marginLeft: D.Wten, marginRight: D.Wten,marginTop:D.Wfifteen },



})