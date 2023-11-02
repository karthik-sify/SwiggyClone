import { Image } from 'react-native';

const heart=  Image.resolveAssetSource(require('../Assests/heart.png')).uri
const onelite=  Image.resolveAssetSource(require('../Assests/onelite2.jpg')).uri
const greenStar=  Image.resolveAssetSource(require('../Assests/greenStar.png')).uri
const freedelivery= Image.resolveAssetSource(require('../Assests/freedelivery.png')).uri
const bestseller= Image.resolveAssetSource(require('../Assests/bestseller.png')).uri
const nonveg=Image.resolveAssetSource(require('../Assests/nonveg.png')).uri
const star2=Image.resolveAssetSource(require('../Assests/star2.png')).uri
const locationarrow=Image.resolveAssetSource(require('../Assests/locationarrow.webp')).uri
const homegrey=Image.resolveAssetSource(require('../Assests/homegrey.png')).uri
const share=Image.resolveAssetSource(require('../Assests/share.png')).uri






const food1 = Image.resolveAssetSource(require('../Assests/food1.png')).uri
const food2 = Image.resolveAssetSource(require('../Assests/food2.png')).uri
const food3 = Image.resolveAssetSource(require('../Assests/food3.png')).uri
const food4 = Image.resolveAssetSource(require('../Assests/food4.png')).uri
const food5 = Image.resolveAssetSource(require('../Assests/food5.png')).uri
const food6 = Image.resolveAssetSource(require('../Assests/food6.png')).uri
const food7 = Image.resolveAssetSource(require('../Assests/food7.png')).uri
const food8 = Image.resolveAssetSource(require('../Assests/food8.png')).uri
const food9 = Image.resolveAssetSource(require('../Assests/food9.png')).uri
const food10 = Image.resolveAssetSource(require('../Assests/food10.png')).uri
const food11 = Image.resolveAssetSource(require('../Assests/food11.png')).uri
const food12 = Image.resolveAssetSource(require('../Assests/food12.png')).uri
const food13= Image.resolveAssetSource(require('../Assests/food13.png')).uri


const foodbg1=Image.resolveAssetSource(require('../Assests/foodbg1.jpg')).uri
const foodbg2=Image.resolveAssetSource(require('../Assests/foodbg2.jpg')).uri
const foodbg3=Image.resolveAssetSource(require('../Assests/foodbg3.jpg')).uri
const foodbg4=Image.resolveAssetSource(require('../Assests/foodbg4.jpg')).uri
const foodbg5=Image.resolveAssetSource(require('../Assests/foodbg5.jpg')).uri
const foodbg6=Image.resolveAssetSource(require('../Assests/foodbg6.jpg')).uri

const axis=Image.resolveAssetSource(require('../Assests/axis.jpg')).uri
const federal=Image.resolveAssetSource(require('../Assests/federal.png')).uri
const rupay=Image.resolveAssetSource(require('../Assests/rupay.png')).uri
const idbi=Image.resolveAssetSource(require('../Assests/idbi.png')).uri
const idfc=Image.resolveAssetSource(require('../Assests/idfc.png')).uri
const kotak=Image.resolveAssetSource(require('../Assests/kotak.png')).uri






const CarouselObject = [
    {
        Heading: "Flat ₹150 OFF*",
        Body: "On Orders Starting at ₹299",
        StartColor: "#ab0e0e",
        EndColor: "#c47474",
        FoodImage: food1,
    },
    {
        Heading: "Up TO 40% OFF*",
        Body: "On Amazing Delights From McDonald's",
        StartColor: "#c27511",
        EndColor: "#cca066",
        FoodImage: food2,
    },
    {
        Heading: "Buy 1 Get 1 Free*",
        Body: "On delicious Delights From Burger King",
        StartColor: "#9e1189",
        EndColor: "#ba7fb1",
        FoodImage: food3,
    },
    {
        Heading: "Flat ₹150 OFF*",
        Body: "On Orders Starting at ₹299",
        StartColor: "#ab0e0e",
        EndColor: "#c47474",
        FoodImage: food1,
    },
    {
        Heading: "Up TO 40% OFF*",
        Body: "On Amazing Delights From McDonald's",
        StartColor: "#c27511",
        EndColor: "#cca066",
        FoodImage: food2,
    },
    {
        Heading: "Buy 1 Get 1 Free*",
        Body: "On delicious Delights From Burger King",
        StartColor: "#9e1189",
        EndColor: "#ba7fb1",
        FoodImage: food3,
    },
];

