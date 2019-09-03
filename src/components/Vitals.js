import React from 'react'
import {Text,View} from 'react-native'

class Vitals extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sbp: '',
            dbp: '',
            pulse: '',
            temp: '',
            rr: '',
            weight: '',


        }
    }


//Methods go here
    render(){
        return(
             <View> 
            <View>
            <Text style={{ color: 'red', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', padding: 10 }}>VITALS</Text>
            </View>
            <View style={{  flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginRight: 10,
                            marginLeft: 10,
}}>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Systolic Blood Pressure(mmHG): {this.state.sbp} </Text>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Diastolic Blood Pressure(mmHG): {this.state.dbp}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Pulse(beats/Minute) : {this.state.pulse}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Temparature(F,C): {this.state.temp}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Respiratory Rate(breathes/min): {this.state.rr}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}>Weight(kg): {this.state.weight}</Text>



            </View>
            </View>


            
        )
    }
}

export default Vitals