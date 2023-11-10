import { useState } from "react";
import { View, Image, Text, StatusBar, FlatList, ScrollView, Pressable } from "react-native";

const back = require('../../Assests/back.png')
const search = require('../../Assests/search.png')
const homePic = require('../../Assests/homepic.png')
const locationpin = require('../../Assests/locationpin.png')

import styles from "./style";

import AddressItem from "../../Components/AddressItem";
import { AddressData } from "../../Services/DB";



export default Location = ({navigation}) => {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}></StatusBar>
            <TopBar></TopBar>
            <Search></Search>
            <CurrentLocation navigation={navigation}></CurrentLocation>
            <View style={styles.line}></View>
            <Text style={styles.SavedAdd}>S A V E D   A D D R E S S E S</Text>
            <Addresses></Addresses>
            <Text style={styles.ViewMore}>View More </Text>
            <View style={styles.line}></View>
            <Text style={styles.RecentSearch}>R E C E N T   S E A R C H E S</Text>
            <RecentSearch></RecentSearch>

        </ScrollView>
    );
};




const TopBar = () => {
    return (
        <View style={styles.TopBarView}>
            <Image source={back} style={styles.TopBarImg}></Image>
            <Text style={styles.TopBarTxt}>Enter your area or apartment name</Text>
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

const CurrentLocation = ({navigation}) => {
    return (
        <Pressable onPress={()=>navigation.navigate("MapComponent")}>
            <View style={styles.CurrentLocationView}>
                <Image source={homePic} style={styles.CurrentLocationImg}></Image>
                <Text style={styles.CurrentLocationText}>Use my current location</Text>
            </View>
        </Pressable>
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
        <View style={{ margin: 15 }}>
            <View style={styles.RecentSearchView}>
                <Image style={styles.RecentSearchImg} source={locationpin}></Image>
                <Text style={styles.RecentSearchText}>Tidel Park</Text>
            </View>
            <Text style={styles.RecentSearchText2}>No 4 Rajiv Gandhi Salai, Taramani, Chennai</Text>
        </View>
    )
}