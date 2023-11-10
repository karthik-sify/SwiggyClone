import React, { useState } from "react";
import { Text, View, ScrollView, Image, StatusBar, FlatList, Pressable } from "react-native";
import Carousel from 'react-native-snap-carousel'


//COMPONENTS
import OfferZoneComponent from "../../Components/OfferZoneComponent";
import CarouselItem from "../../Components/CarouselItem";
import RestuarantItem from "../../Components/RestuarantItem";
import DishItem from "../../Components/Dishitem";
import HorizontalResturantItem from "../../Components/HorizontalResturantItem";

//SERVICES
import { CarouselObject, Restuarants, Dishes1, Dishes2, HoriRestuarants } from "../../Services/DB";

//STYLES
import styles from "./style3";

//IMAGES
const homePic = require('../../Assests/homepic.png')
const buyone = require('../../Assests/buyone.jpg')
const profile = require('../../Assests/profile.jpg')
const search = require('../../Assests/search.png')
const mic = require('../../Assests/mic.png')
const offer1 = require('../../Assests/offer1.webp')
const offer2 = require('../../Assests/food1.png')
const offer3 = require('../../Assests/food3.png')
const drooling = require('../../Assests/drooling.png')

const Home = ({ navigation }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <ScrollView style={styles.BasePageStyle}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'white'}></StatusBar>
            <TopBar navigation={navigation}></TopBar>
            <SearchBar></SearchBar>
            <OfferZone></OfferZone>
            <CarouselImage setCurrentIndex={setCurrentIndex} index={currentIndex}></CarouselImage>
            <Text style={styles.TrustedPick}>Your trusted picks</Text>
            <Text style={styles.Reorder}>Reorder</Text>
            <ReOrder navigation={navigation}></ReOrder>
            <Text style={styles.TrustedPick}>Karthik, what's on your mind?</Text>
            <Dish navigation={navigation}></Dish>
            <TryNew></TryNew>
            <Text style={styles.TrustedPick}>Quick picks for you</Text>
            <QuickPickHead></QuickPickHead>
            <ReOrder navigation={navigation}></ReOrder>
            <SeeMoreRestuarants></SeeMoreRestuarants>
            <Filters></Filters>
            <Text style={styles.TrustedPick}>1113 restuarants to explore</Text>
            <Explore navigation={navigation}></Explore>




        </ScrollView>
    );
};

const AddressBar = ({navigation}) => {
    return (
        <View>
            <Pressable onPress={()=>navigation.navigate("Location")}>
            <View style={styles.HomeStyle}>
                <Image source={homePic} style={styles.HomeImage} resizeMode="contain"></Image>
                <Text style={styles.HomeText}>Home </Text>
            </View>
            <Text style={styles.AddressStyle}>39,1st cross Street,tidel park,chennai...</Text>
            </Pressable>
        </View>
    );
};
const TopBar = ({navigation}) => {
    return (
        <View style={styles.TopBarStyle}>
            <AddressBar navigation={navigation}></AddressBar>
            <View style={styles.TopBarImages}>
                <Image source={buyone} style={styles.buyoneImage} resizeMode="contain"></Image>
                <Image source={profile} style={styles.profileImage} resizeMode="contain"></Image>
            </View>
        </View>
    )
}
const SearchBar = () => {
    return (
        <View style={styles.SearchBar}>
            <Text style={styles.searchText}>Search, Order, Enjoy, Repeat! </Text>
            <View style={styles.searchImageView}>
                <Image source={search} style={styles.searchImage}></Image>
                <Text style={styles.searchText2}>|</Text>
                <Image source={mic} style={styles.searchImage}></Image>
            </View>
        </View>
    )
}

const OfferZone = () => {
    return (
        <View style={styles.OfferZone}>
            <OfferZoneComponent OfferZoneText={"Offer Zone"} OfferZoneImage={offer1} styles={styles}></OfferZoneComponent>
            <OfferZoneComponent OfferZoneText={"Gourmet"} OfferZoneImage={offer2} styles={styles}> </OfferZoneComponent>
            <OfferZoneComponent OfferZoneText={"Guiltfree"} OfferZoneImage={offer3} styles={styles}></OfferZoneComponent>
        </View>
    )
}

