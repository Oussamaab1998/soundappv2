import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const CommonStyles = StyleSheet.create({

    authContainer: {

        flex: 1,
        backgroundColor: Colors.WHITE
    },
    homeTopView: {

        width: width,
        height: 300,

        marginLeft: -30,
        backgroundColor: Colors.BLACK,

        alignItems: 'center',
        justifyContent: 'center'

    },
    headerLeftView: {

    },

    drawerUserIconSection: {

        marginVertical: 10,
        height: 100,
        width: 100,

        backgroundColor: Colors.BLACK,
        borderRadius: 50,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    borderView: {

        height: 1,
        width: '100%',
        backgroundColor: Colors.LIGHTGRAY,

        marginVertical: 20
    },

    musicBorderView: {

        height: 1,
        width: '100%',
        backgroundColor: Colors.LIGHTGRAY,
    },

    musicCategory: {

        marginVertical:10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    musicList: {

        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    musicView: {

        flex: 1,

        width: width,
        padding: 10,

        position: 'absolute',
        bottom: 0,

    }

})

export default CommonStyles;