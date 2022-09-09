//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CheckBox from "react-native-check-box";

// common componets
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import NavigationService from "../../navigation/NavigationService";

// styles
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

import { show, hide } from "../../constants/Images";

// server hooks
import useServerCommunucation from "../../utils/ServerCommunication";

import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
  ResetStates,
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, storeUserId } from "../../redux/Local/local.actions";
import { findLastValidBreakpoint } from "native-base/lib/typescript/theme/tools";

import ModalContainer from "../../Common/ModalContainer";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

//---------- connect with redux state

const mapState = ({ user, localReducer }) => ({
  currentProperty: user.currentProperty,
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
  isLoggedIn: localReducer.isLoggedIn,
});

//---------- component

function Login({ navigation }) {
  //---------- state, veriable and hooks

  // hook
  const { serverRequest, dataPocket, loading, error } =
    useServerCommunucation();

  const { currentProperty, propertySignInSuccess, errors } =
    useSelector(mapState);
  const { isLoggedIn } = useSelector(mapState);

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [object, setObject] = useState({});
  const [manageClicks, setManageClicks] = useState(0);
  const [ourIds, setOurIds] = useState(null);
  const [localErros, setLocalErros] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [isSavePassword, setIsSavePassword] = useState(false);
  const [isUserSaved, setIsUserSaved] = useState(false);

  //---------- life cycle

  //---------- helper: user's actions

  useEffect(() => {
    const getUserInfo = async () => {
      let data = await getData("remember_me");

      if (data) {
        let parse_data = JSON.parse(data);
        onChangeEmail(parse_data.email);
        onChangepassword(parse_data.password);
        setIsUserSaved(true);
        setIsSavePassword(true);
      }
      console.log("==========================");
      console.log("data :", data);
      console.log("==========================");
    };

    getUserInfo();
  }, []);

  useEffect(() => {
    const saveUserIfo = async () => {
      if (propertySignInSuccess) {
        let is_save_user = await saveData("remember_me", {
          email,
          password,
        });

        if (is_save_user) {
          dispatch(saveUser());
        }
      }
    };

    if (isSavePassword && propertySignInSuccess) {
      saveUserIfo();
    } else {
      if (propertySignInSuccess) {
        dispatch(saveUser());
      }

      if (errors.length > 0) {
        setIsLoading(false);
        setLocalErros(errors);
        dispatch(ResetStates());
      }
    }
  }, [propertySignInSuccess, errors]);

  useEffect(() => {
    console.log("yeesssssss");
    if (ourIds !== null) {
      console.log("yeesssssss");
      dispatch(storeUserId(ourIds, email));
    }
  }, [ourIds]);

  useEffect(() => {
    // dispatch(ResetStates())
    setIsLoading(false);
    navigation.navigate("Route");
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoading(true);

    if (email === object.email && password === object.password) {
      setLocalErros("Please use correct email and password");
      setIsLoading(false);
      return;
    }
    if (email !== "" && password !== "") {
      if (isUserSaved && !isSavePassword) {
        removeData("remember_me");
      }

      setManageClicks(manageClicks + 1);
      setObject({
        email,
        password,
      });
      setLocalErros("");
      dispatch(signInUser({ email, password }));
    } else {
      setLocalErros("Email and password required");
      setIsLoading(false);
    }
  };

  const saveData = async (key, data) => {
    let string_data = JSON.stringify(data);
    await AsyncStorage.setItem(key, string_data);
    return true;
  };

  const removeData = async (key) => {
    await AsyncStorage.removeItem(key);
  };

  const getData = async (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then((res) => {
          if (res) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getApi = async () => {
    try {
      await fetch(
        "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/users/"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("hahahaha", data);
          setOurIds(data);
        })
        .catch((err) => {
          console.log("error => ", err);
        });
    } catch (err) {
      console.log("----------------------", err);
    }
  };

  //---------- return main view

  return (
    <View style={[AuthStyles.authContainer, { justifyContent: "center" }]}>
      <SafeAreaView />
      <View
        style={[SpaceStyles.top14, SpaceStyles.padding10, { width: "100%" }]}
      >
        <CustomText
          text={"Login"}
          style={[TextStyles.textBold48Black, { alignSelf: "center" }]}
        />
        <View style={[SpaceStyles.top10, , AuthStyles.textInputView]}>
          <TextInput
            style={[{ color: "#000", paddingVertical: 5 }]}
            placeholderTextColor="gray"
            placeholder="Email"
            onChangeText={(text) => {
              setLocalErros("");
              onChangeEmail(text);
            }}
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View
          style={[
            SpaceStyles.top10,
            ,
            AuthStyles.textInputView,
            { flexDirection: "row", alignContent: "flex-end" },
          ]}
        >
          <TextInput
            style={[{ color: "#000", paddingVertical: 5, width: "95%" }]}
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setLocalErros("");
              onChangepassword(text);
            }}
            value={password}
            secureTextEntry={securePassword}
            placeholder="Password"
          />

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => {
              setSecurePassword(!securePassword);
            }}
          >
            {securePassword ? (
              <Image
                style={{ height: 20, width: 20, alignSelf: "center" }}
                source={show}
                resizeMode="cover"
              />
            ) : (
              <Image
                style={{ height: 20, width: 20, alignSelf: "center" }}
                source={hide}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
        </View>

        <CheckBox
          style={SpaceStyles.top2}
          onClick={() => {
            setIsSavePassword(!isSavePassword);
          }}
          isChecked={isSavePassword}
          rightText={"Remember me"}
          rightTextStyle={{ color: "#000" }}
        />

        <TouchableOpacity
          style={[AuthStyles.smallButton, SpaceStyles.top5]}
          onPress={() => {
            handleLogin();
            getApi();
          }}
        >
          {isLoading ? (
            <View
              style={{
                paddingHorizontal: 17,
              }}
            >
              <ActivityIndicator color={"#fff"} />
            </View>
          ) : (
            <CustomText text={"Sign in"} style={TextStyles.textSegoe18White} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[SpaceStyles.top5]}
          onPress={() => NavigationService.navigate("SignUp")}
        >
          <CustomText
            text={"Create Account"}
            style={[
              TextStyles.textSegoe18Black,
              SpaceStyles.top10,
              { textAlign: "center" },
            ]}
          />
        </TouchableOpacity>

        <View style={AuthStyles.errorsLogin}>
          <Text style={AuthStyles.errorsLogintxt}>{localErros}</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

//---------- export component

export default Login;
