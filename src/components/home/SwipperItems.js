import React, {} from 'react';
import {View,Image,StyleSheet}from 'react-native'
import Swiper from 'react-native-swiper';
import dimensons from '../../asset/dimensons/dimensons';

const firstImage = (require('../../asset/images/QC1.png'));
const secondImage = (require('../../asset/images/QC2.png'));
const thirdImage = (require('../../asset/images/QC3.png'));
const fourthImage = (require('../../asset/images/QC4.png'));
const imageFood = [firstImage, secondImage, thirdImage, fourthImage];

export default () => {
    return (
        <View style={{height: dimensons.getWidth() / 2}}>
            <Swiper style={styles.wrapper}
                    autoplay={true}>
                {imageFood.map((image, index) =>
                    <View
                        key={index}
                        style={styles.slideImage}>
                        <Image
                            resizeMode={'center'}
                            style={styles.slide}
                            source={image}/>
                    </View>,
                )}
            </Swiper>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {},

    slide: {
        alignSelf: 'center',
        borderRadius: 10,
    },
    slideImage: {
        justifyContent: 'center', flex: 1,
    },
});
