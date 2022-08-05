//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator
} from "react-native";

// third party lib
import CheckBox from "react-native-check-box";

// common navigation
import NavigationService from "../../navigation/NavigationService";

// common componets
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";

// styles
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

//---------- component
import {
  signUpUser,
  resetAllAuthForms,
  ResetErrorsState,
  ResetStates
} from "../../redux/User/user.actions";
import { saveUser } from "../../redux/Local/local.actions";
import { useDispatch, useSelector } from "react-redux";

const mapState = ({ user, localReducer }) => ({

  currentProperty: user.currentProperty,
  propertySignUpSuccess: user.propertySignUpSuccess,
  errors: user.errors,
  isLoggedIn: localReducer.isLoggedIn,
});

function SignUp({ navigation }) {
  //---------- state, veriable and hooks

  // state

  const { currentProperty, propertySignUpSuccess, errors } = useSelector(mapState);
  const { isLoggedIn } = useSelector(mapState);

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [name, onChangeName] = useState("");
  const [password, onChangepassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [localErros, setLocalErros] = useState("");

  const [onCheckClick, setOnCheckClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //---------- life cycle

  //---------- helper: user's actions

  //---------- return main view

  useEffect(() => {

    if (propertySignUpSuccess) {

      dispatch(saveUser());
    }

    if (errors.length > 0) {

      setIsLoading(false)
      setLocalErros(errors)
      dispatch(ResetStates())
      dispatch(ResetErrorsState());
    }
  }, [propertySignUpSuccess, errors]);

  useEffect(() => {

    // dispatch(ResetStates())
    dispatch(ResetErrorsState());
    navigation.navigate("Route");
  }, [isLoggedIn])

  const handleSignUp = () => {

    setIsLoading(true)

    if (password !== confirmPassword) {

      setLocalErros('Please check the password...')
      setIsLoading(false)
      return
    }

    if (
      email !== "" &&
      name !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setLocalErros("");
      dispatch(signUpUser({ email, password, confirmPassword, name }));
    } else {
      setLocalErros("All the fields are required");
      setIsLoading(false)
    }
  };

  return (
    <View
      style={AuthStyles.authContainer}
    >
      <SafeAreaView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[SpaceStyles.top5, SpaceStyles.padding10]}
      >
        <CustomText
          text={"Sign Up"}
          style={[TextStyles.textBold48Black, { alignSelf: "center" }]}
        />
        <View style={AuthStyles.errorsLogin}>
          <Text
            style={AuthStyles.errorsLogintxt}
          >
            {
              localErros + errors
            }
          </Text>
        </View>
        <View
          style={[SpaceStyles.vertical2]}
        >
          {/* <CustomTextInput
              placeholder={"First Name"}
              containerStyle={{
                width: "48%",
              }}
            /> */}
          <View
            style={[
              SpaceStyles.top10,
              AuthStyles.textInputView,
              { width: "100%" },
            ]}
          >
            <TextInput
              style={[{ color: '#000' }]}
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
            style={[
              SpaceStyles.top10,
              AuthStyles.textInputView,
              { width: "100%" },
            ]}
          >
            <TextInput
              style={[{ color: '#000' }]}
              placeholderTextColor="gray"
              placeholder="Name"
              onChangeText={(text) => {
                setLocalErros('')
                onChangeName(text)
              }}
              value={name}
              textContentType="name"
            />
          </View>

          <View
            style={[
              SpaceStyles.top10,
              AuthStyles.textInputView,
              { width: "100%" },
            ]}
          >
            <TextInput
              style={[{ color: '#000' }]}
              placeholderTextColor="gray"
              placeholder="Password"
              onChangeText={(text) => {
                setLocalErros('')
                onChangepassword(text)
              }}
              value={password}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          <View
            style={[
              SpaceStyles.top10,
              AuthStyles.textInputView,
              { width: "100%" },
            ]}
          >
            <TextInput
              style={[{ color: '#000' }]}
              placeholderTextColor="gray"
              placeholder="Confirm Password"
              onChangeText={(text) => {
                setLocalErros('')
                onChangeConfirmPassword(text)
              }}
              value={confirmPassword}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={[
              AuthStyles.largeButton,
              SpaceStyles.top5,
              { marginBottom: 40 },
            ]}
            onPress={() => {
              handleSignUp(email, name, password, confirmPassword);
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
                  text={"Start My Free Trial"}
                  style={TextStyles.textSegoe18White}
                />
            }
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  );
}

//---------- export component

export default SignUp;
