import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import CustomText from "../../components/CustomText";
import HeaderLeft from "../../components/HeaderLeft";
import HeaderRight from "../../components/HeaderRight";
import HeaderTitle from "../../components/HeaderTitle";
import { backIcon, drawerIcon } from "../../constants/Images";
import {
  makeUserPremium,
  restorePurchase,
} from "../../redux/Local/local.actions";
import { useDispatch, useSelector } from "react-redux";
// images

import PremiumImg from "../Home/assets/premium.jpg";
const mapState = ({ localReducer }) => ({
  isUserPremium: localReducer.isUserPremium,
});
const Premium = ({ navigation }) => {
  const { isUserPremium } = useSelector(mapState);
  const dispatch = useDispatch();
  const myEmail = "ouss@gmail.com";
  const [myId, setMyId] = useState();
  const [ourIds, setOurIds] = useState(null);
  const purchasePremium = () => {
    dispatch(makeUserPremium());
    Alert.alert("Congratulations !");
  };
  const restore = () => {
    dispatch(restorePurchase());
  };
  useEffect(() => {
    console.log("is user premium", isUserPremium);
  }, [isUserPremium]);
  // const getApi = async () => {
  //   try {
  //     await fetch(
  //       "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/users/"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("hahahaha", data);
  //         setOurIds(data);
  //       })
  //       .catch((err) => {
  //         console.log("error => ", err);
  //       });
  //   } catch (err) {
  //     console.log("----------------------", err);
  //   }
  // };
  // useEffect(() => {
  //   if (ourIds !== null) {
  //     getCorrespandId();
  //   }
  // }, [ourIds]);
  // const getCorrespandId = () => {
  //   console.log("ourIds", ourIds);
  //   ourIds.data.forEach((item) => {
  //     if (item.email === myEmail) {
  //       setMyId(item.id);
  //       console.log("item =>", item.id);
  //     }
  //   });
  // };
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
      headerTitle: () => <HeaderTitle title={"Premium"} />,
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
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={PremiumImg} style={styles.imgBg} />
        <View style={styles.premiumInternBox}>
          <HeaderTitle
            color={"white"}
            fontSize={22}
            title={"Sound & Soulful"}
          />
          <Text style={styles.premiumTxt1s}>Upgrade Now for unlock</Text>
          <Text style={styles.premiumTxt1s}>all features</Text>
        </View>
        <View style={styles.premiumBox}>
          <View style={styles.leftOne}>
            <Text style={styles.monthStyle}>1 Month VIP</Text>
            <Text style={styles.subStyle}>Subscription</Text>
          </View>
          <View style={styles.rightOne}>
            <Text style={styles.priceStyle}>19.99$</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnPurchase}
          onPress={() => purchasePremium()}
        >
          <Text style={styles.btnPurchaseTxt}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", bottom: 10 }}
          onPress={() => restore()}
        >
          <Text style={styles.restoreBtn}>Restore purchase</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({
  restoreBtn: {
    fontWeight: "bold",
    color: "#fff",
  },
  btnPurchaseTxt: {
    color: "#000",
    fontSize: 20,
  },
  btnPurchase: {
    backgroundColor: "white",
    paddingHorizontal: 50,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  monthStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  priceStyle: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
  },
  subStyle: {
    color: "#fff",
  },
  leftOne: {
    backgroundColor: "rgba(157, 25, 25, 0.6)",
    height: 55,
    paddingHorizontal: 30,
    paddingLeft: 15,
    borderRadius: 4,
    justifyContent: "center",
    marginRight: 2,
  },

  rightOne: {
    backgroundColor: "rgba(157, 25, 25, 0.6)",
    height: 55,
    paddingHorizontal: 20,
    paddingLeft: 15,
    borderRadius: 4,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 10,
  },
  premiumTxt1s: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  premiumBox: {
    flexDirection: "row",
  },
  imgBg: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  premiumInternBox: {
    width: "80%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
