import React , { Text, View, StyleSheet, Component, TouchableHighlight, ListView } from 'react-native'
import RepoDetail from './components/RepoDetail'
import Repo from './components/Repo'

class Main extends Component {
  constructor(props) {
    console.log('main constructor')
    super(props)

    this.state = {
      repos: [],
      active: null,
      counter: 0,
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
    this.handleClick=this.handleClick.bind(this)
    this.onPressButton = this.onPressButton.bind(this)
  }
  componentDidMount() {
    console.log('main componentDidMount')
    fetch('https://api.github.com/repositories?per_page=5')
    .then((response) => {
      return response.json()
    })
    .then((repos) => {
      this.setState({repos, ds: this.state.ds.cloneWithRows(this.state.repos.concat(repos)) })
      console.log('repos.length:',repos.length);

      setInterval(()=> {
        this.setState({
          ds: this.state.ds.cloneWithRows(
            [
              Object.assign({}, this.state.repos[0], {name: this.state.repos[0].name+'x'}),
              ...this.state.repos.slice(1)
            ]
          ),
          repos: [
            Object.assign({}, this.state.repos[0], {name: this.state.repos[0].name+'x'}),
            ...this.state.repos.slice(1)
          ],
          counter: this.state.counter + 1
        })
      }, 1000)
    })

  }
  componentWillUnmount() {
    console.log('main didunmount');
  }
  handleClick(repo) {
    this.setState({active: repo})
    this.props.navigator.push({name: 'Repo', index: 1, repo})
    console.log("clicked!");
  }
  onPressButton() {
    this.props.navigator.push({name: 'Repo', index: 1})
  }
  render() {
    console.log('Main Render');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Maryam!</Text>
        <ListView style={{backgroundColor: '#ffaadd'}}
          dataSource={this.state.ds}
          renderRow={(repo) => <Repo repo={repo} active={repo==this.state.active}
          onClick={() => {this.handleClick(repo)}} />}
          />

        <Repo repo={{name: 'kooft', owner: {avatar_url: 'https://github.com/images/error/octocat_happy.gif'}}}
          onClick={() => {this.handleClick(repo)}} />
        <RepoDetail repo={this.state.active} />
        <Text style={styles.instructions}>
          Salaaaam {this.state.counter}
        </Text>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight onPress={this.onPressButton}>
          <Text>
            Touch!
          </Text>
        </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',

  },
});

export default Main