const CarouselImage = ({ setCurrentIndex, index }) => {
    return (
        <View style={styles.Carousel}>
            <Carousel
                data={CarouselObject}
                renderItem={({ item }) => (
                    <CarouselItem startColor={item.StartColor} endColor={item.EndColor} foodImage={item.FoodImage} heading={item.Heading} body={item.Body} styles={styles}></CarouselItem>
                )}
                sliderWidth={410}
                itemWidth={350}
                onSnapToItem={(index) => setCurrentIndex(index)}
                autoplay
                loop
            />
            <View style={styles.CarouselIndexView}>
                <View style={styles.LeftDot}></View>
                <Text style={styles.CarouselText}> {index+1}/{CarouselObject.length}</Text>
                <View style={styles.CarouselText2}></View>
            </View>
        </View>
    );
};

const ReOrder = ({ navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("Restaurant")}>
            <FlatList
                data={Restuarants}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                style={{ marginLeft: 5, marginRight: 5 }}
                renderItem={({ item }) => (
                    <RestuarantItem Hotel={item.Hotel} Rating={item.Rating} Mins={item.Mins} Type={item.Type} Off={item.Off} Upto={item.Upto
                    } FoodImage={item.FoodImage} styles={styles} Heart={item.Heart} Onelite={item.Onelite} GreenStar={item.GreenStar}></RestuarantItem>
                )}
            />
        </Pressable>
    );
};

const Dish = ({ navigation }) => {
    return (
        <ScrollView
            style={{ marginBottom: 20 }}
            horizontal={true}>
            <View>
                <FlatList
                    data={Dishes1}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    //style={{marginLeft:5,marginRight:5}}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate("Dish")}>
                            <DishItem DishName={item.Dish} DishImage={item.DishImage} styles={styles}></DishItem>
                        </Pressable>
                    )}
                />
                <FlatList
                    data={Dishes2}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    //style={{marginLeft:5,marginRight:5}}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate("Dish")}>
                            <DishItem DishName={item.Dish} DishImage={item.DishImage} styles={styles}></DishItem>
                        </Pressable>
                    )}
                />
            </View>
        </ScrollView>

    );
};

const TryNew = () => {
    return (
        <View style={styles.TryNewView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.TryNewText1}>Craving for something</Text>
                    <Text style={styles.TryNewText2}>New?</Text>
                    <Text style={styles.TryNewText3}>Try WhatToEat</Text>
                </View>
                <Image style={styles.TryNewImg} source={drooling}></Image>
            </View>

        </View>
    )
}
const QuickPickHead = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Reorder}>Get it quickly</Text>
            <Text style={styles.Reorder2}>pure veg</Text>
            <Text style={styles.Reorder2}>popular Brands</Text>
        </View>
    )
}

const SeeMoreRestuarants = () => {
    return (
        <View style={styles.SeeMoreRestuarantsView}>
            <Text style={styles.SeeMoreRestuarantsText}>See More Restuarants</Text>
            <Text style={styles.SeeMoreRestuarantsText2}>{'  >'}</Text>
        </View>
    )
}
const Filters = () => {
    return (
        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
            <Text style={styles.Reorder2}>Filter</Text>
            <Text style={styles.Reorder2}>Sort by </Text>
            <Text style={styles.Reorder2}>Fast Delivery</Text>
            <Text style={styles.Reorder2}>Cuisines</Text>
            <Text style={styles.Reorder2}>New on Swiggy</Text>
            <Text style={styles.Reorder2}>Pure Veg</Text>
            <Text style={styles.Reorder2}>Rs.300-Rs.600</Text>
            <Text style={styles.Reorder2}>Less than Rs.300</Text>
        </ScrollView>
    )
}

const Explore = ({ navigation }) => {
    return (
        <FlatList
            data={HoriRestuarants}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft: 5, marginRight: 5 }}
            renderItem={({ item }) => (
                <Pressable onPress={() => navigation.navigate("Restaurant")}>
                    <HorizontalResturantItem Hotel={item.Hotel} Rating={item.Rating} Mins={item.Mins} Type={item.Type} Off={item.Off} Upto={item.Upto
                    } FoodImage={item.FoodImage} styles={styles} Heart={item.Heart} GreenStar={item.GreenStar} Location={item.Location} FreeDelivery={item.FreeDelivery}></HorizontalResturantItem>
                </Pressable>
            )}
        />
    );
};

export { Explore, Home, Filters,SearchBar };
