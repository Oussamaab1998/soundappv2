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

const FAQs = ({ navigation }) => {
  let url1 =
    "https://www.imyfone.com/ios-data-erase/how-to-turn-off-lock-screen-iphone/";
  let url2 =
    "https://www.tomsguide.com/us/disable-android-lock-screen,news-21217.html";
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
      headerTitle: () => <HeaderTitle title={"FAQs"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const handleLink1 = useCallback(async () => {
    const supported = await Linking.canOpenURL(url1);

    if (supported) {
      await Linking.openURL(url1);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url1}`);
    }
  }, [url1]);
  const handleLink2 = useCallback(async () => {
    const supported = await Linking.canOpenURL(url2);

    if (supported) {
      await Linking.openURL(url2);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url2}`);
    }
  }, [url2]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View>
            <CustomText
              text={"Frequently Asked Questions"}
              style={[styles.title1, { marginVertical: 20 }]}
            />
            <CustomText
              text={"Q. What are subliminals?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Subliminals are audio meditation tracks that contain spoken
              affirmations along with other meditation sounds. Each of our
              subliminals also contains at least one binaural beat frequency
              that is associated with the change/shift targeted by that specific
              track.
            </Text>
            <Text style={styles.desc2}>
              Unlike traditional, spoken affirmations, you cannot consciously
              hear the messages while listening to subliminals. This is by
              design -- you can read more about how subliminals work by reading
              the answer to the next question!
            </Text>
            <CustomText
              text={"Q. How do subliminals work?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. If you're familiar with spoken affirmations, subliminals are
              like that -- except in this case, the affirmations are targeted to
              the subconscious mind rather than being targeted to the conscious
              mind.
            </Text>
            <Text style={styles.desc2}>
              The conscious mind is believed to filter out the affirmations we
              say aloud or hear consciously, which is why subliminals are
              designed to mask the messages between other meditation sounds and
              frequencies.
            </Text>
            <Text style={styles.desc2}>
              This "masking" effect is intended to allow the affirmations to
              bypass the conscious mind, while making better impressions on the
              unconscious parts of the brain.
            </Text>
            <Text style={styles.desc2}>
              It is said that the subconscious mind is the "powerhouse of
              manifestation" because research has shown that it controls 95% of
              our thoughts. According to the Law of Attraction, this means that
              the thoughts in the subconscious mind dominate our "vibration" and
              play a major role in what we attract into our lives.
            </Text>
            <CustomText
              text={
                "Q. Why can't I hear the affirmations when I listen? All I hear are the background sounds."
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Subliminals are designed in a way so that your conscious mind
              can't clearly hear the messages, which is believed to allow these
              affirmations to bypass the filter of the conscious mind and make
              deeper, more lasting impressions upon the subconscious.
            </Text>
            <Text style={styles.desc2}>
              This is why so many people experience far better results with
              subliminals than traditional, spoken affirmations. Unlike spoken
              affirmations [which are directed to the conscious mind],
              subliminals are believed to directly impact the subconscious,
              which controls 95% of our thoughts, actions & outcomes in life.
            </Text>
            <CustomText
              text={"Q. What volume should I listen at?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Ideally, subliminals should be listened to at a low,
              comfortable volume. While it's okay if you can hear an occasional
              word or phrase from the affirmations, you should not be able to
              consciously hear full sentences. If you can hear the entire
              affirmations within the track, the volume may be too loud.
            </Text>
            <CustomText
              text={
                "Q. Can I listen to more than one subliminal in the same day?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Yes, you can absolutely listen to multiple different
              subliminals throughout the day. It isn't necessary to listen to
              the same track over and over, although people do report better
              results when they listen consistently.
            </Text>
            <CustomText
              text={
                "Q. How frequently should I listen to a certain subliminal in order to see results?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. This varies from person to person because everyone has varying
              levels of belief and doubt that can affect the manifestation of
              certain changes in their lives. As a general rule of thumb, we
              recommend listening consistently [at least one listening session
              per day, if possible] for 21 days before taking score of results.
              This is because research has shown it usually takes approximately
              21 days for us to form a new habit - in this case, a new habit
              loop of subconscious thought.
            </Text>
            <CustomText
              text={"Q. Why isn't my playlist looping?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Because of recent iPhone/Android updates, playlists on some
              devices may not loop while the phone screen is locked.
            </Text>
            <View style={styles.lastLine}>
              <Text style={styles.desc2}>
                On these devices, in order for playlists to loop the{" "}
                <Text style={styles.lastLineStyle}>
                  phone screen must be unlocked{" "}
                </Text>
                and the{" "}
                <Text style={styles.lastLineStyle}>
                  Sound & Soulful playlists page must be open{" "}
                </Text>
                in order for looping to continue.
              </Text>
            </View>
            <View style={styles.lastLine}>
              <Text style={styles.desc2}>Turn off lock screen on iPhone:</Text>
              <TouchableOpacity onPress={handleLink1}>
                <Text
                  style={[
                    styles.desc2,
                    { textDecorationLine: "underline", fontStyle: "italic" },
                  ]}
                >
                  https://www.imyfone.com/ios-data-erase/how-to-turn-off-lock-screen-iphone/
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lastLine}>
              <Text style={styles.desc2}>Turn off lock screen on Android:</Text>
              <TouchableOpacity onPress={handleLink2}>
                <Text
                  style={[
                    styles.desc2,
                    { textDecorationLine: "underline", fontStyle: "italic" },
                  ]}
                >
                  https://www.tomsguide.com/us/disable-android-lock-screen,news-21217.html
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.desc2}>
              We do apologize for this inconvenience and it will be fixed in our
              new website/mobile app being launched in late Spring [April/May
              2022]. Stay tuned!
            </Text>
            <CustomText
              text={
                'Q. Is it possible to "overdo" listening to subliminals? What is the upper limit of how much I should listen per day?'
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. While there is no official "upper limit" when it comes to
              listening to subliminals, sometimes when you first start listening
              you may need to take breaks between sessions in order to allow
              your mind to fully process and absorb the messages without
              becoming overworked.
            </Text>
            <Text style={styles.desc2}>
              Some people's minds are more receptive to subliminals and they do
              not need these "breaks", while others may only be able to listen
              for 10-20 minutes per day at first. Always use your own intuition
              as a guide when it comes to determining how long you'd like to
              listen.
            </Text>
            <CustomText
              text={
                "Q. Is it normal to get weird physical sensations while listening [tingling, buzzing, heaviness, etc.]?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Some people report strange physical sensations such as
              tingling, pressure or a "buzzing" sensation when they first start
              listening to subliminals. Know that these are perfectly normal
              experiences as long as you are feeling positive shifts and not
              experiencing any discomfort.
            </Text>
            <CustomText
              text={
                "Q. Do I have to meditate or visualize while I listen to subliminals?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. No, it isn't necessary to meditate or visualize while
              listening. However, usually people report experiencing some of the
              best results while listening during a meditation or visualization
              practice.
            </Text>
            <CustomText
              text={"Q. When is the best time to listen to subliminals?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. The ideal times to listen to subliminals are: immediately after
              awakening in the morning, immediately prior to falling asleep at
              night, and overnight while you sleep. This is because during these
              times, it is believed that the conscious mind is in its most
              dormant state and therefore the subconscious mind is the most wide
              open and impressionable.
            </Text>
            <Text style={styles.desc2}>
              That being said, many of our customers see great results from
              listening throughout the day as well - there is no perfect /
              "right" way to use subliminals so you can choose to listen in
              whatever way works best for you personally.
            </Text>
            <CustomText
              text={
                "Q. Is it okay to listen to subliminals while doing other things throughout the day?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. Yes! It is perfectly fine to listen to subliminals, especially
              while doing semi-mindless tasks [getting ready in the morning,
              walking, cleaning, etc.] However, you should not listen to
              subliminals [or any meditative audio track] while driving or
              operating machinery. Only listen when you can safely relax.
            </Text>
            <CustomText
              text={"Q. What if I fall asleep while listening to a subliminal?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. It's absolutely okay to fall asleep while listening. In fact,
              this is believed to be one of the best ways to change the thoughts
              in your subconscious mind and one of the most popular subliminal
              listening methods.
            </Text>
            <CustomText
              text={"Q. How can I cancel my account?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. You can cancel your account at any time by visiting the Account
              page on our website while logged in. When you scroll down, you
              will see the words "Cancel Membership". You can click on these
              words in order to cancel your account immediately.
            </Text>
            <CustomText
              text={"Q. How can I reactivate my account after I cancel?"}
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. If you had a previous membership with us and you cancelled but
              would like to reactivate your account now, you can easily do so by
              following these steps:
            </Text>
            <Text style={styles.desc2}>1. Log into your account as usual.</Text>
            <Text style={styles.desc2}>
              2. Visit the Sign Up page of our website while logged in.
            </Text>
            <Text style={styles.desc2}>
              3. Fill out the sign up form [just like you did when you first
              created your account].
            </Text>
            <Text style={styles.desc2}>
              4. When you submit the form, a box will pop up that you can use to
              enter your updated card information and reactivate your account.
            </Text>
            <CustomText
              text={
                "Q. What is the cost of membership? How often will I be charged?"
              }
              style={styles.title2}
            />
            <Text style={styles.desc2}>
              A. The cost of membership is $19.99 per month, charged once
              monthly. When you first sign up, there is a 7-day free trial
              period and your card will not be charged during this free trial.
              However, if you do not cancel your account, your card will be
              charged for your first month's membership at the end of the free
              trial period.
            </Text>
            <View style={{ height: 50 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FAQs;

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
    color:'#000'
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
    marginVertical: 15,
    // marginBottom: 50,
  },
  lastLineStyle: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});
