import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class Home extends Component{

    render(){
        return(
            <View>
                <Text>Logged In</Text>
            </View>
        );
    }
}


Home.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default Home;