import React, {useEffect, useState} from 'react';
import {View, FlatList,} from 'react-native';
import axios from 'axios';
import {ProductImage} from './ProductImage';
import{styles} from './styles';

function Home() {
    const [data, setData] = useState([]);
    const [arrSpecies, setArrSpecies] = useState([]);
    useEffect(() => {
        axios.get('https://orderfood2007.000webhostapp.com/foodapp.php')
            .then(res => {
                const data = res.data.map(food => {
                    return {...food, fullSize: false};
                });
                setData(data);
            })
            .catch(e => console.log(e));
        axios.get('https://orderfood2007.000webhostapp.com/species.php')
            .then(res => {
                setArrSpecies(res.data);
            })
            .catch(e => console.log(e));
    });
     const  renderItemFood = (item) => {
        return (
            <View key={item.id.toString()} style={{alignItems: 'center'}}>
                <View style={styles.listFood}>
                    <ProductImage
                        image={{uri: item.foodImage}}
                        name={item.foodName}
                        content={item.foodContent}
                        price={item.price}>
                    </ProductImage>
                </View>
            </View>
        );
    };
   function renderListFood() {
        return (
            <View style={{backgroundColor: 'whitesmoke'}}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({item}) =>renderItemFood(item)}/>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            {renderListFood()}
        </View>
    );
}

export default Home;
