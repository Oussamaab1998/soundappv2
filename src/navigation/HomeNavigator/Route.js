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
import ListeningTips from "../../container/Home/ListeningTips";
import FAQs from "../../container/Home/FAQ";
import Contact from "../../container/Home/Contact";
import Intellectual from "../../container/Home/Intellectual";
import Premium from "../../container/Home/Premium";
import PlayListSongs from "../../container/Home/Subliminals/PlayListSongs";

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
        name="PlayListSongs"
        component={PlayListSongs}
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
        name="premium"
        component={Premium}
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
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Instructions"
        component={Instructions}
      />
      {/* <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Testimonials"
        component={Instructions}
      /> */}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="howItWorks"
        component={HowItWorks}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="ListeningTips"
        component={ListeningTips}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="FAQs"
        component={FAQs}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Contact"
        component={Contact}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="Intellectual"
        component={Intellectual}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
        name="TermsAndService"
        component={TermsAndService}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitle: () => null,
        }}
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
