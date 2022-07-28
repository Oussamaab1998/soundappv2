import { StyleSheet, ScrollView, View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import CustomText from "../components/CustomText";

import { backIcon, drawerIcon } from "../constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";

const ContentContainer = ({ data }) => {

    const renderContent = (data) => {

        return (
            <>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </>
        )
    }

    const renderItem = ({ item }) => {

        return (
            <>
                {
                    !!item.title &&
                    <CustomText
                        text={item.title}
                        style={[TextStyles.textQuicksandBold10Black, SpaceStyles.bottom5]}
                    />
                }
                {
                    item?.content?.length > 0 &&
                    <FlatList
                        data={item.content}
                        renderItem={renderConditons}
                        keyExtractor={item => item.id}
                    />
                }
            </>
        )
    }

    const renderConditons = ({ item }) => {

        return (
            <>
                {
                    !!item.heading &&
                    <CustomText
                        text={item.heading}
                        style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left10]}
                    />
                }
                {
                    item?.body?.length > 0 &&
                    <FlatList
                        data={item.body}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem}
                    />
                }
            </>

        )
    }

    const renderListItem = ({ item }) => {

        return (
            <>
                {
                    !!item.title &&
                    <CustomText
                        text={item.title}
                        style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left20]}
                    />
                }
                {
                    item?.points?.length > 0 &&
                    <FlatList
                        data={item.points}
                        keyExtractor={item => item.id}
                        renderItem={renderPoints}
                    />
                }
            </>
        )
    }

    const renderPoints = ({ item }) => {

        return (
            <CustomText
                text={item.title}
                style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left30]}
            />
        )
    }

    return (
        <React.Fragment>

            <View
                style={[AuthStyles.ContentContainer, SpaceStyles.top20]}
            >
                {
                    renderContent(data)
                }
            </View>
        </React.Fragment>
    );
};

export default ContentContainer;

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


const renderContent = (data) => {

    return (
        <>
            <CustomText
                text={"AGREEMENT TO TERMS"}
                style={[TextStyles.textQuicksandBold10Black, SpaceStyles.bottom5]}
            />


            <CustomText
                text={"You represent, warrant and covenant that:"}
                style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left10]}
            />

            <CustomText
                text={" 3.5.1 you have full power and authority to accept these Terms, to grant any license and authorization and to perform any of your obligations hereunder;"}
                style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left20]}
            />

        </>
    )
}