import {View,Image,Text} from 'react-native'
import styles from './style';
export default ResCarouselItem=({image,head,body})=>{
    return(
        <View style={styles.ResCaroItemView}>
            <Image source={{uri:image}} style={styles.ResCaroItemImg}></Image>
            <View>
                <Text style={styles.ResCaroItemText1}>{head}</Text>
                <Text style={styles.ResCaroItemText2}>{body}</Text>
            </View>

        </View>
    );
};