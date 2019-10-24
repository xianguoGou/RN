import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import Header from './components/Header'
class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Header title={"首页"} />
      <View style={{justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
          <Text 
            onPress={()=> {
              console.log(this.props)
              this.props.navigation.navigate('Details')
            }}
          >首页!，点击跳转至详情页</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    );
  }
}

export default HomeScreen