import React, { useCallback, useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import CustomText from "../../components/CustomText";
import HeaderLeft from "../../components/HeaderLeft";
import HeaderRight from "../../components/HeaderRight";
import HeaderTitle from "../../components/HeaderTitle";
import { backIcon, drawerIcon } from "../../constants/Images";

const Intellectual = ({ navigation }) => {
  let url = "https://soundandsoulful.com/";
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
      headerTitle: () => <HeaderTitle title={"Intellectual Property Notice"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const handleLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View>
            <CustomText
              text={"Intellectual Property Notice"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <Text
              style={[
                styles.desc1,
                { fontWeight: "bold", color: "#000", marginVertical: 20 },
              ]}
            >
              Intellectual Property Notice
            </Text>
            <View style={styles.lastLine}>
              <Text style={styles.desc2}>
                You agree that all the services being offered through the
                Website{" "}
                <TouchableOpacity onPress={handleLink}>
                  <Text
                    style={[
                      styles.lastLineStyle,
                      { fontWeight: "bold", color: "#000" },
                    ]}
                  >
                    www.soundandsoulful.com{" "}
                  </Text>
                </TouchableOpacity>
                including mobile-optimized version, if any, and all the content
                available on the Website including but not limited to text,
                graphics, user interface, audio clips, video clips, trademarks,
                copyrights, service marks, trade names and other intellectual
                property containing proprietary information and material which
                are the intellectual property of, or otherwise are licensed to
                <Text
                  style={[styles.desc2, { fontWeight: "bold", color: "#000" }]}
                >
                  {" "}
                  Magnetize Yourself LLC{" "}
                </Text>
                , a company incorporated under the laws of the State of Wyoming
                and having its registered address at 1309 Coffeen Avenue STE
                2894, Sheridan, Wyoming, 82801(hereinafter referred to as “
                <Text
                  style={[styles.desc2, { fontWeight: "bold", color: "#000" }]}
                >
                  we
                </Text>
                ”, “
                <Text
                  style={[styles.desc2, { fontWeight: "bold", color: "#000" }]}
                >
                  us
                </Text>
                ” or “
                <Text
                  style={[styles.desc2, { fontWeight: "bold", color: "#000" }]}
                >
                  our
                </Text>
                ”) and/or our licensors or affiliates, are protected by
                applicable intellectual property and other laws.
              </Text>
            </View>
            <Text style={styles.desc2}>
              You agree that you will not use such proprietary information or
              materials in any way whatsoever except for use of the Website
              Services (as defined in Terms and Conditions) for personal,
              non-commercial uses in compliance with this Intellectual Property
              Notice. No portion of the Website may be reproduced in any form or
              by any means except as expressly permitted by this Intellectual
              Property Notice. You agree not to modify, rent, loan, sell or
              distribute the Website in any manner or to exploit the Website
              services in any manner not expressly authorized.
            </Text>
            <Text style={styles.desc2}>
              The expression Magnetize Yourself or soundandsoulful, their
              logos and other trademarks, service marks, graphics and logos used
              in connection with the Website services are our trademarks or
              intellectual property. You are granted no right or license
              concerning any of the aforesaid trademarks.
            </Text>
            <Text style={styles.desc2}>
              You acknowledge and agree that any infringing use or exploitation
              of copyrighted content on the Website and the Website services may
              cause us, our affiliates, licensors or content providers
              irreparable injury, which may not be remedied solely at law and
              therefore we, our affiliates, licensors or content providers may
              seek remedy for breach of this Intellectual Property Notice either
              in equity or through injunctive or other equitable relief. We
              grant no permission to you for the use of these trademarks and
              such use may constitute an infringement of our intellectual
              property rights.
            </Text>
            <Text style={styles.desc2}>
              The third-party registered and unregistered trademarks or service
              marks on the Website are the property of their respective owners
              and, unless stated otherwise in this Intellectual Property Notice,
              we do not endorse and are not affiliated with any of the holders
              of any such rights and as such we cannot grant any license to
              exercise such rights.
            </Text>
            <Text
              style={[
                styles.desc1,
                { fontWeight: "bold", color: "#000", marginVertical: 20 },
              ]}
            >
              © 2021 Magnetize Yourself LLC. All rights reserved.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Intellectual;

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
