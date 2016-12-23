import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import LandingScreen from './LandingScreen';

class HomeScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.logout = this.logout.bind(this);
    }


    logout(){
        //TODO: destroy firebase session
        this.props.navigator.push({ screen: LandingScreen});
    }

    render(){
        return(
            <View>
                <Text>Logged In</Text>
                <Button
                    title="Log Out"
                    color="#e0e0e0"
                    onPress={this.logout}
                />
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default HomeScreen;