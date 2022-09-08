import React from "react";
import { Component } from "react";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

//Tạo form login
const Login = () => {
    const list = [
        {
            username: 'diep',
            pass: 123
        },
        {
            username: 'thu',
            pass: 123456
        }
    ]
    const check = (e) => {
        const [data, setData] = useState(list)
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (data) {
            console.log("Đăng nhập thành công")
            alert("Đăng nhập thành công")
        }
        else {
            alert("Lỗi đăng nhập")
        }

    }
    const { username, pass } = data
    return (
        <View>
            <Text>Nhập username vào</Text>
            <TextInput placeholder="Nhập username vào" name='username' value={username}></TextInput>
            <Text>Nhập mật khẩu vào</Text>
            <TextInput placeholder="Nhập mật khẩu vào" name='pass' value={pass}></TextInput>
            <Text></Text>
            <Button title="Login" onPress={check}></Button>
        </View>
    )
}
export default Login