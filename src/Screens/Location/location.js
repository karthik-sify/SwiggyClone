import { View, Image, Text, StatusBar, FlatList, ScrollView } from "react-native";

const back = require('../../Assests/back.png')
const search = require('../../Assests/search.png')
const homePic = require('../../Assests/homepic.png')
const locationpin = require('../../Assests/locationpin.png')

import styles from "./style";

import AddressItem from "../../Components/AddressItem";
import { AddressData } from "../../Services/DB";

export default Location = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}></StatusBar>
            <TopBar></TopBar>
            <Search></Search>
            <CurrentLocation></CurrentLocation>
            <View style={styles.line}></View>
            <Text style={{ color: 'grey', fontSize: 11, marginLeft: 15, marginBottom: 15 }}>S A V E D   A D D R E S S E S</Text>
            <Addresses></Addresses>
            <Text style={{ fontWeight: '500', fontSize: 14, color: '#f56011', marginLeft: 15, marginTop: 10 }}>View More </Text>
            <View style={styles.line}></View>
            <Text style={{ color: 'grey', fontSize: 11, marginLeft: 15, marginBottom: 15 }}>R E C E N T   S E A R C H E S</Text>
            <RecentSearch></RecentSearch>

        </ScrollView>
    );
};

const TopBar = () => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image source={back} style={{ width: 50, height: 20, resizeMode: 'contain' }}></Image>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 14 }}>Enter your area or apartment name</Text>
        </View>
    );
};

const Search = () => {
    return (
        <View style={styles.SearchBar}>
            <Image source={search} style={styles.searchImage}></Image>
            <Text style={styles.searchText}>Try JP Nagar, Siri Gardenia, etc.</Text>
        </View>
    );
};

const CurrentLocation = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
            <Image source={homePic} style={{ width: 18, height: 18, marginRight: 10 }}></Image>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#f56011' }}>Use my current location</Text>
        </View>
    )
}

const Addresses = () => {
    return (
        <FlatList
            data={AddressData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <AddressItem styles={styles} Icon={item.Icon} Head={item.Head} Km={item.Km} Body={item.Body} Share={item.Share}></AddressItem>
            )}
        />
    );
};

const RecentSearch = () => {
    return (
        <View style={{margin:15}}>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginRight: 5 }} source={locationpin}></Image>
                <Text style={{ color: '#4a4a4a', fontWeight: '700' }}>Tidel Park</Text>
            </View>
            <Text style={{ color: 'grey', fontSize: 13, }}>No 4 Rajiv Gandhi Salai, Taramani, Chennai</Text>
        </View>
    )
}