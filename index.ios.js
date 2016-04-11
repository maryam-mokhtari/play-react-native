/**
* Sample React Native App
* https://github.com/facebook/react-native
*/

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'
import Main from './Main'
import Repo from './components/Repo'
delete GLOBAL.XMLHttpRequest;

class mayyamak extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) => {
            switch (route.name) {
              case 'Repo':
                return <Repo
                active={route.repo.active}
                repo={route.repo}
                onClick={() => {navigator.pop(); console.log('pop!');}}
                  />
              default:
                return <Main navigator={navigator} />
            }
          }

        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mayyamak', () => mayyamak);
