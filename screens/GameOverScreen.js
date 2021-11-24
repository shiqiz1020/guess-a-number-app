import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/success.png')} 
                style={styles.image}
                resizeMode="cover"
            />
            </View>
            <View style={styles.resultContainer}>
            <Text style={DefaultStyles.bodyText}>Your phone needed
                <Text style={styles.highlight}> {props.roundsNumber} </Text> 
                rounds to guess the number 
                <Text style={styles.highlight}> {props.roundsNumber} </Text>
            </Text>
            </View>
            {/* <Text style={DefaultStyles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text> */}
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        margin: 30,
        marginVertical: 15
    }
});

export default GameOverScreen;