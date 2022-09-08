import React, { useState } from "react";
import { Component } from "react";
import { View,TextInput,Text,Button } from "react-native";
const Form=()=>{
    const list={
        first_name:'',
        last_name:''
    }
    const [data,setData]=useState(list)
    const onchage=(e)=>{
        const {name:value}=e.target
        setData({...data,[name]:value})
    }
    const submit=(e)=>{
        e.prevenDefault()
        console.log(data);
    }
    const {first_name,last_name}=data
    return(
        <View>
            <Text>Nhập tên của bạn vào</Text>
            <TextInput placeholder="Nhập tên của bạn vào" name="first_name" value={first_name} onChange={onchage}></TextInput>
            <Text></Text>
            <Button title="Submit" onPress={submit}></Button>
            <Text>{first_name}</Text>
        </View>
    )
}
export default Form