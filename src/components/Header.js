import React from 'react'
import {Text,View,Image,ImageBackground} from 'react-native'

class Header extends React.Component{
    render(){
        return(
            <View>
                
                
            <ImageBackground source={require('../assests/Images/BG_Gradient_Waves.png')}  style={{height:250,width:360}}>
               <View style={{justifyContent:'space-around',flexDirection:'row',padding:10}}>
               <Image source={require('../assests/Images/Toggle-Icon.png')} style={{height:50,width:50}} />
                <Text style={{fontSize:18,color:'white'}}>Visit Form</Text>
                <Image source={require('../assests/Images/profile-icon.png')} style={{height:50,width:50}}/>
                   
               </View>

               <View  style={{}}>

                   <View>
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Site  #256</Text>
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Patient  #256-378</Text>

                   </View>

                   <View style={{}}>
               
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Protocol #57234</Text>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>PI: Michel Margaret</Text>
                    </View>


                  </View>

                

            </ImageBackground>

            </View>
        )
    }
}

export default Header;