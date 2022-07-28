import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import CustomText from "../../../components/CustomText";
import ContentContainer from "../../../Common/ContentContainer";

// common componets
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";

import { backIcon, drawerIcon } from "../../../constants/Images";

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";

const Disclaimer = ({ navigation }) => {

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
      headerTitle: () => <HeaderTitle title={"Disclaimer"} />,
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
      <ScrollView style={styles.scrollView}>
        <CustomText
          text={"Disclaimer"}
          style={[TextStyles.textBold24Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
        />

        <CustomText
          text={"DISCLAIMER OF LIABILITY AND WARNING"}
          style={[{ alignSelf: "center", fontStyle: 'italic' }, TextStyles.textQuicksandBold14Black, SpaceStyles.bottom5]}
        />

        <CustomText
          text={"By visiting, viewing, browsing, surfing or using our website www.soundandsoulful.com (“Website”) or availing any of the Website Services (as defined in the Terms and Conditions), you (“you”, “your” or “User”) agree to this Disclaimer of Liability."}
          style={[TextStyles.textQuicksand14Black, { alignSelf: "center" }, SpaceStyles.bottom5]}
        />

        <View
          style={[AuthStyles.ContentContainer, SpaceStyles.top20]}
        >
          <ContentContainer data={data} />
        </View>

      </ScrollView>
    </View>
  );
};

export default Disclaimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingBottom:20
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});

const data =[
  {
    content:[
      {
        heading:"1. The meditation education as available on the Website consists of suggestions only and is not intended to be a substitute for professional medical or mental health advice, diagnosis or treatment. Users of the Website should not rely exclusively on material provided on the Website for their own health or mental health needs. All specific medical questions should be presented to your own health care provider. We make no warranties or representations, express or implied, as to the Website Services or as to accuracy or completeness, timeliness or usefulness of any opinions, advice, services or other information contained or referenced in the Website."
      },
      {
        heading:"2. You understand and agree that the results from using the Website Services are not guaranteed or backed by any scientific evidence. Manifestation of results will vary from person to person. As such, you agree not to bring any kind of claim against us in this regard."
      },
      {
        heading:"3. You further acknowledge and agree not to listen to subliminal tracks while driving or operating machinery. Users should only listen to the subliminal tracks when they can safely relax."
      },
      {
        heading:"4. We reserve the right to revise our policies or Terms and Conditions at any time without any prior notice. Notification of all amendments may be generally displayed publicly on the Platform. It is your responsibility to check the Platform to ensure you stay informed of any change."
      },
      {
        heading:"5. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability concerning the Website or the information, products or services contained on the Website for any purpose."
      },
      {
        heading:"6. Under no circumstances, shall we, our officers, agents or anyone else involved in creating, producing or distributing the Platform services through the Platform be liable for any direct, indirect, incidental, special or consequential damages that result from the use or the inability to use the Platform; or that results from mistakes, omissions, interruptions, deletion of files, errors, defects, delays in operation or transmission or any failure of performance, whether or not limited to acts of God, communication failure, theft, destruction or unauthorized access to our records, programs or services."
      },
      {
        heading:"7. Through the Platform, you may be able to link to other websites. We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them."
      },
      {
        heading:"8. Every effort is made to keep the Platform up and running smoothly. However, we take no responsibility for, and will not be liable for, the Platform being temporarily unavailable due to technical issues beyond our control."
      },
      {
        heading:"9. You understand and agree that not all exercises or meditations are suitable for everyone. Please consult your physician and mental health professional before making any lifestyle, exercise or mental exercise change, such as meditation. If you are unsure about potential reactions, please consult your mental health professional and your physician."
      },
      {
        heading:"10. The Website is not created by medical or mental health professionals and is not medically supervised. Only your primary physician and mental health professional can diagnose any medical or mental health condition. Any guidance is provided in good faith based on personal experience. There may be medical professional alternatives for you if you have mental and emotional challenges. You assume all risks of injury in the use of any material provided: minor, major and catastrophic. Your engagement with us is entirely voluntary and we are in no way responsible for your actions or any adverse outcomes."
      },
      {
        heading:"11. Meditation should always be performed without strain or strict effort. If at any time you feel distressed or you feel pain/discomfort, you should discontinue immediately and reconsider your use of this information and/or specific techniques in particular. "
      },
    ]
  }
]