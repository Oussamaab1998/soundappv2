//---------- imports

// react
import React, { useEffect, useState } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigator/AuthNavigation";
import Route from "./HomeNavigator/Route";
import { useDispatch, useSelector } from "react-redux";
// global stack veriable
const Stack = createStackNavigator();

const mapState = ({ localReducer }) => ({
  isLoggedIn: localReducer.isLoggedIn,
});

//---------- main app / component

function StackNaviagtion(props) {
  const { isLoggedIn } = useSelector(mapState);
  // temp veriable for navigation change
  // let isLogin = false;

  //---------- return main view
  useEffect(() => {
    console.log("Is Logged In =>", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Stack.Navigator initialRouteName="AuthNavigator">
      {/* <Stack.Screen
        options={{ headerShown: false }}

        name="Route"
        component={Route} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthNavigator"
        component={AuthNavigation} /> */}

      {isLoggedIn ? (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Route"
          component={Route}
        />
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthNavigator"
          component={AuthNavigation}
        />
      )}
    </Stack.Navigator>
  );
}

//---------- export component

export default StackNaviagtion;
