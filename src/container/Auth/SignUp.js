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
} from "../../redux/User/user.actions";
import { saveUser } from "../../redux/Local/local.actions";
import { useDispatch, useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  propertySignUpSuccess: user.propertySignUpSuccess,
  errors: user.errors,
});

function SignUp({ navigation }) {
  //---------- state, veriable and hooks

  // state

  const { currentProperty, propertySignUpSuccess, errors } =
    useSelector(mapState);

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState("");
  const [name, onChangeName] = useState("");
  const [password, onChangepassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [localErros, setLocalErros] = useState("");

  const [onCheckClick, setOnCheckClick] = useState(false);

  //---------- life cycle

  //---------- helper: user's actions

  //---------- return main view

  const handleSignUp = () => {
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
    }
  };

  useEffect(() => {
    dispatch(ResetErrorsState());
    if (propertySignUpSuccess) {
      dispatch(saveUser());
      NavigationService.navigate("Route");
    }
  }, [propertySignUpSuccess]);

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
              style={SpaceStyles.top1}
              placeholder="Email"
              onChangeText={onChangeEmail}
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
              style={SpaceStyles.top1}
              placeholder="Name"
              onChangeText={onChangeName}
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
              style={SpaceStyles.top1}
              placeholder="Password"
              onChangeText={onChangepassword}
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
              style={SpaceStyles.top1}
              placeholder="Confirm Password"
              onChangeText={onChangeConfirmPassword}
              value={confirmPassword}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          {/* <CustomTextInput
            placeholder={"Email Address"}
            containerStyle={SpaceStyles.top2}
          />
          <CustomTextInput
            placeholder={"Password"}
            containerStyle={SpaceStyles.top2}
          />
          <CustomTextInput
            placeholder={"Confirm Password"}
            containerStyle={SpaceStyles.top2}
          /> */}

          {/* <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
            <CheckBox
              isChecked={onCheckClick}
              checkBoxColor={"black"}
              onClick={() => setOnCheckClick(!onCheckClick)}
            />
            <CustomText
              text={"By continuing I agree to the Terms of Service"}
              style={[TextStyles.textSegoe13Black, { marginLeft: 5 }]}
            />
          </View> */}
          {/* <CustomText
            text={
              "Privacy Policy Disclaimer of  Liability and Intellectual Property Notice"
            }
            style={[TextStyles.textSegoe13Black, { marginLeft: 3 }]}
          /> */}
          {/* <CustomTextInput
            placeholder={"Card Number"}
            containerStyle={SpaceStyles.top2}
          />
          <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top2]}>
            <CustomTextInput
              placeholder={"Expiry Month"}
              containerStyle={SpaceStyles.width37}
            />
            <CustomTextInput
              placeholder={"Expiry Year"}
              containerStyle={SpaceStyles.width37}
            />
          </View>
          <CustomTextInput
            placeholder={"CVV"}
            containerStyle={SpaceStyles.top2}
          /> */}
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
            <CustomText
              text={"Start My Free Trial"}
              style={TextStyles.textSegoe18White}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  );
}

//---------- export component

export default SignUp;
