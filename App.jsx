import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  {Home}  from './src/Screens/Home/Home';
import Dish from './src/Screens/Dish/Dish';
import Restaurant from './src/Screens/Restaurant/Restaurant';
import location from './src/Screens/Location/location';
import MapComponent from './src/Screens/map/map';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <stack.Screen
          name="Dish"
          component={Dish}
          options={{ title: "Dish" }}
        />
        <stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ title: "Restaurant" }}
        />
        <stack.Screen
          name="Location"
          component={location}
          options={{ title: "Location" }}
        />
        <stack.Screen
          name="MapComponent"
          component={MapComponent}
          options={{ title: "MapComponent" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
