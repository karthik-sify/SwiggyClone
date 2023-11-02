import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
width=width/(881.90/height)
// console.log(width,height)

//5=width/82.25
//5=height/136.5


//5-->88.2
//8-->55.1
//10-->44.1
//13-->33.95
//14--> 31.53
//15-->29.42
//16--> 27.58
//17-->25.96
//18-->24.52
//20-->22
//22-->20
const five=width/88.2;
const seven=width/63;
const eight=width/55.1;
const ten=width/44.1;
const thirteen=width/33.95;
const fourteen=width/31.53;
const fifteen=width/29.42;
const sixteen=width/27.58;
const eighteen=width/24.52;
const twenty=width/22;
const tewntytwo=width/20;



const styles = StyleSheet.create({

    BasePageStyle: { backgroundColor: 'white' },

    //TOP BAR
    TopBarStyle: { justifyContent: 'space-between', flexDirection: 'row', marginLeft:width/29.42, marginRight: width/29.42, marginTop: width/29.42, alignItems: 'center' },
    TopBarImages: { flexDirection: 'row' },
    profileImage: { width: width / 11.75, height: height / 25.14 },
    buyoneImage: { width: width / 6.32, height: height / 25.14, marginRight: width/88.2 },

    //ADDRESSBAR
    HomeImage: { width: width / 22.91, height: height / 48.8, marginRight: width/55.1 },
    HomeStyle: { flexDirection: 'row', alignItems: 'center' },
    HomeText: { color: 'black', fontWeight: '900', fontSize: width/27.58 },
    AddressStyle: { color: 'grey', fontSize:width/33.95 },

    //SEARCH BAR
    SearchBar: { borderRadius: 15, margin: width/29.42, flexDirection: 'row', borderColor: 'lightgrey', borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingEnd: 10, paddingStart: 10 },
    searchText: { color: 'grey', paddingTop: 12, paddingBottom: 12,fontSize:width/31.53 },
    searchText2: { color: 'lightgrey', marginRight: width/88.2 },
    searchImage: { width: width/20.56, height:height/44, marginRight: width/88.2 },
    searchImageView: { flexDirection: 'row' },

    //OFFERZONE 
    OfferZone: { justifyContent: 'space-evenly', flexDirection: 'row', marginTop: width/44.1 },

    OfferZoneItem: { backgroundColor: '#f2f2f2', width: width/3.58, height:height/9.77, borderRadius: 15, alignItems: 'center', justifyContent: 'flex-end' },
    OfferZoneText: { color: 'black', margin:width/55.1, fontSize:width/31.53, fontWeight: '600', textAlign: 'center' },
    OfferZoneImage: { width: width/4.11, height:height/11 },

    //CAROUSEL
    Carousel: { marginTop:width/44.1, marginRight: width/29.42 },

    // CarouselItem: {width:width/1.17,height:height/4,borderRadius:15,marginLeft:width/29.42},
    CarouselItem: {width:width/1.17,height:height/4,borderRadius:15},
    TextAndImage:{flex:1,flexDirection:'row'},
    Texts:{flex:1,justifyContent:'space-evenly'},
    foodImage:{width:width/2.41,height:height/5.17,alignSelf:'flex-end',resizeMode:'contain'},
    Text1:{marginLeft:width/29.42,fontSize:width/24.52,fontWeight:'900',color:'white',width:width/1.64},
    Text2:{marginLeft:width/29.42,fontSize:width/27.58,fontWeight:'400',color:'white',width:width/2.05},
    Text3:{marginLeft:width/29.42,backgroundColor:'white',fontSize:width/27.58,fontWeight:'900',padding:10,borderRadius:10,width:width/3.42,textAlign:'center'},

    //TRUSTEDPICK
    TrustedPick: { fontSize: width/25.96, fontWeight: '700', color: 'black', marginLeft: width/29.42, marginTop:width/22, marginBottom:width/22 },
    Reorder: { backgroundColor: 'black', marginLeft: width/29.42, padding: 7,paddingLeft:10,paddingRight:10, borderRadius: 20, color: 'white', textAlign: 'center', fontSize: width/33.95,marginBottom:ten,alignSelf:'flex-start', },
    Reorder2: { backgroundColor: 'white', marginLeft: width/29.42, padding: 7,paddingLeft:10,paddingRight:10, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize: width/33.95,marginBottom:ten,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },
    ReOrderItem:{margin:seven },
    ReOrderImage:{ width: 120, height: 140,borderRadius: 20},
    Onelite:{flexDirection:'row',justifyContent:'space-between'},
    imgbgStyle:{ width: 120, height: 140, marginLeft: 7, marginRight: 7, marginTop: 7 },
    Gradient:{ flex: 1, borderRadius: 20, justifyContent: 'space-between' },
    Onelite1:{ width: 50, height: 15, alignSelf: 'flex-end', margin: 10, resizeMode: 'contain', borderRadius: 20 },
    Heart:{ width: 18, height: 18, alignSelf: 'flex-end', margin: 10, resizeMode: 'contain', },
    ImgbgText:{ marginLeft: 10, position: 'relative', top: 24 },
    ResOffer:{ fontSize: 18, fontWeight: '900', color: '#f0f0f0' },
    UptoView:{ marginLeft: 11, position: 'relative', top: -8 },
    UptoText:{ fontSize: 11, fontWeight: '900' },
    ResInfo:{ flexDirection: 'row',alignItems:'center'},
    GreenStar:{ width: 18, height: 18, resizeMode: 'contain'},
    Rating:{ color: '#4e4e4f', fontSize: 12, fontWeight: '500', marginLeft: 4},
    Dot:{ color: '#4e4e4f', fontSize: 15, fontWeight: '900', marginLeft: 4,},
    Space:{ fontSize: 4},
    Mins:{ color: '#4e4e4f', fontSize: 12, fontWeight: '500', marginLeft: 4 },
    Type:{color:'#2e2e2e',fontSize:12,fontWeight:'300'},

    //Explore
    ExpOnelite:{flexDirection:'row',justifyContent:'flex-end'},
    ExpimgbgStyle:{ width: 140, height: 165, marginLeft: 10, marginRight: 15,marginBottom:30},
    ExpGradient:{ flex: 1, borderRadius: 20, justifyContent: 'space-between' },
    ExpHeart:{ width: 20, height: 20, alignSelf: 'flex-end', margin: 10, resizeMode: 'contain', },
    ExpImgbgText:{ marginLeft: 10, position: 'relative', top: 30 },
    ExpResOffer:{ fontSize: 18, fontWeight: '900', color: '#f0f0f0' },
    ExpUptoView:{ marginLeft: 11, position: 'relative', top:-12 },
    ExpUptoText:{ fontSize: 12, fontWeight: '900' },
    ExpResInfo:{ flexDirection: 'row',alignItems:'center'},
    ExpGreenStar:{ width: 20, height: 20, resizeMode: 'contain'},
    ExpRating:{ color: '#282829', fontSize: 14, fontWeight: '600', marginLeft: 4},
    ExpDot:{ color: '#282829', fontSize: 18, fontWeight: '600', marginLeft: 4,},
    ExpSpace:{ fontSize: 4},
    ExpMins:{ color: '#282829', fontSize: 14, fontWeight: '600', marginLeft: 4 },
    ExpType:{color:'#8a8a8a',fontSize:14,fontWeight:'400'},




});
export default styles;