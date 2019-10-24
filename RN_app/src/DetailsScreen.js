import React from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text
        onPress={()=> this.props.navigation.goBack()}
        >返回上一页</Text>
        {/* <Button
          title="Go to Details... again"
        /> */}
      </View>
    );
  }
}
export default DetailsScreen