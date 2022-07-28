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
import { backIcon, drawerIcon } from "../../constants/Images";
// images
import Hs1 from "../Home/assets/hs1.jpg";
import Hs2 from "../Home/assets/hs2.jpg";
import Hs3 from "../Home/assets/hs3.jpg";
import Hs4 from "../Home/assets/hs4.jpg";

const HowItWorks = ({ navigation }) => {
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
      headerTitle: () => <HeaderTitle title={"How it Works"} />,
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
              text={"How to Start Using Subliminals"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <CustomText
              text={"Step 1 : Explore our library."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              Browse our library of over 100+ subliminal affirmations meditation
              tracks
            </Text>
            <Text style={styles.desc2}>
              We currently have subliminals for all areas of life including:
              love & relationships, money, business, talent and appearance.
            </Text>
            <Image source={Hs1} />
            <CustomText
              text={"Step 2: Choose a background sound."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              For every single one of our subliminals, we offer 3-5 different
              background sounds.
            </Text>
            <Text style={styles.desc2}>
              The tracks contain identical subliminal affirmations and binaural
              beat frequencies, so you can choose whichever background sound you
              prefer!
            </Text>
            <Text style={styles.desc2}>
              Also, the affirmations we've created for each subliminal are
              listed out below the tracks so you will always know what
              affirmations are included in the track, even though you won't be
              able to consciously hear them.
            </Text>
            <Image source={Hs2} />
            <CustomText
              text={"Step 3: Listen consistently. "}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              Research shows that it takes 21 days to form a new habit. The same
              is true for your brain!
            </Text>
            <Text style={styles.desc2}>
              <Text style={styles.desc2}>
                Be sure to listen to subliminals consistently for best results.
              </Text>
            </Text>
            <Image source={Hs3} />
            <CustomText
              text={"Step 4: Watch for evidence of shifts + changes."}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              Once you've started listening, keep your eyes open for any changes
              or shifts you may experience! Often, the early evidence of
              manifestation is small but still very significant.
            </Text>
            <Text style={styles.desc2}>
              Remember to keep an open mind, have faith in the thing you're
              shifting in your life and get excited about the small changes as
              you begin to notice them.{" "}
            </Text>
            <Image source={Hs4} style={{ width: 300 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HowItWorks;

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
