import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function IngresoDatos() {
    const [buttonsEnabled, setButtonsEnabled] = useState(true);
    const [datos, setDatos] = useState([]);

    const bloqueandoBotones = (event) => {
        setButtonsEnabled(false);
    }
    const desbloqueandoBotones = (event) => {
        setButtonsEnabled(true);
    }
    useEffect(() => {
        // console.log(datos);
    }, [datos])

    const botonC= () => {
        console.log("botonC"); 
        setDatos([]);
    }

    return (
        <View>
            <View style={styles.containerArriba}>
                
            </View>
            <View style={styles.containerMedio}>
                {
                    datos.map((dato, index) => {
                        return (
                            <Text key={index} style={{ fontSize: 45, color: (typeof dato == 'number'? 'white' : 'green'), margin:3 }}>{dato}</Text>
                        )
                    })
                }
            </View>
            <View style={styles.containerAbajo}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>
                    <ScrollView horizontal={true} onScroll={bloqueandoBotones} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={desbloqueandoBotones}>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={ () => {botonC()}}>
                            <Text style={{ fontSize: 28, color: 'red' }}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "back"]); }}>
                            <Text style={{ fontSize: 28 }}><Ionicons name="arrow-back" size={22} color="#0ffc03" /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "%"]); }}>
                            <Text style={{ fontSize: 28, color: '#0ffc03' }}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "/"]); }}>
                            <Text style={{ fontSize: 28, color: '#0ffc03' }}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "√"]); }}>
                            <Text style={{ fontSize: 28, color: '#0ffc03' }}>√</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "^"]); }}>
                            <Text style={{ fontSize: 30, color: '#0ffc03' }}>^</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "x!"]); }}>
                            <Text style={{ fontSize: 28, color: '#0ffc03' }}>x!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "π"]); }}>
                            <Text style={{ fontSize: 28, color: '#0ffc03' }}>π</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "lg"]); }}>
                            <Text style={{ fontSize: 25, color: '#0ffc03' }}>lg</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { setDatos([...datos, "ln"]); }}>
                            <Text style={{ fontSize: 25, color: '#0ffc03' }}>ln</Text>
                        </TouchableOpacity>
                    </ScrollView>


                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 7]); }} >
                        <Text style={{ fontSize: 28, color: 'white' }}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 8]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 9]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, "x"]); }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>x</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 4]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 5]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 6]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, "-"]); }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>-</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 1]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 2]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 3]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, "+"]); }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>+</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, "."]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { setDatos([...datos, 0]); }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boton, { width: windowWidth * 0.4 }]} onPress={() => { setDatos([...datos, "="]); }}>
                        <Text style={{ fontSize: 28, color: 'red' }}>{"="}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerArriba: {
        width: windowWidth,
        height: windowHeight * 0.20,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerMedio: {
        width: windowWidth,
        height: windowHeight * 0.15,
        backgroundColor: '#22252D',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    containerAbajo: {
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