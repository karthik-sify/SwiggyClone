import {StyleSheet} from 'react-native';

export default styles=StyleSheet.create({
    SearchBar:{borderRadius:15,margin:15,marginTop:20,marginBottom:20,flexDirection:'row',borderColor:'lightgrey',borderWidth:1,alignItems:'center',paddingEnd:10,paddingStart:10},
    searchText:{color:'grey',paddingTop:12,paddingBottom:12},
    searchImage:{width:18,height:18,marginRight:15},

    line:{height:1,backgroundColor:'#ededed',margin:20},

    Dot:{ color: 'grey', fontSize: 15, fontWeight: '900', marginLeft: 5,},
    Space:{ fontSize: 4},

    SavedAdd:{ color: 'grey', fontSize: 11, marginLeft: 15, marginBottom: 15 },
    ViewMore:{ fontWeight: '500', fontSize: 14, color: '#f56011', marginLeft: 15, marginTop: 10 },
    RecentSearch:{ color: 'grey', fontSize: 11, marginLeft: 15, marginBottom: 15 },

    TopBarView:{ flexDirection: 'row', marginTop: 15 },
    TopBarImg:{ width: 50, height: 20, resizeMode: 'contain' },
    TopBarTxt:{ color: 'black', fontWeight: '700', fontSize: 14 },

    CurrentLocationView:{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 },
    CurrentLocationImg:{ width: 18, height: 18, marginRight: 10 },
    CurrentLocationText:{ fontWeight: '700', fontSize: 14, color: '#f56011' },

    RecentSearchView:{ flexDirection: 'row', alignItems: "center" },
    RecentSearchImg:{ width: 15, height: 15, resizeMode: 'contain', marginRight: 5 },
    RecentSearchText:{ color: '#4a4a4a', fontWeight: '700' },
    RecentSearchText2:{ color: 'grey', fontSize: 13, },
})