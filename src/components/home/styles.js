import {StyleSheet} from 'react-native';
import dimensons from '../../asset/dimensons/dimensons';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        height: dimensons.getWidth() / 3,
        borderRadius: 10,
        width: dimensons.getWidth() / 2.5,

    },
    textFood: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        width: '100%',
    },
    listFood:{
        width:'100%'
    }
});

