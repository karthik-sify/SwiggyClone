import {StyleSheet} from 'react-native';
const styles=StyleSheet.create({

    BasePageStyle:{backgroundColor:'white'},

    //TOP BAR
    TopBarStyle:{justifyContent:'space-between',flexDirection:'row',marginLeft:15,marginTop:15,alignItems:'center'},
    TopBarImages:{flexDirection:'row'},
    profileImage:{width:35,height:35,marginRight:10},
    buyoneImage:{width:65,height:35,marginRight:5},

    //ADDRESSBAR
    HomeImage:{width:18,height:18,marginRight:8},
    HomeStyle:{flexDirection:'row',alignItems:'center'},
    HomeText:{color:'black',fontWeight:'900',fontSize:16},
    AddressStyle:{color:'grey',fontSize:13},

    //SEARCH BAR
    SearchBar:{borderRadius:15,margin:15,flexDirection:'row',borderColor:'lightgrey',borderWidth:1,justifyContent:'space-between',alignItems:'center',paddingEnd:10,paddingStart:10},
    searchText:{color:'grey',paddingTop:12,paddingBottom:12},
    searchText2:{color:'lightgrey',marginRight:5},
    searchImage:{width:20,height:20,marginRight:5},
    searchImageView:{flexDirection:'row'},

    //OFFERZONE 
    OfferZone:{justifyContent:'space-evenly',flexDirection:'row',marginTop:10},

    OfferZoneItem: { backgroundColor: '#f2f2f2', width: 115, height: 90, borderRadius: 15, alignItems: 'center', justifyContent: 'flex-end' },
    OfferZoneText: { color: 'black', margin: 8, fontSize: 14, fontWeight: '600', textAlign: 'center' },
    OfferZoneImage: { width: 100, height: 80 },

    //CAROUSEL
    Carousel:{marginTop:10,marginRight:15},

    CarouselItem: {width:350,height:220,borderRadius:15,marginLeft:15},
    TextAndImage:{flex:1,flexDirection:'row'},
    Texts:{flex:1,justifyContent:'space-evenly'},
    foodImage:{width:170,height:170,alignSelf:'flex-end',resizeMode:'contain'},
    Text1:{marginLeft:15,fontSize:22,fontWeight:'900',color:'white',width:250},
    Text2:{marginLeft:15,fontSize:16,fontWeight:'400',color:'white',width:200},
    Text3:{marginLeft:15,backgroundColor:'white',fontSize:16,fontWeight:'900',padding:10,borderRadius:10,width:120,textAlign:'center'},

    //TRUSTEDPICK
    TrustedPick:{fontSize:15,fontWeight:'700',color:'black',marginLeft:15,marginTop:20,marginBottom:20},
    Reorder:{backgroundColor:'black',marginLeft:15,width:80,padding:7,borderRadius:20,color:'white',textAlign:'center',fontSize:13},




});
export default styles;