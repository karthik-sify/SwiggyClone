import { View, Image, Text } from 'react-native'
export default AddressItem = ({ styles, Icon, Head, Km, Body, Share }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row' ,justifyContent:'space-between',margin:15,alignItems:'center'}}>
                <View>
                    <View style={{ flexDirection: 'row' ,alignItems:"center"}}>
                        <Image style={{width:15,height:15,resizeMode:'contain',marginRight:5}} source={{ uri: Icon }}></Image>
                        <Text style={{color:'#4a4a4a',fontWeight:'700'}}>{Head}</Text>
                        <View>
                            <Text style={styles.Dot}>.</Text>
                            <Text style={styles.Space}> </Text>
                        </View>
                        <Text style={{color:'grey',fontSize:13,fontWeight:"600",marginLeft:5}}>{Km}</Text>
                    </View>
                    <Text style={{color:'grey',fontSize:13,}}>{Body}</Text>
                </View>
                <Image style={{width:18,height:18,resizeMode:'contain'}} source={{ uri: Share }}></Image>
            </View>
        </View>
    );
};