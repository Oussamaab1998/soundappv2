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
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { TextInput } from "react-native-paper";

// common componets
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import NavigationService from "../../navigation/NavigationService";

// styles
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

import {
  show,
  hide,
} from "../../constants/Images";

// server hooks
import useServerCommunucation from "../../utils/ServerCommunication";

import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
  ResetStates
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../redux/Local/local.actions";
import { findLastValidBreakpoint } from "native-base/lib/typescript/theme/tools";

import ModalContainer from "../../Common/ModalContainer";

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

  const { currentProperty, propertySignInSuccess, errors } = useSelector(mapState);
  const { isLoggedIn } = useSelector(mapState);

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [object, setObject] = useState({});
  const [manageClicks, setManageClicks] = useState(0);

  const [localErros, setLocalErros] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);


  //---------- life cycle

  //---------- helper: user's actions

  useEffect(() => {

    if (propertySignInSuccess) {

      dispatch(saveUser());
    }

    if (errors.length > 0) {

      setIsLoading(false)
      setLocalErros(errors)
      dispatch(ResetStates())
    }
  }, [propertySignInSuccess, errors]);

  useEffect(() => {

    // dispatch(ResetStates())
    setIsLoading(false)
    navigation.navigate("Route");
  }, [isLoggedIn])

  const handleLogin = () => {
    setIsLoading(true)

    if (email === object.email && password === object.password) {

      setLocalErros("Please use correct email and password");
      setIsLoading(false)
      return
    }
    if (email !== "" && password !== "") {

      setManageClicks(manageClicks + 1)
      setObject({
        email, password
      })
      setLocalErros("");
      dispatch(signInUser({ email, password }));
    } else {
      setLocalErros("Email and password required");
      setIsLoading(false)
    }
  };

  const saveData = async (key, data) => {
    await AsyncStorage.setItem(key, data);
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

  //---------- return main view

  return (
    <View
      style={[AuthStyles.authContainer, { justifyContent: 'center' }]}
    >
      <SafeAreaView />
      <View
        style={[SpaceStyles.top14, SpaceStyles.padding10, { width: '100%' }]}
      >
        <CustomText
          text={"Login"}
          style={[TextStyles.textBold48Black, { alignSelf: "center" }]}
        />
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView]}
        >
          <TextInput
            style={[{ color: '#000', paddingVertical: 5 }]}
            placeholderTextColor="gray"
            placeholder="Email"
            onChangeText={(text) => {
              setLocalErros('')
              onChangeEmail(text)
            }}
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView, { flexDirection: 'row', alignContent: 'flex-end' }]}
        >

          <TextInput
            style={[{ color: '#000', paddingVertical: 5, width: '95%' }]}
            placeholderTextColor="gray"

            onChangeText={(text) => {
              setLocalErros('')
              onChangepassword(text)
            }}
            value={password}
            secureTextEntry={securePassword}
            placeholder="Password"
          />

          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => {
              setSecurePassword(!securePassword)
            }}
          >
            {
              securePassword ?
                <Image
                  style={{ height: 20, width: 20, alignSelf: 'center' }}
                  source={show}
                  resizeMode='cover'
                />
                :
                <Image
                  style={{ height: 20, width: 20, alignSelf: 'center' }}
                  source={hide}
                  resizeMode='cover'
                />
            }
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={[AuthStyles.smallButton, SpaceStyles.top5]}
          onPress={() => {
            handleLogin();
          }}
        >
          {
            isLoading ?
              <View
                style={{
                  paddingHorizontal: 17
                }}
              >
                <ActivityIndicator color={'#fff'} />
              </View>
              :
              <CustomText
                text={"Sign in"} style={TextStyles.textSegoe18White}
              />
          }
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
        <View
          style={AuthStyles.errorsLogin}
        >
          <Text
            style={AuthStyles.errorsLogintxt}
          >
            {
              localErros
            }
          </Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

//---------- export component

export default Login;
