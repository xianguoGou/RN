import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={[styles.header_title, styles.flex_style]}>
          <Text style={styles.header_color}>
            {this.props.title}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_style: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header_title: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(0, 122, 255)'
  },
  header_color: {
    color: '#fff',
    fontSize: 18
  }
})

export default Header;