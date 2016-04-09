import React, {

  Text,

} from 'react-native';

const Repo = (props) => {
  return <Text style={{color: (props.active?'red': 'teal')} } onPress={props.onClick}> {props.name}</Text>
}

export default Repo
