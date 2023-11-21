import {StyleSheet} from 'react-native';
import D from '../../Utils/Dimensions';

export default styles=StyleSheet.create({
    SearchBar:{borderRadius:15,margin:D.Wfifteen,marginTop:D.Wtwenty,marginBottom:D.Wtwenty,flexDirection:'row',borderColor:'lightgrey',borderWidth:1,alignItems:'center',paddingEnd:D.Wten,paddingStart:D.Wten},
    searchText:{color:'grey',paddingTop:D.Wtwelve,paddingBottom:D.Wtwelve},
    searchImage:{width:D.Weighteen,height:D.Heighteen,marginRight:D.Wfifteen},

    line:{height:1,backgroundColor:'#ededed',margin:D.Wtwenty},

    Dot:{ color: 'grey', fontSize: D.Wfifteen, fontWeight: '900', marginLeft: D.Wfive,},
    Space:{ fontSize: D.Wfour},

    SavedAdd:{ color: 'grey', fontSize: D.Weleven, marginLeft: D.Wfifteen, marginBottom: D.Wfifteen },
    ViewMore:{ fontWeight: '500', fontSize: D.Wfourteen, color: '#f56011', marginLeft: D.Wfifteen, marginTop: D.Wten },
    RecentSearch:{ color: 'grey', fontSize: D.Weleven, marginLeft: D.Wfifteen, marginBottom: D.Wfifteen },

    TopBarView:{ flexDirection: 'row', marginTop: D.Wfifteen },
    TopBarImg:{ width: D.Wfifty, height: D.Htwenty, resizeMode: 'contain' },
    TopBarTxt:{ color: 'black', fontWeight: '700', fontSize: D.Wfourteen },

    CurrentLocationView:{ flexDirection: 'row', alignItems: 'center', marginLeft: D.Wfifteen },
    CurrentLocationImg:{ width:D.Weighteen, height: D.Heighteen, marginRight: D.Wten },
    CurrentLocationText:{ fontWeight: '700', fontSize: D.Wfourteen, color: '#f56011' },

    RecentSearchView:{ flexDirection: 'row', alignItems: "center" },
    RecentSearchImg:{ width: D.Wfifteen, height: D.Hfifteen, resizeMode: 'contain', marginRight: D.Wfive },
    RecentSearchText:{ color: '#4a4a4a', fontWeight: '700' },
    RecentSearchText2:{ color: 'grey', fontSize: D.Wthirteen, },
})