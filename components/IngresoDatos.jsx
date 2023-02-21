import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function IngresoDatos() {
    const [buttonsEnabled, setButtonsEnabled] = useState(true);
    const [datos, setDatos] = useState([]);
    const [datosPatalla, setDatosPantalla] = useState(null);
    const [calculos, setCalculos] = useState([]);
    const [resultado, setResultado] = useState(0);

    const bloqueandoBotones = (event) => {
        setButtonsEnabled(false);
    }
    const desbloqueandoBotones = (event) => {
        setButtonsEnabled(true);
    }
   
    const botonC= () => {
        console.log("botonC"); 
        setDatos([]);
    }

    const botonCalculos = () => {
        let calculos = [];
        let concatenat = '';
        for (let i = 0; i < datos.length; i++) {
            if (typeof datos[i] == 'number' || datos[i]== '.' ) {
                concatenat += datos[i];
            }
           
            if (typeof datos[i] == 'string' && datos[i] != 'back' && datos[i] != '.') {
                calculos.push(parseFloat(concatenat));
                calculos.push(datos[i]);
                concatenat = '';
            }
            
           
        }
        calculos.push(parseFloat(concatenat));
        concatenat = '';
        console.log(calculos);
        setCalculos(calculos);
    }
    const backBotton = () => {
        let datosTemp = datos;
        datosTemp.pop();
        setDatos(datosTemp);
        pantalla();

    }

    const evaluarDatos = (dato) => {
        // setDatos([...datos, 8]); 
        console.log(`dato: ${dato}`);
    }

    const pantalla = () => {
        let pantalla = '';
        for (let i = 0; i < datos.length; i++) {
            pantalla += datos[i];
        }
        setDatosPantalla(pantalla);
    }
    const sumar = (a, b) => {
        return a + b;
    }
    const restar = (a, b) => {
        return a - b;
    }
    const multiplicar = (a, b) => {
        return a * b;
    }

    const calcularDatos = () => {
        let calculosTemp = calculos;
        let resultado = 0;

        for (let i = 0; i < calculosTemp.length; i++) {
            if(typeof calculosTemp[i] == "string"){
                 
            }
        }

        
        
        // console.log(resultado);
        setDatos([resultado]);
    }
    
    useEffect(() => {
        pantalla();
        botonCalculos();
    }, [datos]);
    
    return (
        <View>
            <View style={styles.containerArriba}>
                
            </View>
            <View style={styles.containerMedio}>
                {
                    <Text style={{ fontSize: 45, color: '#aaa', margin: 10 }}>{datosPatalla}</Text>
                }
            </View>
            <View style={styles.containerAbajo}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>
                    <ScrollView horizontal={true} onScroll={bloqueandoBotones} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={desbloqueandoBotones}>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={ () => {botonC()}}>
                            <Text style={{ fontSize: 28, color: 'red' }}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} disabled={!buttonsEnabled} onPress={() => { backBotton() }}>
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
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos (7) }} >
                        <Text style={{ fontSize: 28, color: 'white' }}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(8) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(9) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos("x") }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>x</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(4) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(5) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(6) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos("-") }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>-</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(1) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(2) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(3) }}>
                        <Text style={{ fontSize: 28, color: 'white' }}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos("+") }}>
                        <Text style={{ fontSize: 28, color: '#0ffc03' }}>+</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(".")}}>
                        <Text style={{ fontSize: 28, color: 'white' }}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => { evaluarDatos(0)}}>
                        <Text style={{ fontSize: 28, color: 'white' }}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boton, { width: windowWidth * 0.4 }]} onPress={() => { calcularDatos() }}>
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