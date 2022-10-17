//---------- imports

// react
import React, { useEffect, useState } from "react";
import { LogBox, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/createStore";
import { PersistGate } from "redux-persist/integration/react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from "./src/navigation/StackNavigation";

// splash screen
import SplashScreen from "react-native-splash-screen";

// helper
import NavigationService from "./src/navigation/NavigationService";


// @temp
import AudioPlayer from "./src/container/Home/Subliminals/AudioPlayer";
import TrackPlayer from "react-native-track-player";

//---------- main app / component

const App = () => {
  // ignore logs
  LogBox.ignoreAllLogs();

  //---------- life cycle

  // useEffect(() => {
  //   // SplashScreen.hide();

  //   console.log(' TrackPlayer :  ', TrackPlayer)

  //   try {

  //     TrackPlayer?.setupPlayer && TrackPlayer.setupPlayer()
  //   } catch (error) {

  //     console.log('-=-=-=-=-==-=-', error)
  //   }

  // }, []);

  //---------- return main view

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AudioPlayer /> */}
        <NavigationContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        >
          <StackNaviagtion />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

//---------- export component

export default App;
