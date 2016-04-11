import React, {
  Text, Image, View
} from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(`Repo ${this.props.repo.name} Render, avatar:`, this.props.repo.owner.avatar_url);
    return (
      <View style={{flexDirection: 'row', padding: 20, alignItems: 'center', backgroundColor: '#ffeecc'}}>
        <Image style={{width: 50, height: 50, borderRadius: 25}}
        source={{uri: this.props.repo.owner.avatar_url}}/>

        <Text
          style={{color: (this.props.active?'red': 'teal'), paddingLeft: 20} }
          onPress={this.props.onClick}
          >
          {this.props.repo.name}
        </Text>
      </View>
    )
  }
  componentDidMount() {
    console.log('repo did mount');
  }
  componentWillUnmount() {
    console.log('Repo didunmount');
  }
}