const Restuarants = [
    {
        Hotel: "Anjappar",
        Rating: "3.9",
        Mins: "23 mins",
        Type: "Chettinad",
        Off: "50% OFF",
        Upto: "UPTO ₹100",
        FoodImage:foodbg1,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
    },
    {
        Hotel: "Salem RR Briyani",
        Rating: "3.9",
        Mins: "29 mins",
        Type: "Briyani",
        Off: "20% OFF",
        Upto: "UPTO ₹50",
        FoodImage:foodbg2,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
    },
    {
        Hotel: "KFC",
        Rating: "4.1",
        Mins: "23 mins",
        Type: "Burgers",
        Off: "40% OFF",
        Upto: "UPTO ₹80",
        FoodImage:foodbg3,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
    },
    {
        Hotel: "Buhari Hotel",
        Rating: "4.2",
        Mins: "28 mins",
        Type: "Chettinad",
        Off: "50% OFF",
        Upto: "UPTO ₹100",
        FoodImage:foodbg4,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
    },
    {
        Hotel: "Khalids Briyani",
        Rating: "3.9",
        Mins: "27 mins",
        Type: "Briyani",
        Off: "20% OFF",
        Upto: "UPTO ₹50",
        FoodImage:foodbg5,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
    },

];


const Dishes1 = [
    {
        Dish: "Roll",
        DishImage:food1,
    },
    {
        Dish: "Pizza",
        DishImage:food2,
    },
    {
        Dish: "Fries",
        DishImage:food3,
    },
    {
        Dish: "Kebab",
        DishImage:food6,
    },
    {
        Dish: "Chicken Fry",
        DishImage:food5,
    },
    {
        Dish: "Fries",
        DishImage:food4,
    },
];

const Dishes2 = [
    {
        Dish: "Briyani",
        DishImage:food7,
    },
    {
        Dish: "Honey Chicken",
        DishImage:food8,
    },
    {
        Dish: "Veggies",
        DishImage:food9,
    },
    {
        Dish: "Maggi",
        DishImage:food10,
    },
    {
        Dish: "Noodles",
        DishImage:food11,
    },
    {
        Dish: "FriedRice",
        DishImage:food12,
    },
];

const HoriRestuarants = [
    {
        Hotel: "Anjappar",
        Rating: "3.9 (1K+)",
        Mins: "23 mins",
        Type: "Chettinad, SouthIndian",
        Location:"Pammal 2.1 km",
        Off: "50% OFF",
        Upto: "UPTO ₹100",
        FoodImage:foodbg1,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
        FreeDelivery:freedelivery,
    },
    {
        Hotel: "Salem RR Briyani",
        Rating: "3.9 (1K+)",
        Mins: "29 mins",
        Type: "Briyani, SouthIndian",
        Location:"Tambaram 5.3 km",
        Off: "20% OFF",
        Upto: "UPTO ₹50",
        FoodImage:foodbg2,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
        FreeDelivery:freedelivery,
    },
    {
        Hotel: "KFC",
        Rating: "4.1 (1K+)",
        Mins: "23 mins",
        Type: "Burgers, American",
        Location:"Pallavaram 4.5 km",
        Off: "40% OFF",
        Upto: "UPTO ₹80",
        FoodImage:foodbg3,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
        FreeDelivery:freedelivery,
    },
    {
        Hotel: "Buhari Hotel",
        Rating: "4.2 (1K+)",
        Mins: "28 mins",
        Type: "Chettinad, SouthIndian",
        Location:"Chrompet 6.4 km",
        Off: "50% OFF",
        Upto: "UPTO ₹100",
        FoodImage:foodbg4,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
        FreeDelivery:freedelivery,
    },
    {
        Hotel: "Khalids Briyani",
        Rating: "3.9 (1K+)",
        Mins: "27 mins",
        Type: "Briyani ,SouthIndian",
        Location:"Taramani 8.1 km",
        Off: "20% OFF",
        Upto: "UPTO ₹50",
        FoodImage:foodbg5,
        Heart:heart,
        Onelite:onelite,
        GreenStar:greenStar,
        FreeDelivery:freedelivery,
    },

];


