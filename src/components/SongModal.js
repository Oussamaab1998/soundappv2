import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SongModal = (props) => {
  const { item, index, navigation } = props;
  const handlePress = () => {
    console.log("Clicked");
    navigation.navigate("audioPlayer", { item: item });
  };
  return (
    <TouchableOpacity
      style={[styles.songContainer, styles.shadow1]}
      onPress={handlePress}
    >
      <Text style={styles.index}>{index + 1}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.songThumbnail} />
      <Text style={styles.title}>
        {item.title.length > 38 ? item.title.substr(0, 35) + "..." : item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SongModal;

const styles = StyleSheet.create({
  songContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 5,
    backgroundColor: "#F5F5F6",
    borderRadius: 8,
  },
  index: {
    color: "#000000",
    fontSize: 14,
    marginHorizontal: 10,
  },
  songThumbnail: {
    width: 50,
    height: 40,
    borderRadius: 8,
    resizeMode: "cover",
    marginRight: 10,
  },
  title: {
    color: "#000000",
    fontSize: 12,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 2,
  },
});
