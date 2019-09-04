import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'


class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            vbc:'#98fb98'
        }
    }

//METHODS WILL GO HERE
 









    render() {
        return (
            <View style={styles.MainViewStyle}>


                <TouchableOpacity>
                    <View style={{ height: 50, width: 75, backgroundColor: '#19AEEC', borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 50, backgroundColor: '#19AEEC' ,borderRadius: 50}} source={require('../assests/Images/previous-icon.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity OnPress={{ backgroundColor: 'blue' }}>
                    <View style={{ height: 50, width: 75, backgroundColor: this.state.vbc, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


                        <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={require('../assests/Images/wave-voice-input.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ height: 50, width: 75, backgroundColor: '#19AEEC', borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image style={{ height: 25, width: 50, backgroundColor: '#19AEEC', borderRadius: 50 }} source={require('../assests/Images/next-icon.png')} />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainViewStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'


    

    }
})

export default Footer;