import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../ui/Card';

const ProductItem = props => {

    let TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }

    const localImage = prodName => {
        console.log('prodName: ' + prodName)
        switch (prodName) {
            case 'Orange Socks':
                return require('../../assets/images/orangesocks.jpg');
            case 'Red Shirt':
                return require('../../assets/images/red-t-shirt-1710578_1280.jpg');
            case 'MacBook Pro':
                return require('../../assets/images/macbookpro.jpg');
            default:
                return require('../../assets/images/orangesocks.jpg');
        }
    };

    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={localImage(props.title)} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            {props.children}
                        </View>
                    </View>
                </TouchableComp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '18%',
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans',
        marginVertical: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '22%',
        paddingHorizontal: 20,
    }
});

export default ProductItem