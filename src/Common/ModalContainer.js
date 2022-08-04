//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Modal,
    StyleSheet,
    Pressable
} from "react-native";

// third party lib
import { ScrollView } from "react-native-gesture-handler";
import { Portal, Button, Provider } from "react-native-paper";

// styles
import AuthStyles from "../style/AuthStyles";
import CommonStyles from "../style/CommonStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";

//---------- component

function ModalContainer({ navigation, key, content, isVisible }) {

    //---------- state, veriable and hooks

    const [visible, setVisible] = React.useState(isVisible);

    //---------- life cycle

    useEffect(() => {

        setVisible(isVisible);
    }, [isVisible]);

    //---------- helper: user's actions

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const renderContent = () => {

        switch (key) {

            case 'affirmations':

                return (
                    <React.Fragment>
                        <View
                            style={[CommonStyles.RowSpaceBetween, { padding: 10 }]}
                        >
                            <Text
                                style={[TextStyles.textBold24Black]}
                            >
                                Affirmations
                            </Text>
                        </View>

                        <View style={CommonStyles.DeviderLine} />

                        <View
                            style={
                                AuthStyles.ModalContentContainer
                            }
                        >
                            <Text>
                                {
                                    content
                                }
                            </Text>
                        </View>

                        <View style={CommonStyles.DeviderLine} />

                        <View
                            style={[CommonStyles.RowEnd, { padding: 10 }]}
                        >
                            <TouchableOpacity
                                style={CommonStyles.GrayBtn}
                                onPress={() => {
                                    hideModal()
                                }}
                            >
                                <Text
                                    style={
                                        TextStyles.textSegoe18White
                                    }
                                >
                                    Close
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </React.Fragment>
                )
                break;



            default:
                break;
        }
    }

    //---------- return main view


    return (
        <View
            style={styles.centeredView}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    hideModal()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        {
                            renderContent(key)
                        }

                    </View>
                </View>
            </Modal>
        </View>
    );
};


//---------- export component

export default ModalContainer;



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
