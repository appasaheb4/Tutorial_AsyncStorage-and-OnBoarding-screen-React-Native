
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity, TouchableHighlight, StatusBar,Dimensions,PixelRatio } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title, Thumbnail, Left, Button, Right } from 'native-base'
import ImagePicker from 'react-native-image-picker';


export default class Images extends Component {
    state = {
        ImageSource: null,
    };



    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    ImageSource: source
                });
            }
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={styles.ImageContainer}>
                        {this.state.ImageSource === null ?
                            <Text>Select Image</Text> :
                            <Image style={styles.ImageContainer} source={this.state.ImageSource} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
    },
    ImageContainer: {
        borderRadius: 10,
        marginTop: 20,  
        marginBottom: 20,  
        width: Dimensions.get('window').width,
        height: 250,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: '#CDDC39',
      },  

});
