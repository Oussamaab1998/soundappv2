import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../../components/CustomText";
import HeaderLeft from "../../components/HeaderLeft";
import HeaderRight from "../../components/HeaderRight";
import HeaderTitle from "../../components/HeaderTitle";

import Step2 from "../Home/assets/step2.jpg";
import Step31 from "../Home/assets/step31.jpg";
import Step32 from "../Home/assets/step32.jpg";
import Step5 from "../Home/assets/step5.jpg";

import { backIcon, drawerIcon } from "../../constants/Images";

const Instructions = ({ navigation }) => {
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
      headerTitle: () => <HeaderTitle title={"Instructions"} />,
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
              text={"Instructions"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <CustomText text={"1# STEP 1"} style={styles.title2} />
            <Text style={styles.desc2}>
              Review our Listening Tips page to get started.
            </Text>
            <CustomText text={"2# STEP 2"} style={styles.title2} />
            <Text style={styles.desc2}>
              Log into your account and click the "Listen Now" button on the
              bottom of the page of the subliminal you want to listen to
              [pictured below].
            </Text>
            <Text style={styles.desc2}>
              This will take you to the affirmations + audio player page.
            </Text>
            <Image source={Step2} />
            <CustomText text={"3# STEP 3"} style={styles.title2} />
            <Text style={styles.desc2}>
              You will see the audio player pictured below at the bottom of the
              page.
            </Text>
            <Text style={styles.desc2}>
              Browse through the different background sounds available by using
              the skip buttons on the audio player, as pictured below.
            </Text>
            <Image source={Step31} />
            <Text style={styles.desc2}>
              Alternatively, you can see all available background sounds by
              tapping on the name of the subliminal here:
            </Text>
            <Image source={Step32} />
            <CustomText text={"4# STEP 4"} style={styles.title2} />
            <Text style={styles.desc2}>
              Select the background sound you like best and start listening.
            </Text>
            <Text style={styles.desc2}>
              Please note that the affirmations + binaural beat frequencies are
              identical regardless of which background track you choose.
            </Text>
            <CustomText text={"5# STEP 5"} style={styles.title2} />
            <Text style={styles.desc2}>
              [Optional]: Save your favorite subliminals to a playlist by
              clicking the plus (+) icon on the audio player.
            </Text>
            <Text style={styles.desc2}>
              When you save a subliminal to a playlist, it will queue up the
              next track automatically and play on an endless loop
            </Text>
            <Text style={styles.desc2}>
              To see all the playlists you've created, click the playlist icon
              pictured below.
            </Text>
            <Image source={Step5} />
            <Text style={styles.desc2}>
              * Please keep in mind that because of recent iPhone/Android
              updates, playlists on some devices may not loop while the phone
              screen is locked or a different page is open.
            </Text>
            <Text style={styles.desc2}>
              On these devices, in order for playlists to loop the phone screen
              must be unlocked and the Sound & Soulful playlists page must be
              open in order for looping to continue.
            </Text>
            <View style={styles.lastLine}>
              <Text style={styles.lastLineStyle}>
                If you still have questions, explore our
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("FAQs")}>
                <Text
                  style={[
                    styles.lastLineStyle,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Frequently Asked Questions
                </Text>
              </TouchableOpacity>
              <Text style={styles.lastLineStyle}>
                page for more information.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Instructions;

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
    color:'#000',
  },
  desc2: {
    paddingLeft: 5,
    marginTop: 5,
    fontSize: 12,
    color:'#000',
    textAlign: "left",
  },
  ilItem: {
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 12,
    textAlign: "left",
    color:'#000',
  },
  lastLine: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  lastLineStyle: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
