import React from 'react'
import {Text,View,Image,ImageBackground} from 'react-native'

class Header extends React.Component{
    render(){
        return(
            <View>
                
                
            <ImageBackground source={require('../assests/Images/BG_Gradient_Waves.png')}  style={{height:250,width:360}}>
               <View style={{justifyContent:'space-around',flexDirection:'row',padding:10}}>
               <Image source={require('../assests/Images/Toggle-Icon.png')} style={{height:50,width:40}} />
                <Text style={{fontSize:20,color:'white'}}>Visit Form</Text>
                <Image source={require('../assests/Images/profile-icon.png')} style={{height:50,width:50}}/>
                   
               </View>

               <View  style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:10}}>

                   <View >
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>Site  #256</Text>
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>Patient  #256-378</Text>
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Visit #3</Text>


                   </View>

                   <View >
               
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>Protocol #57234</Text>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>PI: Michel Margaret</Text>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Week #2</Text>

                    </View>


                  </View>

                

            </ImageBackground>

            </View>
        )
    }
}

export default Header;