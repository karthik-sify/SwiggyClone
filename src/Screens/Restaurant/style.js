import { StyleSheet,Dimensions } from "react-native";

let { height, width } = Dimensions.get('window');
width=width/(881.90/height)

export default styles=StyleSheet.create({
    flexDirection:{flexDirection:'row',alignItems:'center'},
    TopPortion:{backgroundColor:'lightgrey',borderBottomLeftRadius:20,borderBottomRightRadius:20},
    back:{width:60,height:60,resizeMode:'contain',},
    infos:{backgroundColor:'white',borderRadius:20,paddingTop:15,paddingLeft:15,marginLeft:15,marginRight:15,marginBottom:20},
    share:{ width: 20, height: 20, resizeMode: 'contain'},
    heartGrey:{ width: 20, height: 20, resizeMode: 'contain',marginLeft:20,marginRight:20},
    ExpResInfo:{ flexDirection: 'row',alignItems:'center',},
    ExpGreenStar:{ width: 20, height: 20, resizeMode: 'contain',},
    ExpRating:{ color: '#545454', fontSize: 13, fontWeight: '700', marginLeft: 4},
    infoImg:{width:14,height:14,resizeMode:'contain',marginLeft:5,},
    ExpDot:{ color: '#282829', fontSize: 18, fontWeight: '600', marginLeft: 4,},
    ExpSpace:{ fontSize:7},
    ExpType:{color:'#6b6b6b',fontSize:12,fontWeight:'400'},
    fromtoview:{flexDirection:'row',marginTop:15},
    fromto:{width:10,height:40,resizeMode:'contain',marginRight:20},
    line:{height:1,backgroundColor:'#ededed',marginTop:15},
    Triangle:{width:9,height:9,resizeMode:'contain',margin:5},
    fromtoText:{ color: '#282829', fontWeight: '700', fontSize: 12,marginRight:10 },
    fromView:{flexDirection:'row',marginBottom:7},
    onelite:{width:70,height:20,resizeMode:'contain'},
    freeDelivery:{color:"#f56011",fontSize:11,fontWeight:'400',marginLeft:5},

    ResCarouselView:{margin:15,borderRadius:20,borderWidth:1,borderColor:'lightgrey',flexDirection:'row',padding:12,alignItems:'center',justifyContent:'center',paddingRight:15},

    SearchBar: { borderRadius: 15, margin: width/29.42, flexDirection: 'row', backgroundColor: '#ebebeb',justifyContent:'space-between', alignItems: 'center', paddingEnd: 10, paddingStart: 10 },
    searchText: { color: 'grey', paddingTop: 12, paddingBottom: 12,fontSize:14,fontWeight:'400'},
    searchText2: { color: 'lightgrey', marginRight: width/88.2 },
    searchImage: { width: width/20.56, height:height/44, marginRight: width/88.2 },
    searchImageView: { flexDirection: 'row' },

    Reorder2: { backgroundColor: 'white', marginLeft: width/29.42, padding: 7,paddingLeft:10,paddingRight:10, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize: width/33.95,marginBottom:10,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },

    line2:{height:1,backgroundColor:'lightgrey',margin:10},

    TrustedPick: { fontSize: 18, fontWeight: '700', color: 'black', marginLeft: width/29.42, marginTop:width/22, marginBottom:width/22 },

    TopPortion2:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    Zaitoon:{ color: '#282829', fontWeight: '800', fontSize: 17, },
    index:{ color: '#f56011', fontSize: 12,fontWeight:'500' },
    CaroDotView:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' ,marginTop:10},
    DotSide:{ backgroundColor: 'lightgrey', width: 6, height: 6, borderRadius: 20, marginRight: 2 },
    DotCenter:{ backgroundColor: 'grey', width: 8, height: 8, borderRadius: 20, marginLeft: 2, marginRight: 2},
    MenuView:{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10},
    MenuLeftImg:{width:30,height:30,resizeMode:'contain',marginRight:10},
    MenuRightImg:{width:30,height:30,resizeMode:'contain',marginLeft:10},
    MenuText:{color:'black',fontSize:11},
    ResDish:{ marginLeft: 10, marginRight: 10,marginTop:15 },



})