import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detailssssss"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

        {/* Look here! We "push" the Details route */}

        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />

        <Button
        title="Go to Home"
        onPress={()=>this.props.navigation.navigate('Home')}
        />
        <Button
        title = "Go Back"
        onPress = {()=> this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',

  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
