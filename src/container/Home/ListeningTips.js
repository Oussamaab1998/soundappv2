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

const ListeningTips = ({ navigation }) => {
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
      headerTitle: () => <HeaderTitle title={"ListeningTips"} />,
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
              text={"Listening Tips"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <Text style={styles.desc1}>
              Here are some subliminals listening tips to help you get started:
            </Text>
            <CustomText
              text={"1. Listen at a comfortably low volume."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              The volume should be low enough that you can't hear the full
              affirmations embedded within the audio track.
            </Text>
            <Text style={styles.desc2}>
              It's perfectly fine if you can hear a word or phrase here or
              there, but you should not consciously be able to understand the
              entire messages while listening.
            </Text>
            <Text style={styles.desc2}>
              If you'd like to review the affirmations contained in the
              subliminal before listening or while you listen, they will be
              listed on the subliminal audio track page.
            </Text>
            <CustomText
              text={
                '2. Do at least one "listening session" per day for 21 days.'
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              As a general rule of thumb, we recommend listening consistently to
              a subliminal [ideally at least once per day] for 21 days.
            </Text>
            <Text style={styles.desc2}>
              We define one "listening session" as simply listening to the
              subliminal audio track one time through [most of our subliminals
              are 10-20 minutes long].
            </Text>
            <CustomText
              text={"3. Listen at ideal times for best results."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              To get the best results, try listening during any of the following
              time frames:
            </Text>
            <Text style={styles.ilItem}>
              immediately after awakening in the morning
            </Text>
            <Text style={styles.ilItem}>right before falling asleep</Text>
            <Text style={styles.ilItem}>overnight, while sleeping</Text>
            <CustomText
              text={"4. Consider using headphones. "}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              While headphones aren't required, listening with headphones allows
              you to receive the full effect from the binaural beat frequencies
              contained within the track.
            </Text>
            <CustomText
              text={"5. Meditate & visualize when possible."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              Although you don't need to meditate and visualize while listening
              to subliminals, we highly recommend setting aside 15-20 minutes a
              day for a visualization practice while listening to subliminals
            </Text>
            <View style={styles.lastLine}>
              <Text style={styles.lastLineStyle}>
                For any additional questions, explore our
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

export default ListeningTips;

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
    marginBottom: 50,
  },
  lastLineStyle: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
