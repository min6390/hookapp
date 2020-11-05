import {Image, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ProductImage = ({image, name, content, price}) => (
    <View style={styles.container}>
        <View style={{height: '100%'}}>
            <Image
                style={styles.imageFood}
                source={image}
                resizeMode={'cover'}/>
        </View>
        <View style={{marginHorizontal: 5, flex: 1}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
            </View>
            <View>
                <Text>{content}</Text>

            </View>
            <View style={{alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{alignSelf: 'center', marginHorizontal: 10}}>
                    <Text style={{fontWeight: 'bold', color: 'blue'}}>{price} VND</Text>
                </View>
                <TouchableOpacity style={{borderRadius: 5, borderWidth: 1, padding: 5, margin: 5}}>
                    <Text>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
