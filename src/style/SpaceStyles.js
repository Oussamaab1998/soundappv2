import { StyleSheet } from 'react-native'

const SpaceStyles = StyleSheet.create({

    flexCenter: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignSpaceBlock:{

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    alignSpaceVerticalBlock:{

        height:500
    },

    rowFlex:{

        flexDirection: 'row',
        alignItems: 'center',
    },

    textAlign:{

        textAlign:'center'
    },

    spaceHorizonatl:{

    },

    top: {

    },
    top1: {

        marginTop: 10
    },
    top2:{

        marginTop:20
    },
    top5: {

        marginTop: 50
    },
    top10: {

        marginTop: 10
    },
    top14: {

        marginTop: 14
    },

    left5:{

        marginLeft:5
    },
    left10:{

        marginLeft:10
    },

    
    bottom20:{

        marginBottom:20
    },

    padding5:{

        padding: 5
    },
    padding10: {

        padding: 10
    },
    padding20: {

        padding: 20
    },
    vertical2: {

        paddingVertical: 20
    },
    vertical1: {

        paddingVertical: 10

    },

    height50:{

        height:550
    },
    height90:{

        height:900
    },
})

export default SpaceStyles;