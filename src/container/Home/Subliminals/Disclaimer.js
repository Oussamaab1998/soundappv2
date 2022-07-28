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
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});
