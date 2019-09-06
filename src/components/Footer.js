import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'


class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            wbc:'#D3D3D3' //voice input background
        }
    }

//METHODS WILL GO HERE

// ***************New method to change view background to green code below***************
async componentDidMount() {
    try {
    setInterval(async () => {
        const res = await fetch('http://trier-health.schrocken.io:5000/getTrierJson/5d6f7168166007f436944d11')
        
        
        
        const result = await res.json();
         console.log(result) //result
       

        this.setState({
            wbc:'#98fb98'
        })
      }, 2000);
    }
    
     catch(e) {
      console.log(e);
    }

    
    
}






// ***************New method to change view background to green code above***************



 









    render() {
        return (
            <View style={styles.MainViewStyle}>


                <TouchableOpacity>
                    <View style={{ height: 50, width: 75, backgroundColor: '#19AEEC', borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 35 ,borderRadius: 50}} source={require('../assests/Images/previous-icon.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity OnPress={{backgroundColor:'blue'}}>
                    <View style={{ height: 50, width: 75, backgroundColor: this.state.wbc, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


                        <Image style={{ height: 50, width: 35, borderRadius: 50 }} source={require('../assests/Images/wave-voice-input.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ height: 50, width: 75, backgroundColor: '#19AEEC', borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image style={{ height: 25, width: 35, borderRadius: 50 }} source={require('../assests/Images/next-icon.png')} />
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