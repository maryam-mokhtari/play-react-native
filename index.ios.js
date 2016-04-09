/**
* Sample React Native App
* https://github.com/facebook/react-native
*/

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Repo from './components/repo'
import RepoDetail from './components/RepoDetail'
class mayyamak extends Component {
  constructor(props) {
    super(props)
    this.state = {repos: [], active: null}
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {
    fetch('https://api.github.com/users/petehunt/repos?per_page=5')
    .then((response)=>{
      return response.json()
    })
    .then((repos) => {
      this.setState({repos})
      console.log(repos);
    })
  }

  handleClick(repo) {
    this.setState({active: repo})
    console.log("clicked!");
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      Welcome Maryam!
      {this.state.repos.map((repo) => {
        return <Repo name={repo.name} active={repo==this.state.active} onClick={() => {this.handleClick(repo)}} />
      })}
      </Text>
      <RepoDetail repo={this.state.active} />
      <Text style={styles.instructions}>
      Salaaaam
      </Text>
      <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
      </Text>
      </View>
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
