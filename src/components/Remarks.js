import React from 'react'
import {  View, TextInput } from 'react-native'

class Remarks extends React.Component {
    render() {
        return (
            <View style={{ margin: 5}}>
                <TextInput style={{ height: 90, borderColor: 'gray', borderWidth: 1, marginTop: 10 }} placeholder="Remarks" />
            </View>
        )
    }
}

export default Remarks;