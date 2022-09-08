import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    hello: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600

    },
    center: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    center1: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    center2: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    center3: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})
// const Hello = () => {
//     return (
//         <View style={styles.hello}>
//             <View style={styles.center}></View>
//             <View style={styles.center1}></View>
//             <View style={styles.center2}></View>
//             <View style={styles.center3}></View>
//         </View>
//     )
// }
// const list = [
//     {
//         name: "Nguyễn Văn A",
//         emai: "099uuu@gmail.com"
//     },
//     {
//         name: "Nguyễn Văn A",
//         emai: "099uuu@gmail.com"
//     },
//     {
//         name: "Nguyễn Văn A",
//         emai: "099uuu@gmail.com"
//     },
//     {
//         name: "Nguyễn Văn A",
//         emai: "099uuu@gmail.com"
//     },
//     {
//         name: "Nguyễn Văn A",
//         emai: "099uuu@gmail.com"
//     }
// ]
// const List = ({ list: { name, emai } }) => {
//     return (
//         <View>
//             <Text>{name} {emai}</Text>
//         </View>
//     )
// }
// const Lists = ({ list }) => {
//     const lists = list.map((list) => <List list={list} />)
//     return lists
// }
const Hi = () => {
    const last = {
        firstname: "",
        email: ""
    }
    const [data, setdata] = useState(last)
    const chang = (e) => {
        const {name, value} = e.target
        setdata({ ...data, [name]: value })
    }
    const onsubmit = (e) => {
        e.preventDefault()
        alert(data)
    }
    const { firstname, email } = data
    return (
        <View>
            {/* <Lists list={list} /> */}
            <Text>Nhập tên bạn vào</Text>
            <TextInput placeholder='Nhập tên vào nhé' value={firstname} name="firstname"/>
            <Text>Nhập email của bạn vào</Text>
            <TextInput placeholder='Nhập email vào' value={email} name='email' />
            <Button type="button" title="Press Me" value="Submit" onClick={onsubmit} />
        </View>
    )

}
export default Hi