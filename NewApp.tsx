import React, { useEffect } from 'react'
import {View, Text, SafeAreaView, ColorSchemeName, useColorScheme, StyleSheet, Platform} from 'react-native'
import SplashScreen from 'react-native-splash-screen'


function NewApp(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark'

    useEffect(() => {
        if(Platform.OS === 'android')
        SplashScreen.hide();
    }, [])

    return(
        <SafeAreaView>
            <View style= {styles.container}>
                <Text style= {isDarkMode ? styles.whiteText : styles.darkText}>Hello world</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'flex-end'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})


export default NewApp