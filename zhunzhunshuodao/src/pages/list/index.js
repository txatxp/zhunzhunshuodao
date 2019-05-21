import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter2'

import './index.less'


@connect(({ counter, counter2 }) => ({
  counter,
  counter2
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }  
  
  conso () {
    console.log(this.props.counter, 'counter')
    console.log(this.props.counter2, 'counter2')
  }
  
  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>{this.props.counter2.num1}--------</Text></View>
        <View><Text>{this.props.counter2.num2}**********</Text></View>
        <View><Text>list</Text></View>
        <Button className='dec_btn' onClick={this.conso}>打印数据</Button>
      </View>
    )
  }
}

export default Index
