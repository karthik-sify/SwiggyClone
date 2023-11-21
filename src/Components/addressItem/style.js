import { StyleSheet } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    AddressItemView:{ flexDirection: 'row' ,justifyContent:'space-between',margin:D.Wfifteen,alignItems:'center'},
    AddressItemView2:{ flexDirection: 'row' ,alignItems:"center"},
    AddressItemView2Img:{width:D.Wfifteen,height:D.Hfifteen,resizeMode:'contain',marginRight:D.Wfive},
    AddressItemView2Text:{color:'#4a4a4a',fontWeight:'700'},
    AddressItemView2Text2:{color:'grey',fontSize:D.Wthirteen,fontWeight:"600",marginLeft:D.Wfive},
    AddressItemBody:{color:'grey',fontSize:D.Wthirteen,},
    AddressItemImg:{width:D.Weighteen,height:D.Heighteen,resizeMode:'contain'},
})