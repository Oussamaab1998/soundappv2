import React from "react";
import { Text } from "react-native";
import constants from "../constants";
import { WHITE } from "../constants/Colors";
import TextStyles from "../style/TextStyles";

function HeaderTitle({ title, color }) {
  return (
    <Text
      style={[
        TextStyles.textBold28Black,
        {
          alignSelf: "center",
          //   fontSize: fontSize ? fontSize : 22,
          color: color,
        },
      ]}
    >
      {title}
    </Text>
  );
}
export default HeaderTitle;
