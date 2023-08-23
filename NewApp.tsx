import React from 'react'
import {View, Text, SafeAreaView, ColorSchemeName, useColorScheme, StyleSheet} from 'react-native'


function NewApp(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark'

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