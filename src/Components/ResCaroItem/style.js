import { StyleSheet } from "react-native";
import D from "../../Utils/Dimensions";

export default styles=StyleSheet.create({
    ResCaroItemView:{flexDirection:'row'},
    ResCaroItemImg:{width:D.Wfourty,height:D.Hfourty,resizeMode:'contain',marginRight:D.Wten},
    ResCaroItemText1:{color:'black',fontWeight:'800',fontSize:D.Weighteen,marginBottom:2},
    ResCaroItemText2:{color:'grey',fontWeight:'700',fontSize:D.Wtwelve}
})