import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
console.log(width,height)
//5=width/82.25
//5=height/136.5

// if width=80 => (80/5)=> 16 ==> 82.5/16 =>5.15 ==> width/5.15
//2=width/220 (font)

const styles = StyleSheet.create({

    BasePageStyle: { backgroundColor: 'white' },

    //TOP BAR
    TopBarStyle: { justifyContent: 'space-between', flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 15, alignItems: 'center' },
    TopBarImages: { flexDirection: 'row' },
    profileImage: { width: width / 11.75, height: height / 19.5 },
    buyoneImage: { width: width / 6.32, height: height / 19.5, marginRight: 5 },

    //ADDRESSBAR
    HomeImage: { width: width / 22.91, height: height / 37.91, marginRight: 8 },
    HomeStyle: { flexDirection: 'row', alignItems: 'center' },
    HomeText: { color: 'black', fontWeight: '900', fontSize: 16 },
    AddressStyle: { color: 'grey', fontSize: 13 },

    //SEARCH BAR
    SearchBar: { borderRadius: 15, margin: 15, flexDirection: 'row', borderColor: 'lightgrey', borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingEnd: 10, paddingStart: 10 },
    searchText: { color: 'grey', paddingTop: 12, paddingBottom: 12 },
    searchText2: { color: 'lightgrey', marginRight: 5 },
    searchImage: { width: 20, height: 20, marginRight: 5 },
    searchImageView: { flexDirection: 'row' },

    //OFFERZONE 
    OfferZone: { justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10 },

    OfferZoneItem: { backgroundColor: '#f2f2f2', width: width/3.58, height:height/7.58, borderRadius: 15, alignItems: 'center', justifyContent: 'flex-end' },
    OfferZoneText: { color: 'black', margin: 8, fontSize: 14, fontWeight: '600', textAlign: 'center' },
    OfferZoneImage: { width: width/4.11, height:height/8.53 },

    //CAROUSEL
    Carousel: { marginTop: 10, marginRight: 15 },

    CarouselItem: {width:width/1.17,height:height/3.10,borderRadius:15,marginLeft:15},
    TextAndImage:{flex:1,flexDirection:'row'},
    Texts:{flex:1,justifyContent:'space-evenly'},
    foodImage:{width:width/2.41,height:height/4.01,alignSelf:'flex-end',resizeMode:'contain'},
    Text1:{marginLeft:15,fontSize:18,fontWeight:'900',color:'white',width:width/1.64},
    Text2:{marginLeft:15,fontSize:16,fontWeight:'400',color:'white',width:width/2.05},
    Text3:{marginLeft:15,backgroundColor:'white',fontSize:16,fontWeight:'900',padding:10,borderRadius:10,width:width/3.42,textAlign:'center'},

    //TRUSTEDPICK
    TrustedPick: { fontSize: 15, fontWeight: '700', color: 'black', marginLeft: 15, marginTop: 20, marginBottom: 20 },
    Reorder: { backgroundColor: 'black', marginLeft: 15, width: width/5.14, padding: 7, borderRadius: 20, color: 'white', textAlign: 'center', fontSize: 13 },




});
export default styles;