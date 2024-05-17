import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Replica = ({ navigation }) => {
    const informacion = data;

    const irPantalla1 = async () => {
        navigation.navigate('Pantalla1');
    };

    return (
        <View style={styles.container}>
            <View style={styles.flatListContainer}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.textoTitulo}>Colores aquosos</Text>
                    </View>
                    <View style={styles.contenedorCards}>
                        <View style={cardStyles.cardContainer1}>
                            <Image source={require("../img/turquesa.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Turquesa</Text>
                            <Text style={styles.textoHex}>#1abc9c</Text>
                        </View>
                        <View style={cardStyles.cardContainer2}>
                            <Image source={require("../img/esmeralda.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Esmeralda</Text>
                            <Text style={styles.textoHex}>#2ecc71</Text>
                        </View>
                        <View style={cardStyles.cardContainer3}>
                            <Image source={require("../img/azulcielo.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Azul cielo</Text>
                            <Text style={styles.textoHex}>#3498db</Text>
                        </View>
                        <View style={cardStyles.cardContainer4}>
                            <Image source={require("../img/amatista.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Amatista</Text>
                            <Text style={styles.textoHex}>#9b59b6</Text>
                        </View>
                        <View style={cardStyles.cardContainer5}>
                            <Image source={require("../img/asfalto.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Asfalto mojado</Text>
                            <Text style={styles.textoHex}>#34495e</Text>
                        </View>
                        <View style={cardStyles.cardContainer6}>
                            <Image source={require("../img/mar.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Mar verde</Text>
                            <Text style={styles.textoHex}>#16a085</Text>
                        </View>
                    </View>

                    <View style={styles.tituloContainer}>
                        <Text style={styles.textoTitulo}>Colores naturales</Text>
                    </View>
                    <View style={styles.contenedorCards}>
                        <View style={cardStyles.cardContainer7}>
                            <Image source={require("../img/nephritis.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Nephritis</Text>
                            <Text style={styles.textoHex}>#27ae60</Text>
                        </View>
                        <View style={cardStyles.cardContainer8}>
                            <Image source={require("../img/agujero.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Belize hole</Text>
                            <Text style={styles.textoHex}>#2980b9</Text>
                        </View>
                        <View style={cardStyles.cardContainer9}>
                            <Image source={require("../img/wisteria.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Wisteria</Text>
                            <Text style={styles.textoHex}>#8e44ad</Text>
                        </View>
                        <View style={cardStyles.cardContainer10}>
                            <Image source={require("../img/midnightblue.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Midnight blue</Text>
                            <Text style={styles.textoHex}>#2c3e50</Text>
                        </View>
                        <View style={cardStyles.cardContainer11}>
                            <Image source={require("../img/sunflower.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Sunflower</Text>
                            <Text style={styles.textoHex}>#f1c40f</Text>
                        </View>
                        <View style={cardStyles.cardContainer12}>
                            <Image source={require("../img/carrot.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Carrot</Text>
                            <Text style={styles.textoHex}>#e67e22</Text>
                        </View>
                    </View>


                    <View style={styles.tituloContainer}>
                        <Text style={styles.textoTitulo}>Otros colores</Text>
                    </View>
                    <View style={styles.contenedorCards1}>
                        <View style={cardStyles.cardContainer13}>
                            <Image source={require("../img/alizarin.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Alizarin</Text>
                            <Text style={styles.textoHex}>#e74c3c</Text>
                        </View>
                        <View style={cardStyles.cardContainer14}>
                            <Image source={require("../img/clouds.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Clouds</Text>
                            <Text style={styles.textoHex}>##ecf0f1</Text>
                        </View>
                        <View style={cardStyles.cardContainer15}>
                            <Image source={require("../img/concrete.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Concrete</Text>
                            <Text style={styles.textoHex}>#8e44ad</Text>
                        </View>
                        <View style={cardStyles.cardContainer16}>
                            <Image source={require("../img/orange.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Orange</Text>
                            <Text style={styles.textoHex}>#f39c12</Text>
                        </View>
                        <View style={cardStyles.cardContainer17}>
                            <Image source={require("../img/pumpkin.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Pumpkin</Text>
                            <Text style={styles.textoHex}>#d35400</Text>
                        </View>
                        <View style={cardStyles.cardContainer18}>
                            <Image source={require("../img/pomegranate.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Pomegranate</Text>
                            <Text style={styles.textoHex}>#c0392b</Text>
                        </View>
                        <View style={cardStyles.cardContainer19}>
                            <Image source={require("../img/silver.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Silver</Text>
                            <Text style={styles.textoHex}>#bdc3c7</Text>
                        </View>
                        <View style={cardStyles.cardContainer20}>
                            <Image source={require("../img/asbesto.png")} style={styles.image} />
                            <Text style={styles.textoHex}>Asbestos</Text>
                            <Text style={styles.textoHex}>#7f8c8d</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Replica;

const cardStyles = StyleSheet.create({
    cardContainer1: {
        backgroundColor: '#1abc9c',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer2: {
        backgroundColor: '#2ecc71',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer3: {
        backgroundColor: '#3498db',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer4: {
        backgroundColor: '#9b59b6',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer5: {
        backgroundColor: '#34495e',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer6: {
        backgroundColor: '#16a085',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer7: {
        backgroundColor: '#27ae60',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer8: {
        backgroundColor: '#2980b9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer9: {
        backgroundColor: '#8e44ad',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer10: {
        backgroundColor: '#2c3e50',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer11: {
        backgroundColor: '#f1c40f',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    cardContainer12: {
        backgroundColor: '#e67e22',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer13: {
        backgroundColor: '#e74c3c',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer14: {
        backgroundColor: '##ecf0f1',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer15: {
        backgroundColor: '#8e44ad',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer16: {
        backgroundColor: '#f39c12',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer17: {
        backgroundColor: '#d35400',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer18: {
        backgroundColor: '#c0392b',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer19: {
        backgroundColor: '#bdc3c7',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    
    cardContainer20: {
        backgroundColor: '#7f8c8d',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 20,
    },
    textoTitulo: {
        color: 'white',
        textAlign: 'start',
        fontWeight: '700',
        paddingLeft: 20
    },
    textoHex: {
        color: 'white',
    },
    scroll: {
        height: Dimensions.get('window').height
    },
    tituloContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: '#646f72',
        height: 50,
        justifyContent: 'center',
    },
    flatListContainer: {
        height: Dimensions.get('window').height
    },
    contenedorCards: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 3,
        padding: 10,
        height: 400
    },
    contenedorCards1: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 3,
        padding: 10,
        height: 575
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto: {
        marginHorizontal: 15
    }
});
