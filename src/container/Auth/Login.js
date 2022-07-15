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
} from "react-native";

// common componets
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import NavigationService from "../../navigation/NavigationService";

// styles
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

// server hooks
import useServerCommunucation from "../../utils/ServerCommunication";

//---------- component

import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../redux/Local/local.actions";

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
});

function Login({ navigation }) {

  //---------- state, veriable and hooks

  // hook
  const { serverRequest, dataPocket, loading, error } =
    useServerCommunucation();

  const { currentProperty, propertySignInSuccess, errors } =
    useSelector(mapState);

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [localErros, setLocalErros] = useState("");

  //---------- life cycle

  useEffect(() => {
    console.log("login data pocket :", dataPocket.login_data_pocket);
  }, [dataPocket.login_data_pocket]);

  useEffect(() => {
    console.log("========================================");
    console.log("login data pocket :", dataPocket);
    console.log("========================================");
  }, [dataPocket]);

  //---------- helper: user's actions

  useEffect(() => {
    if (propertySignInSuccess) {
      dispatch(saveUser());
      NavigationService.navigate("Route");
    }
  }, [propertySignInSuccess]);

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      setLocalErros("");
      dispatch(signInUser({ email, password }));
    } else {
      setLocalErros("Email and password required");
    }
    // serverRequest({
    //     key: 'login_data_pocket',
    //     request_type: 'get'
    // })
  };

  //---------- return main view

  return (
    <View
      style={AuthStyles.authContainer}
    >
      <SafeAreaView />
      <View
        style={[SpaceStyles.top14, SpaceStyles.padding10]}
      >
        <CustomText
          text={"Login"}
          style={[TextStyles.textBold48Black, { alignSelf: "center" }]}
        />
        {/* <View style={[SpaceStyles.top10]}>
          <CustomTextInput
            placeholder={"Email"}
            containerStyle={SpaceStyles.top1}
          />
        </View> */}
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView]}
        >
          <TextInput
            style={SpaceStyles.top1}
            placeholder="Email"
            onChangeText={onChangeEmail}
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView]}
        >
          <TextInput
            style={SpaceStyles.top1}
            onChangeText={onChangepassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        {/* <View style={SpaceStyles.vertical1}>
          <CustomTextInput
            placeholder={"Password"}
            containerStyle={SpaceStyles.top1}
          />

          <CustomText
            text={"Forgot your password?"}
            style={[
              TextStyles.textSegoe14Black,
              SpaceStyles.top1,
              { textAlign: "right" },
            ]}
          />
        </View> */}
        <TouchableOpacity
          style={[AuthStyles.smallButton, SpaceStyles.top5]}
          onPress={() => {
            handleLogin();
          }}
        >
          <CustomText
            text={"Sign in"} style={TextStyles.textSegoe18White}
          />
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
              localErros + errors
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
