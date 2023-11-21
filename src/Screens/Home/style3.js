import { StyleSheet, Dimensions } from 'react-native';

import Dimens from '../../Utils/Dimensions';

//411.43 //881.90
// console.log(width,height)

const styles = StyleSheet.create({

    BasePageStyle: { backgroundColor: 'white' },

    //TOP BAR
    TopBarStyle:{justifyContent:'space-between',flexDirection:'row',marginLeft:Dimens.Wfifteen,marginTop:Dimens.Wfifteen,alignItems:'center'},
    TopBarImages:{flexDirection:'row'},
    profileImage:{width:Dimens.WthirtyFive,height:Dimens.HthirtyFive,marginRight:Dimens.Wfifteen},
    buyoneImage:{width:Dimens.Wsixtyfive,height:Dimens.HthirtyFive,marginRight:Dimens.Wfive},

    //ADDRESSBAR
    HomeImage:{width:Dimens.Weighteen,height:Dimens.Heighteen,marginRight:Dimens.Weight,},
    HomeStyle:{flexDirection:'row',alignItems:'center'},
    HomeText:{color:'black',fontWeight:'900',fontSize:Dimens.Wsixteen},
    AddressStyle:{color:'grey',fontSize:Dimens.Wthirteen},

    //SEARCH BAR
    SearchBar:{borderRadius:15,margin:Dimens.Wfifteen,flexDirection:'row',borderColor:'lightgrey',borderWidth:1,justifyContent:'space-between',alignItems:'center',paddingEnd:Dimens.Wten,paddingStart:Dimens.Wten},
    searchText:{color:'grey',paddingTop:Dimens.Wtwelve,paddingBottom:Dimens.Wtwelve},
    searchText2:{color:'lightgrey',marginRight:Dimens.Wfive},
    searchImage:{width:Dimens.Wtwenty,height:Dimens.Htwenty,marginRight:Dimens.Wfive},
    searchImageView:{flexDirection:'row'},
    //OFFERZONE 
    OfferZone:{justifyContent:'space-evenly',flexDirection:'row',marginTop:Dimens.Wten},
    //CAROUSEL
    Carousel:{marginTop:Dimens.Wten,marginRight:Dimens.Wfifteen},
    //TRUSTEDPICK
    TrustedPick: { fontSize:Dimens.Wfifteen, fontWeight: '700', color: 'black', marginLeft:Dimens.Wfifteen, marginTop:Dimens.Wtwenty, marginBottom:Dimens.Wtwenty },
    Reorder: { backgroundColor: 'black', marginLeft:Dimens.Wfifteen, padding:Dimens.Wseven,paddingLeft:Dimens.Wten,paddingRight:Dimens.Wten, borderRadius: 20, color: 'white', textAlign: 'center', fontSize:Dimens.Wthirteen,marginBottom:Dimens.Wten,alignSelf:'flex-start', },
    Reorder2: { backgroundColor: 'white', marginLeft:Dimens.Wfifteen, padding:Dimens.Wseven,paddingLeft:Dimens.Wten,paddingRight:Dimens.Wten, borderRadius: 20, color: '#4d4d4d', textAlign: 'center', fontSize:Dimens.Wthirteen,marginBottom:Dimens.Wten,alignSelf:'flex-start',borderColor:'lightgrey',borderWidth:1,fontWeight:'500' },
    ReOrderItem:{margin:Dimens.Wseven },
    ReOrderImage:{ width:Dimens.WoneTwenty, height:Dimens.Honefourty,borderRadius: 20},
    Onelite:{flexDirection:'row',justifyContent:'space-between'},
    imgbgStyle:{ width:Dimens.WoneTwenty, height:Dimens.Honefourty, marginLeft:Dimens.Wseven, marginRight:Dimens.Wseven, marginTop:Dimens.Wseven },
    Gradient:{ flex: 1, borderRadius: 20, justifyContent: 'space-between' },
    Onelite1:{ width:Dimens.Wfifty, height:Dimens.Hfifteen, alignSelf: 'flex-end', margin:Dimens.Wten, resizeMode: 'contain', borderRadius: 20 },
    Heart:{ width:Dimens.Weighteen, height:Dimens.Heighteen, alignSelf: 'flex-end', margin:Dimens.Wten, resizeMode: 'contain', },
    ImgbgText:{ marginLeft:Dimens.Wten, position: 'relative', top:Dimens.Wtewntyfour },
    ResOffer:{ fontSize:Dimens.Weighteen, fontWeight: '900', color: '#f0f0f0' },
    UptoView:{ marginLeft:Dimens.Weleven, position: 'relative', top: -8 },
    UptoText:{ fontSize:Dimens.Weleven, fontWeight: '900' },
    ResInfo:{ flexDirection: 'row',alignItems:'center'},
    GreenStar:{ width: Dimens.Weighteen, height:Dimens.Weighteen, resizeMode: 'contain'},
    Rating:{ color: '#4e4e4f', fontSize: Dimens.Wtwelve, fontWeight: '500', marginLeft: Dimens.Wfour},
    Dot:{ color: '#4e4e4f', fontSize:Dimens.Wfifteen, fontWeight: '900', marginLeft: Dimens.Wfour,},
    Space:{ fontSize: Dimens.Wfour},
    Mins:{ color: '#4e4e4f', fontSize: Dimens.Wtwelve, fontWeight: '500', marginLeft: Dimens.Wfour },
    Type:{color:'#2e2e2e',fontSize:Dimens.Wtwelve,fontWeight:'300'},


    CarouselIndexView:{ flexDirection: 'row' ,justifyContent:'center',alignItems:'baseline'},
    LeftDot:{backgroundColor:'lightgrey',width:Dimens.Weight,height:Dimens.Height,borderRadius:20,marginRight:Dimens.Wten},
    CarouselText:{ color: 'white', backgroundColor: 'black', paddingLeft: Dimens.Wseven, paddingRight:Dimens.Wseven, padding: 1, fontSize: Dimens.Wnine, borderRadius: 10, marginTop:Dimens.Wtwenty },
    CarouselText2:{backgroundColor:'lightgrey',width:Dimens.Weight,height:Dimens.Height,borderRadius:20,marginLeft:Dimens.Wten},

    TryNewView:{ margin: Dimens.Wtwenty, backgroundColor: '#3c0b63', borderRadius: 25, paddingLeft: Dimens.Wfifteen, paddingTop:Dimens.Weight, paddingBottom: Dimens.Weight, paddingRight: Dimens.Wfifteen },
    TryNewText1:{ fontWeight: '400', fontSize: Dimens.Wfifteen, color: '#e0e0e0', margin: Dimens.Wfour },
    TryNewText2:{ fontWeight: '900', fontSize: Dimens.Wtwenty, color: 'white', margin: Dimens.Wfour },
    TryNewText3:{ fontWeight: '600', fontSize: Dimens.Wfifteen, color: 'orange', margin:Dimens.Wfour },
    TryNewImg:{ width:Dimens.Wseventyfive, height:Dimens.Hseventyfive, alignSelf: 'center' },

    SeeMoreRestuarantsView:{ flexDirection: 'row', paddingTop: Dimens.Wtwelve, paddingBottom: Dimens.Wtwelve, borderTopColor: '#c7c7c7', borderBottomColor: '#c7c7c7', borderBottomWidth: 0.5, borderTopWidth: 0.5, marginTop: Dimens.Wtwenty, marginBottom: Dimens.Wtwenty, justifyContent: 'center', alignItems: 'center' },
    SeeMoreRestuarantsText:{ fontWeight: '700', fontSize: Dimens.Wtwelve, color: '#f56011' },
    SeeMoreRestuarantsText2:{ fontWeight: '400', fontSize:Dimens.Weighteen, color: '#f56011' },
    



});
export default styles;