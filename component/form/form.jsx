import React, { useState } from "react";
import { Component } from "react";
import { View,TextInput,Text,Button,StyleSheet } from "react-native";
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
        e.preventDefault()
        console.log(data);
    }
    const {first_name,last_name}=data
    return(
        <View style={styles.container}>
            <Text>Nhập tên của bạn vào</Text>
            <TextInput placeholder="Nhập tên của bạn vào" name="first_name" onChange={onchage}></TextInput>
            <Text></Text>
            <Button title="Submit" onPress={submit}></Button>
            <Text>{first_name}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        paddingTop:40,
        marginLeft:20
    }
})
export default Form