import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://orderfood2007.000webhostapp.com/foodapp.php')
            .then(res => {
                const data = res.data.map(food => {
                    return {...food};
                });
                setData(data);
            });
    });
    return (
        <View style={{flex: 1}}>
            <FlatList
                keyExtractor={item => item.id}
                style={{flex: 1}}
                data={data}
                renderItem={({item}) =>
                    <View
                        style={styles.container}>
                        <View>
                            <Image
                                resizeMode={'cover'}
                                style={styles.imageFood}
                                source={{uri: item.imageFood}}
                            />
                        </View>
                        <View>
                            <Text>
                                {item.nameFood}
                            </Text>
                            <Text>
                                {item.contentFood}
                            </Text>
                        </View>
                    </View>
                }
            />
        </View>
    );
}

const getWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        borderWidth: 1 / 2,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageFood: {
        height: getWidth / 3,
        borderRadius: 10,
        width: getWidth / 2.5,

    },
});
export default App;
