import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
          <View style={styles.itemLeft}>
              <TouchableOpacity style={styles.square}></TouchableOpacity>
              <Text style={styles.itemText}>{props.text}</Text>
           </View>
           <View style= {styles.circular}></View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    itemLeft: {
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 20,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 15,
        height: 15,
        backgroundColor: 'blue',
        opacity: 0.6,
        borderRadius:7.5,
        borderWidth:1,
    },      
});
export default Task;