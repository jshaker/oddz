import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends Component{

    render(){
        return(
            <View>
                <Text>Logged In</Text>
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default HomeScreen;