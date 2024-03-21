import React from "react";
import { View, Text, Pressable } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./Styles";

const Home = () => {
    function Mensagem(){
        alert('Vai')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headHeader}>
                    <Icons onPress={Mensagem} name="menu" size={20} color='#fff'></Icons>
                    <Icons onPress={Mensagem} name="bell-outline" size={20} color='#fff'></Icons>
                </View>

                <View style={styles.headBody}>
                    <View style={styles.headBodyValue}>
                        <Text style={styles.textValue}>2800,00 R$</Text>
                        <Text style={styles.textBalance}>Available Balance</Text>
                    </View>
                <View style={styles.headBodyButton}>
                    <Pressable style={styles.buttonTopMe}>
                        <Text style={styles.textButtonTopMe}>TOP ME</Text>
                    </Pressable>
                </View>
                </View>
            </View>

            <View style={styles.modaloptions}>

            </View>
        </View>
    )
}

export default Home;