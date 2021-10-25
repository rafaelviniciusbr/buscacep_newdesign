import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Image, TouchableOpacity, SegmentedControlIOSComponent} from 'react-native';

export default function MostrarModal(props){
    const {exibirModal, setExibirModal} = props;
    return(
            <Modal visible={exibirModal} transparent={true} animationType={'slide'}>
                <View style={styles.popUp}>
                <TouchableOpacity onPress={() => setExibirModal(false)}>
                    <Image style={styles.iconFechar} source={require('../../assets/img/cancelar.png')} />
                </TouchableOpacity>
                    <Text style={styles.title}>Dados do endereço:</Text>
                    <Text style={styles.txtEndereco}>Cep: {props.data.cep}</Text> 
                    <Text style={styles.txtEndereco}>Logradouro: <Text style={styles.txtEndereco}>{props.data.logradouro} </Text> </Text>
                    <Text style={styles.txtEndereco}>Bairro: <Text style={styles.txtEndereco}>{props.data.bairro} </Text> </Text>
                    <Text style={styles.txtEndereco}>Cidade: <Text style={styles.txtEndereco}>{props.data.localidade} </Text> </Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    popUp:{
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: 400,
        height: 400,
        borderRadius: 50,
        margin: 5,
        marginTop: 100,
        borderWidth: 1,
        borderColor:'#D154E8',
        elevation: 25,
        zIndex: 1,
        padding: 5,
    },
    txtEndereco:{
        textAlign: 'center',
        fontSize: 22,
        margin: 3,
        fontWeight: 'bold'
    },
    title:{
        fontFamily: 'Age',
        fontSize: 25,
        textAlign: 'center',
        color: '#5B57F2',
        marginBottom: 30,
        marginTop: -50,
    },
    iconFechar:{
        marginStart: 320,
        marginTop: -155,
        height: 80,
        width: 80
    }

});