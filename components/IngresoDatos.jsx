import { StyleSheet, Text, View, Dimensions, TouchableOpacity , ScrollView} from 'react-native';
import React, {useState} from 'react';

import { Ionicons } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function IngresoDatos() {
    const [buttonsEnabled, setButtonsEnabled] = useState(true);

    const bloqueandoBotones = (event) => {
        setButtonsEnabled(false);
    }
    const desbloqueandoBotones = (event) => {
        setButtonsEnabled(true);
    }

    return (
        <View style={styles.container}>
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>
                <ScrollView horizontal={true} onScroll={bloqueandoBotones} showsHorizontalScrollIndicator={false} onMomentumScrollEnd ={desbloqueandoBotones}>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: 'red' }}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28 }}><Ionicons name="arrow-back" size={22} color="#0ffc03" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>√</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 30, color: '#0ffc03' }}>^</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>x!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>π</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 25, color: '#0ffc03' }}>lg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled}>
                        <Text style={{ fontSize: 25, color: '#0ffc03' }}>ln</Text>
                    </TouchableOpacity>
                </ScrollView>
               

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: '#0ffc03' }}>x</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: '#0ffc03' }}>-</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: 'white' }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ fontSize: 28, color: '#0ffc03' }}>+</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:10 }}>
                <TouchableOpacity style={styles.boton}>
                   <Text style={{ fontSize: 28, color: 'white' }}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                   <Text style={{ fontSize: 28, color: 'white' }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boton, {width: windowWidth * 0.4}]}>
                   <Text style={{ fontSize: 28, color: 'red' }}>{"="}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight * 0.6,
        backgroundColor: '#2A2D37',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    boton: {
        width: windowWidth * 0.2, 
        height: windowHeight * 0.1, 
        backgroundColor: '#22252D',
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 5
    }
});

export default IngresoDatos;