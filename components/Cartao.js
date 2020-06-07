/*import React from 'react';
import {View, StyleSheet} from 'react-native';
import Medidas from '../medidas/Medidas'


const Cartao = (props) => {
    return (
    <View style={{...estilos.cartao, ...props.estilos}}>{props.children}</View>
    );


};

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
        width: Medidas.zero,
        height: Medidas.two
        },
        shadowRadius: Medidas.six,
        shadowOpacity: Medidas.cartaoShadow,
        backgroundColor: 'white',
        elevation: Medidas.four,
        padding: Medidas.twelve,
        borderRadius: Medidas.twelve
    }

});

export default Cartao;*/
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Cartao = (props) => {
    return (
        <View style={{ ...styles.cartao, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        elevation: 4,
        padding: 4,
        margin: 4,
        borderRadius: 8,
        minWidth: '99%',
        width:'100%',
    }
});

export default Cartao;