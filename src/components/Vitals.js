import React from 'react'
import {Text,View} from 'react-native'

class Vitals extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sbp: null,
            dbp: null,
            pulse: null,
            temp: null,
            rr: null,
            weight: null,
            vbg:'white'


        }
    }
//METHODS CAN GO HERE
//Figure out the background of the views in the table with setInterval
//component did mount is the audio engine ready










//*********************************************************************************************/
    async componentDidMount() {
        try {
          setInterval(async () => {
            const res = await fetch('http://trier-health.schrocken.io:5000/getTrierJson/5d6f7168166007f436944d11')
            
            
            
            const blocks = await res.json();
             console.log(blocks) //result
           

            this.setState({
            sbp: blocks.systolicBloodPressure.value,
            dbp: blocks.diastolicBloodPressure.value,
            temp: blocks.temperature.value,
            pulse: blocks.pulse.value,
            rr: blocks.respiratoryRate.value, //This is not updated in backend
            weight: blocks.weight.value,
            vbg:'#C3EAFB'
            
            
           

              
            })
          }, 2000);
        }
        
         catch(e) {
          console.log(e);
        }

        
        
  }

  

  



//Methods go here
    render(){
        return(
             <View> 
            <View>
            <Text style={{ color: 'red', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', padding: 10 }}>VITALS</Text>
            </View>
            {/* <View style={{  flexDirection: 'column',
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



            </View> */}
            {/* The new Views are going here right after this */}
            <View>

            <View style={{ flexDirection: 'row',
			marginBottom:0,height:25,
			justifyContent: 'space-around',margin:10}}>
				<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Systolic Blood Pressure(mmHG)</Text>
				<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.sbp}</Text>

			</View>
				<View style={{ flexDirection: 'row',
				marginTop:0,marginBottom:0,height:25,
				justifyContent: 'space-around',margin:10}}>
					<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Diastolic Blood Pressure(mmHG)</Text>
					<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.dbp}</Text>
	
				</View>

				<View style={{ flexDirection: 'row',
				marginTop:0,marginBottom:0,height:25,
				justifyContent: 'space-around',margin:10}}>
					<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Pulse(beats/Minute)</Text>
					<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.pulse}</Text>
	
				</View>

				<View style={{ flexDirection: 'row',
				marginTop:0,marginBottom:0,height:25,
				justifyContent: 'space-around',margin:10}}>
					<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Temparature(F,C)</Text>
					<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.temp}</Text>
	
				</View>

				<View style={{ flexDirection: 'row',
				marginTop:0,marginBottom:0,height:25,
				justifyContent: 'space-around',margin:10}}>
					<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Respiratory Rate(breathes/min)</Text>
					<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.rr}</Text>
	
				</View>

				<View style={{ flexDirection: 'row',
				marginTop:0,marginBottom:0,height:25,
				justifyContent: 'space-around',margin:10}}>
					<Text style={{borderWidth:1,width:250,paddingLeft:10,paddingTop:2,backgroundColor:this.state.vbg}}>Weight(kg)</Text>
					<Text style={{borderWidth:1,width:100,paddingLeft:10,marginLeft:10,backgroundColor:this.state.vbg}}>{this.state.weight}</Text>
	
				</View>

        </View> 
            </View>


            
        )
    }
}

export default Vitals;
