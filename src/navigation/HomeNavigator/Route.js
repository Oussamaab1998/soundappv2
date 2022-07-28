//---------- imports

// react
import * as React from "react";

// navigations
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Songs from "../../container/Home/Subliminals/Songs";
import AudioPlayer from "../../container/Home/Subliminals/AudioPlayer";
import Home from "../../container/Home/Home";
import Subliminals from "../../container/Home/Subliminals/Subliminals";
import CategoryList from "../../container/Home/Subliminals/categoryList";
import MusicScreen from "../../container/Home/Subliminals/MusicScreen";
import TermsAndService from "../../container/Home/Subliminals/TermsAndService";
import PrivacyPolicy from "../../container/Home/Subliminals/PrivacyPolicy";
import Disclaimer from "../../container/Home/Subliminals/Disclaimer";

// drawer contents
import DrawerContent from "../../container/DrawerContent";

// heler
import { WHITE } from "../../constants/Colors";
import Instructions from "../../container/Home/Instructions";
import HowItWorks from "../../container/Home/HowItWorks";

// global stack veriable
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//---------- main app / component

function HomeNavigation(props) {
  //---------- return main view

  return (
    <Stack.Navigator initialRouteName={"HomeScreen"}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Songs"
        component={Songs}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="audioPlayer"
        component={AudioPlayer}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="SubliminalsScreen"
        component={Subliminals}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="categoryListScreen"
        component={CategoryList}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="MusicScreen"
        component={MusicScreen}
      />
<<<<<<< HEAD
      <Stack.Screen
=======





<Stack.Screen
>>>>>>> f54539821375638cd54388ba5049571d7dc7b972
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
<<<<<<< HEAD
        name="Instructions"
        component={Instructions}
      />
      <Stack.Screen
=======
        name="TermsAndService"
        component={TermsAndService}
      />

<Stack.Screen
>>>>>>> f54539821375638cd54388ba5049571d7dc7b972
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
<<<<<<< HEAD
        name="howItWorks"
        component={HowItWorks}
      />
=======
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />

<Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Disclaimer"
        component={Disclaimer}
      />


>>>>>>> f54539821375638cd54388ba5049571d7dc7b972
    </Stack.Navigator>
  );
}

function Route() {
  //---------- return main view of drawer

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="HomeNavigation"
        component={HomeNavigation}
      />
    </Drawer.Navigator>
  );
}

//---------- export component

export default Route;
