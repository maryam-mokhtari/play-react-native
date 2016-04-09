import React, { Text } from 'react-native'

const RepoDetail = (props) => {
  if (props.repo) {
  return <Text>{props.repo.name}</Text>
}
return <Text>Nothing</Text>
}

export default RepoDetail
