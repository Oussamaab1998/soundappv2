
//---------- imports

// react
import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, SafeAreaView, Text, ActivityIndicator } from 'react-native'

// third party lib
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

// common componets
import CustomText from "../../../components/CustomText";
import NavigationService from "../../../navigation/NavigationService";

// components
import HeaderLeft from "../../../components/HeaderLeft";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";

// styles, icons and colors
import CommonStyles from "../../../style/CommonStyles";
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";
import { backIcon, bagIcon, drawerIcon, musicIcon, splashLog, grayStarIcon, blackRoundIcon } from "../../../constants/Images";
import axios from "axios";

// constants
const data = [
    { name: 'glow from the inside out' },
    { name: 'hair is thick, glossy & fast-growing' },
    { name: 'highlight your inner goddess beauty' },
    { name: 'smooth, soft and glowing skin' },
    { name: 'straight & white teeth' },
    { name: 'perfect smile' },
    { name: 'big, full lips & ideal mouth' },
    { name: 'captivating face and a beautiful body' },
    { name: 'deep, soul-level beauty' }
]

//---------- component

function CategoryList({ navigation, route }) {
    const {selectedSublimal,sublimalCategory,sublimalID} = route.params
    const [categories, setCategories] = useState()
    const [loading, setLoading] = useState(false)


    //---------- state, veriable and hooks
    const getCategories = async() => {
        setLoading(true)
        await axios({
            method:'GET',
            url:'http://soundnsoulful.alliedtechnologies.co:8000/v1/api/categories',
        }).then((res) => {
            var checkData = res.data?.data
            var result = checkData.filter(function(value) {
                if(sublimalCategory.indexOf(value.id) !== -1) {
                    return value
                }
            });
            setCategories(result)
            setLoading(false)
        }).catch(err => {
            console.log(err,'ERROR')
        })
    }
    
    useEffect(() => {
        getCategories()
    },[])

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

    if(loading) {
        return (
            <View style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color={'black'} size='large'/>
            </View>
        )
    }


    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}} >
            <ScrollView>

                <View
                 style={AuthStyles.authContainer}
                 >
                    <View
                     style={SpaceStyles.top5}
                     >
                        <TouchableOpacity 
                        style={CommonStyles.musicCategory}
                        >
                            <Image
                                source={grayStarIcon}
                                resizeMode='cover'
                            />
                            <CustomText
                                text={selectedSublimal}
                                style={[TextStyles.quicksandRegular24Black, SpaceStyles.left5]}
                            />
                        </TouchableOpacity>

                        <CustomText
                            text={`Subliminal to amplify ${selectedSublimal}`}
                            style={[TextStyles.textBold24Black, SpaceStyles.textAlign, SpaceStyles.vertical2]}
                        />
                        {categories && categories.map((i) => {
                            return (
                                <TouchableOpacity
                                 style={CommonStyles.musicCategory} 
                                 onPress={() => {
                                    navigation.navigate('Songs', {
                                        selectedSublimal:selectedSublimal,
                                        sublimalID:sublimalID,
                                        fromPlayList:false,
                                        songsID:[]
                                    })
                                 }}
                                >
                                    <Image
                                        source={blackRoundIcon}
                                        resizeMode='contain'
                                    />
                                    <CustomText
                                        text={i.name}
                                        style={[TextStyles.quicksandRegular16Black, SpaceStyles.left5, SpaceStyles.bottom1]}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <TouchableOpacity
                        style={SpaceStyles.bottom20}
                        onPress={() => NavigationService.navigate('MusicScreen')}
                    >
                        <CustomText
                            text={'Listen Now'}
                            style={[TextStyles.textBold36Black, SpaceStyles.textAlign, SpaceStyles.top2, { textDecorationLine: 'underline' }]}
                        />
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

//---------- export component

export default CategoryList;
