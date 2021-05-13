import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import './index.scss'
import { navigateTo } from '@tarojs/taro';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button
          onClick={() => {
            navigateTo({
              url: "/sub/index/index",
            });
          }}
        >
          go sub
        </Button>

      </View>
    )
  }
}
