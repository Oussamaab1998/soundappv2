import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomText from "../../components/CustomText";
import HeaderLeft from "../../components/HeaderLeft";
import HeaderRight from "../../components/HeaderRight";
import HeaderTitle from "../../components/HeaderTitle";
import { backIcon, drawerIcon } from "../../constants/Images";

const Contact = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          iconName1={""}
          iconName2={""}
          iconName3={drawerIcon}
          onPress3={() => navigation.openDrawer()}
        />
      ),
      headerTitle: () => <HeaderTitle title={"Contact"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View>
            <CustomText
              text={"Contact Us"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <View style={styles.lastLine}>
              <Text style={styles.lastLineStyle}>Please refer to our</Text>
              <TouchableOpacity onPress={() => navigation.navigate("FAQs")}>
                <Text
                  style={[
                    styles.lastLineStyle,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  "Frequently Asked Questions"
                </Text>
              </TouchableOpacity>
              <Text style={styles.lastLineStyle}>page for:</Text>
            </View>
            <Text style={styles.ilItem}>account cancellation</Text>
            <Text style={styles.ilItem}>reactivating your account</Text>
            <Text style={styles.ilItem}>how to use subliminals</Text>
            <Text style={styles.ilItem}>
              common questions about using subliminals
            </Text>
            <Text style={styles.ilItem}>playlist looping concerns</Text>
            <View style={{ height: 10 }} />
            <Text style={styles.desc2}>
              For any additional questions and concerns, you can email our
              support team at: Support@SoundandSoulful.com
            </Text>
            <Text style={styles.desc2}>
              Please allow 48-72 hours for email responses.{" "}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  title1: {
    fontSize: 24,
    fontFamily: "Pacifico-Regular",
    textAlign: "center",
  },
  title2: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Pacifico-Regular",
    textAlign: "left",
  },
  desc1: {
    fontSize: 12,
    textAlign: "center",
  },
  desc2: {
    paddingLeft: 5,
    marginTop: 5,
    fontSize: 12,
    textAlign: "left",
  },
  ilItem: {
    color: "#000",
    fontWeight: "bold",
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 12,
    textAlign: "left",
  },
  lastLine: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  lastLineStyle: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
