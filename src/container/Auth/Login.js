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
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView]}
        >
          <TextInput
            style={SpaceStyles.top1}
            placeholder="Email"
            onChangeText={(text)=>{
              setLocalErros('')
              onChangeEmail(text)
            }}
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View
          style={[SpaceStyles.top10, , AuthStyles.textInputView]}
        >
          <TextInput
            style={SpaceStyles.top1}
            onChangeText={(text)=>{
              setLocalErros('')
              onChangepassword(text)
            }}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

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
