import { StyleSheet } from "react-native"
import D from "../../Utils/Dimensions"

export default styles=StyleSheet.create({
    CarouselItem: {width:D.Wthreefifty,height:D.Htwotwenty,borderRadius:15,marginLeft:D.Wfifteen},
    TextAndImage:{flex:1,flexDirection:'row'},
    Texts:{flex:1,justifyContent:'space-evenly'},
    foodImage:{width:D.Woneseventy,height:D.Honeseventy,alignSelf:'flex-end',resizeMode:'contain'},
    Text1:{marginLeft:D.Wfifteen,fontSize:D.Wtewntytwo,fontWeight:'900',color:'white',width:D.Wtwofifty},
    Text2:{marginLeft:D.Wfifteen,fontSize:D.Wsixteen,fontWeight:'400',color:'white',width:D.Wtwohundred},
    Text3:{marginLeft:D.Wfifteen,backgroundColor:'white',fontSize:D.Wsixteen,fontWeight:'900',padding:D.Wten,borderRadius:10,width:D.WoneTwenty,textAlign:'center'},
})
