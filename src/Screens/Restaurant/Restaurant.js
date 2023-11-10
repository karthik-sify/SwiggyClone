import React, { useState } from "react";
import { Image, View, Text, ScrollView,FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel from 'react-native-snap-carousel'
import styles from "./style";

const back = require('../../Assests/back.png')
const GreenStar = require('../../Assests/greenStar.png')
const info = require('../../Assests/info.png')
const share = require('../../Assests/share.png')
const heartGrey = require('../../Assests/heartgrey.png')
const fromto = require('../../Assests/fromto.png')
const triangle = require('../../Assests/triangle.png')
const onelite = require('../../Assests/onelite2.jpg')
const search = require('../../Assests/search.png')
const mic = require('../../Assests/mic.png')

import { ResCarouselData } from "../../Services/DB";
import ResCarouselItem from "../../Components/ResCarouselItem";
import RestaurantDishItem from "../../Components/RestaurantDishitem";
import { RestaurantDishData } from "../../Services/DB";


export default Restaurant = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <TopPortion></TopPortion>
            <ResCarousel styles={styles} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}></ResCarousel>
            <Menu></Menu>
            <SearchBar></SearchBar>
            <Filters></Filters>
            <View style={styles.line2}></View>
            <Text style={styles.TrustedPick}>Recommended (19)</Text>
            <ResDish></ResDish>
        </ScrollView>
    );
};

const TopPortion = () => {
    return (
        <View style={styles.TopPortion}>
            <Image source={back} style={styles.back}></Image>

            <View style={styles.infos}>

                <View style={styles.TopPortion2}>
                    <Text style={styles.Zaitoon}>Zaitoon</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.share} source={share}></Image>
                        <Image style={styles.heartGrey} source={heartGrey}></Image>
                    </View>
                </View>

                <View style={styles.ExpResInfo}>
                    <Image style={styles.ExpGreenStar} source={GreenStar}></Image>
                    <Text style={styles.ExpRating}>4.2(10K+ ratings)</Text>
                    <Image style={styles.infoImg} source={info}></Image>
                    <View>
                        <Text style={styles.ExpDot}>.</Text>
                        <Text style={styles.ExpSpace}> </Text>
                    </View>
                    <Text style={styles.ExpRating}>₹500 for two</Text>
                </View>

                <Text style={styles.ExpType}>Briyani, Juices</Text>

                <View style={styles.line}></View>

                <View style={styles.fromtoview}>
                    <Image style={styles.fromto} source={fromto}></Image>
                    <View>
                        <View style={styles.fromView}>
                            <Text style={styles.fromtoText}>Outlet   </Text>
                            <Text style={styles.ExpType}>Tambaram</Text>
                            <Image style={styles.Triangle} source={triangle}></Image>
                        </View>
                        <View style={styles.flexDirection}>
                            <Text style={styles.fromtoText}>51 mins</Text>
                            <Text style={styles.ExpType}>Delivery to Home</Text>
                            <Image style={styles.Triangle} source={triangle}></Image>
                        </View>
                    </View>
                </View>

                <View style={styles.line}></View>

                <View style={styles.fromtoview}>
                    <Image style={styles.ExpGreenStar} source={info}></Image>
                    <View style={styles.flexDirection}>
                        <Text style={styles.ExpRating}> Far (4.3 kms)</Text>
                        <Text style={styles.ExpType}> | Additional delivery fee will apply</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <LinearGradient colors={['rgba(256, 256, 256, 1)', 'rgba(240, 183, 182, 0.3)']} start={{ x: 0.80, y: 1 }} end={{ x: 1, y: 1 }} style={{ padding: 10 }}>
                    <View style={styles.flexDirection}>
                        <Image style={styles.onelite} source={onelite}></Image>

                        <Text style={styles.freeDelivery}>Free Delivery</Text>

                    </View>
                </LinearGradient>
            </View>



        </View>
    )
}

const ResCarousel = ({ styles, currentIndex, setCurrentIndex }) => {
    return (
        <View style={styles.ResCarouselView}>
            <Carousel
                data={ResCarouselData}
                renderItem={({ item }) => (
                    <ResCarouselItem image={item.Image} head={item.Head} body={item.Body} styles={styles}></ResCarouselItem>
                )}
                sliderWidth={400}
                itemWidth={400}
                onSnapToItem={(index) => setCurrentIndex(index)}
                autoplay
                loop
            />
            <View>
                <Text style={styles.index}> {currentIndex + 1}/{ResCarouselData.length}</Text>
                <View style={styles.CaroDotView}>
                    <View style={styles.DotSide}></View>
                    <View style={styles.DotCenter}></View>
                    <View style={styles.DotSide}></View>
                </View>
            </View>
        </View>
    );
};

const Menu=()=>{
    const menuleft=require('../../Assests/menuleft.png');
    const menuright=require('../../Assests/menuright.png');

    return(
        <View style={styles.MenuView}>
            <Image source={menuleft} style={styles.MenuLeftImg} ></Image>
            <Text style={styles.MenuText}>M E N U</Text>
            <Image source={menuright} style={styles.MenuRightImg} ></Image>
        </View>
    );
};

const SearchBar = () => {
    return (
        <View style={styles.SearchBar}>
            <Text style={styles.searchText}>                                Search for dishes</Text>
            <View style={styles.searchImageView}>
                <Image source={search} style={styles.searchImage}></Image>
                <Text style={styles.searchText2}>|</Text>
                <Image source={mic} style={styles.searchImage}></Image>
            </View>
        </View>
    )
}

const Filters = () => {
    return (
        <ScrollView horizontal={true} style={{marginTop:10}}>
            <Text style={styles.Reorder2}>guiltfree</Text>
            <Text style={styles.Reorder2}>Bestseller </Text>
            <Text style={styles.Reorder2}>Veg</Text>
            <Text style={styles.Reorder2}>Non Veg</Text>
        </ScrollView>
    )
}

const ResDish = () => {
    return (
            <FlatList
                data={RestaurantDishData}
                keyExtractor={(item, index) => index.toString()}
                style={styles.ResDish}
                renderItem={({ item }) => (
                    <RestaurantDishItem styles={styles} nonveg={item.NonVeg} bestseller={item.Bestseller} head={item.Head} rate={item.Rate} star={item.Star} rating={item.Rating} count={item.Count} body={item.Body} food={item.Food} >  </RestaurantDishItem>
                )}
            />
    )
}