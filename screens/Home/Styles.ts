import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FaFaFa',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    header: {
        backgroundColor: '#4A44FF',
        width: '100%',
        height: '30%',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        display: 'flex',
        paddingVertical: '10%',
        paddingHorizontal: '10%',
    },

    headHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30%',
    },

    headBody:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
    },

    headBodyValue:{
        
    },

    textValue: {

    },

    textBalance:{

    },

    headBodyButton: {

    },

    buttonTopMe:{

    },

    textButtonTopMe:{

    },

    modaloptions:{
        backgroundColor: '#fff',
        width: '80%',
        height: '40%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: '25%',
        borderRadius: 15,
        flexWrap: 'wrap',
    }
})