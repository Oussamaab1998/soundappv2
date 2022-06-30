//---------- imports

// react
import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, SafeAreaView, Text } from 'react-native'

// third party lib
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// common componets
import CustomText from "../../../components/CustomText";
import NavigationService from "../../../navigation/NavigationService";

// components
import HeaderLeft from "../../../components/HeaderLeft";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";

// styles, icons and colors
import AuthStyles from "../../../style/AuthStyles";
import CommonStyles from "../../../style/CommonStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";
import { backIcon, bagIcon, drawerIcon, musicIcon, splashLog, grayStarIcon } from "../../../constants/Images";

// constants
const data = [
    { name: 'BEAUTY' },
    { name: 'BODY' },
    { name: 'BUSINESS' },
    { name: 'CHAKRAS' },
    { name: 'FACE' },
    { name: 'LOVE + RELATIONSHIPS' },
    { name: 'MANIFESTATION MAGIC' },
    { name: 'MIND POWER' },
    { name: 'MONEY & FAME' },
    { name: 'MOOD' },
    { name: 'TWIN FLAMES' },
]

//---------- component

function Subliminals({ navigation }) {


    //---------- state, veriable and hooks

    //---------- life cycle

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight iconName1={''} iconName2={''} iconName3={drawerIcon} onPress3={() => navigation.openDrawer()} />,
            headerTitle: () => <HeaderTitle title={'Subliminals'} />,
            headerLeft: () => <HeaderLeft text={''} iconName={backIcon} onPress={() => navigation.goBack()} />,
        });
    }, [navigation]);

    //---------- helper: user's actions

    //---------- return main view

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView>
                <View style={SpaceStyles.top5}>
                    {data.map((i) => {
                        return (
                            <TouchableOpacity
                             style={CommonStyles.musicCategory}
                             onPress={() => NavigationService.navigate('categoryListScreen')}>
                                <Image
                                    source={grayStarIcon}
                                    resizeMode='cover'
                                />
                                <CustomText
                                    text={i.name}
                                    style={[TextStyles.quicksandRegular24Black, SpaceStyles.left10]}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </SafeAreaView>
        </View>
    )
}

//---------- export component

export default Subliminals