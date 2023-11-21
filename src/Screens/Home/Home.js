import React, { useState } from "react";
import { Text, View, ScrollView, Image, StatusBar, FlatList, Pressable } from "react-native";
import Carousel from 'react-native-snap-carousel'

//UTILS
import Strings from "../../Utils/Strings";
//COMPONENTS
import OfferZoneComponent from "../../Components/OfferZoneComp/OfferZoneComponent";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import RestuarantItem from "../../Components/ResItem/RestuarantItem";
import DishItem from "../../Components/DishItem/Dishitem";
import HorizontalResturantItem from "../../Components/HoriResItem/HorizontalResturantItem";

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
            <Text style={styles.TrustedPick}>{Strings.TrustedPick}</Text>
            <Text style={styles.Reorder}>{Strings.ReOrder}</Text>
            <ReOrder navigation={navigation}></ReOrder>
            <Text style={styles.TrustedPick}>Karthik, {Strings.OnMind}</Text>
            <Dish navigation={navigation}></Dish>
            <TryNew></TryNew>
            <Text style={styles.TrustedPick}>{Strings.QuickPick}</Text>
            <QuickPickHead></QuickPickHead>
            <ReOrder navigation={navigation}></ReOrder>
            <SeeMoreRestuarants></SeeMoreRestuarants>
            <Filters></Filters>
            <Text style={styles.TrustedPick}>{Strings.ResToExplore}</Text>
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
                <Text style={styles.HomeText}>{Strings.Home} </Text>
            </View>
            <Text style={styles.AddressStyle}>{Strings.Address}</Text>
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
            <Text style={styles.searchText}>{Strings.SearchText}</Text>
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
            <OfferZoneComponent OfferZoneText={"Offer Zone"} OfferZoneImage={offer1} ></OfferZoneComponent>
            <OfferZoneComponent OfferZoneText={"Gourmet"} OfferZoneImage={offer2} > </OfferZoneComponent>
            <OfferZoneComponent OfferZoneText={"Guiltfree"} OfferZoneImage={offer3}></OfferZoneComponent>
        </View>
    )
}

const CarouselImage = ({ setCurrentIndex, index }) => {
    return (
        <View style={styles.Carousel}>
            <Carousel
                data={CarouselObject}
                renderItem={({ item }) => (
                    <CarouselItem startColor={item.StartColor} endColor={item.EndColor} foodImage={item.FoodImage} heading={item.Heading} body={item.Body}></CarouselItem>
                )}
                sliderWidth={410}
                itemWidth={360}
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
                    } FoodImage={item.FoodImage} Heart={item.Heart} Onelite={item.Onelite} GreenStar={item.GreenStar}></RestuarantItem>
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
                    <Text style={styles.TryNewText1}>{Strings.TryNew1}</Text>
                    <Text style={styles.TryNewText2}>{Strings.New}</Text>
                    <Text style={styles.TryNewText3}>{Strings.TryWhatToEat}</Text>
                </View>
                <Image style={styles.TryNewImg} source={drooling}></Image>
            </View>

        </View>
    )
}
const QuickPickHead = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Reorder}>{Strings.GetItQuickly}</Text>
            <Text style={styles.Reorder2}>{Strings.PureVeg}</Text>
            <Text style={styles.Reorder2}>{Strings.PopularBrands}</Text>
        </View>
    )
}

const SeeMoreRestuarants = () => {
    return (
        <View style={styles.SeeMoreRestuarantsView}>
            <Text style={styles.SeeMoreRestuarantsText}>{Strings.SeeMoreRestuarants}</Text>
            <Text style={styles.SeeMoreRestuarantsText2}>{'  >'}</Text>
        </View>
    )
}
const Filters = () => {
    return (
        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
            <Text style={styles.Reorder2}>{Strings.Filter}</Text>
            <Text style={styles.Reorder2}>{Strings.SortBy}</Text>
            <Text style={styles.Reorder2}>{Strings.FastDelivery}</Text>
            <Text style={styles.Reorder2}>{Strings.Cuisines}</Text>
            <Text style={styles.Reorder2}>{Strings.NewOnSwiggy}</Text>
            <Text style={styles.Reorder2}>{Strings.PureVeg}</Text>
            <Text style={styles.Reorder2}>{Strings.Rate}</Text>
            <Text style={styles.Reorder2}>{Strings.Less}</Text>
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
                    } FoodImage={item.FoodImage} Heart={item.Heart} GreenStar={item.GreenStar} Location={item.Location} FreeDelivery={item.FreeDelivery}></HorizontalResturantItem>
                </Pressable>
            )}
        />
    );
};

export { Explore, Home, Filters,SearchBar };