const ResCarouselData = [
    {
        Image:federal,
        Head: "20% off upto ₹125",
        Body:"USE FEDERAL | ABOVE ₹599",
    },
    {
        Image:kotak,
        Head: "15% off upto ₹150",
        Body:"NO CODE REQUIRED | ABOVE ₹499",
    },
    {
        Image:idfc,
        Head: "10% off upto ₹250",
        Body:"NO CODE REQUIRED | ABOVE ₹399",
    },
    {
        Image:axis,
        Head: "20% off upto ₹200",
        Body:"USE AXISIT | ABOVE ₹199",
    },
    {
        Image:rupay,
        Head: "10% off upto ₹50",
        Body:"USE SWIGGYIT | ABOVE ₹299",
    },
    {
        Image:idbi,
        Head: "10% off upto ₹250",
        Body:"NO CODE REQUIRED | ABOVE ₹399",
    },
    
];

const RestaurantDishData = [
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Chicken Dum Briyani",
        Rate:"₹290",
        Star:star2,
        Rating:"4.2",
        Count:"(8876)",
        Body:"Slow cooked aromatic rice layered with marinated...",
        Food:foodbg1
    },
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Chicken Fried Rice",
        Rate:"₹260",
        Star:star2,
        Rating:"4.2",
        Count:"(3193)",
        Body:"A slightly spicy dish made by tossing juicy chicken and...",
        Food:foodbg2
    },
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Chicken Schezwan Fried Rice",
        Rate:"₹270",
        Star:star2,
        Rating:"4.3",
        Count:"(2960)",
        Body:"Fried rice is hot and spicy with bursting flavours of ginger...",
        Food:foodbg3
    },
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Mutton Dum Briyani",
        Rate:"₹370",
        Star:star2,
        Rating:"4.1",
        Count:"(2172)",
        Body:"Slow cooked aromatic rice layered with marinated...",
        Food:foodbg4
    },
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Chicken Barbeque",
        Rate:"₹310",
        Star:star2,
        Rating:"4.2",
        Count:"(8876)",
        Body:"Chicken marinated in black pepper flavored seasoned ...",
        Food:foodbg5
    },
    {
        NonVeg:nonveg,
        Bestseller:bestseller,
        Head: "Chicken Noodles",
        Rate:"₹290",
        Star:star2,
        Rating:"4.2",
        Count:"(8876)",
        Body:"Slow cooked aromatic rice layered with marinated...",
        Food:foodbg6
    },

];

const AddressData = [
    {
        Icon:homegrey,
        Head:"Home",
        Km:"13.4 km",
        Body:"49, Near old police Station, Shankar Nagar, Pammal...",
        Share:share,
    },
    {
        Icon:locationarrow,
        Head:"Others",
        Km:"12.6 km",
        Body:"Lakshimi Andal Maligai, Opposite To Rela Institute...",
        Share:share,
    },
    {
        Icon:locationarrow,
        Head:"Other",
        Km:"15.9 km",
        Body:"No 4 Rajiv Gandhi Salai, Taramani, Chennai...",
        Share:share,
    },
    


];


export {CarouselObject,Restuarants,Dishes1,Dishes2,HoriRestuarants,ResCarouselData,RestaurantDishData,AddressData};