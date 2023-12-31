import { useState } from "react";
import { View, Image, Text, StatusBar, FlatList, ScrollView, Pressable } from "react-native";

const back = require('../../Assests/back.png')
const search = require('../../Assests/search.png')
const homePic = require('../../Assests/homepic.png')
const locationpin = require('../../Assests/locationpin.png')

import styles from "./style";
import Strings from "../../Utils/Strings";

import AddressItem from "../../Components/addressItem/AddressItem";
import { AddressData } from "../../Services/DB";



export default Location = ({navigation}) => {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}></StatusBar>
            <TopBar></TopBar>
            <Search></Search>
            <CurrentLocation navigation={navigation}></CurrentLocation>
            <View style={styles.line}></View>
            <Text style={styles.SavedAdd}>{Strings.SavedAdd}</Text>
            <Addresses></Addresses>
            <Text style={styles.ViewMore}>{Strings.ViewMore}</Text>
            <View style={styles.line}></View>
            <Text style={styles.RecentSearch}>{Strings.RecentSearches}</Text>
            <RecentSearch></RecentSearch>

        </ScrollView>
    );
};




const TopBar = () => {
    return (
        <View style={styles.TopBarView}>
            <Image source={back} style={styles.TopBarImg}></Image>
            <Text style={styles.TopBarTxt}>{Strings.LocationAdd}</Text>
        </View>
    );
};

const Search = () => {
    return (
        <View style={styles.SearchBar}>
            <Image source={search} style={styles.searchImage}></Image>
            <Text style={styles.searchText}>{Strings.LocationSearch}</Text>
        </View>
    );
};

const CurrentLocation = ({navigation}) => {
    return (
        <Pressable onPress={()=>navigation.navigate("MapComponent")}>
            <View style={styles.CurrentLocationView}>
                <Image source={homePic} style={styles.CurrentLocationImg}></Image>
                <Text style={styles.CurrentLocationText}>{Strings.CurrentLoc}</Text>
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
                <AddressItem  Icon={item.Icon} Head={item.Head} Km={item.Km} Body={item.Body} Share={item.Share}></AddressItem>
            )}
        />
    );
};

const RecentSearch = () => {
    return (
        <View style={{ margin: 15 }}>
            <View style={styles.RecentSearchView}>
                <Image style={styles.RecentSearchImg} source={locationpin}></Image>
                <Text style={styles.RecentSearchText}>{Strings.TidelPark}</Text>
            </View>
            <Text style={styles.RecentSearchText2}>{Strings.RecentText1}</Text>
        </View>
    )
}