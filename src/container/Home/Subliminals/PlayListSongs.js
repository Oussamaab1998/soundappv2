import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";
import { backIcon, drawerIcon } from "../../../constants/Images";
import SongModal from "../../../components/SongModal";

const PlayListSongs = ({ navigation }) => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

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
      headerTitle: () => <HeaderTitle title={"Custom Playlist"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const fetchSongs = async () => {
    await fetch({
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          setSongs(res);
        } else {
          const err = "Something went wrong please try again later";
          setError(err);
        }
      })
      .catch((error) => {
        console.error(error);
        const err = "Something went wrong please try again later";
        setError(err);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  console.log("----------------------");
  console.log("songs :", songs);
  console.log("----------------------");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {error.length > 0 && songs.length === 0 && (
          <Text style={styles.error}>{error}</Text>
        )}
        {songs?.length > 0 &&
          songs.map((item, index) => (
            <View key={index}>
              {/* <SongModal
                item={item}
                index={index}
                navigation={navigation}
                songs={songs}
              /> */}
              <View
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "grey",
                  justifyContent: "center",
                  //   alignItems: "center",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>{item.prayer_name}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default PlayListSongs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 10,
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});
