import { Component, useEffect, useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import { navigateTo } from "@tarojs/taro";



const Sub = ()=>{

  const [state,set ] = useState([])
  useEffect(()=>{
    import('../../mock/data').then(m=>set(m.default))
  },[])
  return <View className="index">
  <Text>Hello sub!</Text>
  <View>
    {
      state.map(e=><View key={e.id}>{e.id}</View>)
    }
  </View>
</View>
}

export default Sub
