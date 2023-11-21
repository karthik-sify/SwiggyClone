import { StyleSheet } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    ResDishItemView1:{flexDirection:"row",marginLeft:D.Wfive,alignItems:'center',marginBottom:D.Wfifty},
    ResDishItemView2:{width:D.Wtwotwenty},
    ResDishItemView3:{ flexDirection: 'row' ,alignItems:'center'},
    ResDishItemView3Img1:{width:D.Wfifteen,height:D.Hfifteen,resizeMode:'contain',marginRight:D.Wfive},
    ResDishItemView3Img2:{width:D.Weighty,height:D.Htwenty,resizeMode:'contain'},

    ResDishItemView2Text1:{color:'#3d3d3d',fontWeight:'600',fontSize:D.Wsixteen,marginTop:2},
    ResDishItemView2Text2:{color:'#4a4a4a',marginTop:D.Weight,marginBottom:D.Weight,fontSize:D.Wfourteen,fontWeight:'500'},

    ResDishItemView4:{flexDirection:'row',alignItems:'center',marginBottom:D.Wten},
    ResDishItemView4Img1:{width:D.Wtwelve,height:D.Htwelve,resizeMode:'contain',marginRight:D.Wfive},
    ResDishItemView4Text1:{color:'#0b6b02',fontWeight:'800',fontSize:D.Wthirteen,marginRight:D.Wfive},
    ResDishItemView4Text2:{color:'grey',fontSize:D.Wtwelve},

    ResDishItemView2Text3:{color:'#737373',fontWeight:'400',fontSize:D.Wfourteen},

    ResDishItemView5Img:{width:D.Wonesixty,height:D.Honefourty},
    ResDishItemView5Text:{backgroundColor:'white',padding:D.Wten,position:'absolute',top:D.Woneten,left:D.Wtwenty,borderWidth:1,borderColor:'lightgrey',width:D.WoneTwenty,borderRadius:10,color:'#25a120',fontWeight:'800',fontSize:D.Wsixteen,textAlign:"center"},



})