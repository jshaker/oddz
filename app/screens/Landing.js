import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class Landing extends Component{

    render(){
        return(
            <View>
                <Text>This is your first time opening OddZ.</Text>
            </View>
        );
    }
}

Landing.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default Landing;