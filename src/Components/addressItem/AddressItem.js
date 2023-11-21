import { View, Image, Text } from 'react-native'

import styles from './style';
export default AddressItem = ({Icon, Head, Km, Body, Share }) => {
    return (
        <View>
            <View style={styles.AddressItemView}>
                <View>
                    <View style={styles.AddressItemView2}>
                        <Image style={styles.AddressItemView2Img} source={{ uri: Icon }}></Image>
                        <Text style={styles.AddressItemView2Text}>{Head}</Text>
                        <View>
                            <Text style={styles.Dot}>.</Text>
                            <Text style={styles.Space}> </Text>
                        </View>
                        <Text style={styles.AddressItemView2Text2}>{Km}</Text>
                    </View>
                    <Text style={styles.AddressItemBody}>{Body}</Text>
                </View>
                <Image style={styles.AddressItemImg} source={{ uri: Share }}></Image>
            </View>
        </View>
    );
};
