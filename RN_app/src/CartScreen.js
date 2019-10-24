import React from 'react';
import { Button, View, Text } from 'react-native';
import Header from './components/Header'
class CartScreen extends React.Component {
  render() {
    return (
      <View>
        <Header title={"购物车"} />
      <View>
        <Text>购物车</Text>
      </View>
      
      </View>
    );
  }
}
export default CartScreen