import React from 'react'
import {Text,View,Image,ImageBackground} from 'react-native'

class Header extends React.Component{
    render(){
        return(
            <View >
                
                
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
                   


                   </View>

                   <View >
               
                   <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>Protocol #57234</Text>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:10}}>PI: Michel Margaret</Text>

                    </View>


                  </View>

{/********************************polygon View goes here*********************************************************************/}
                  <View style={{marginTop:5}}> 
                  
                  <ImageBackground source={require('../assests/Images/white-base.png')}  style={{width:300,alignSelf:'center'}}>
                      <View style={{paddingTop:30,flexDirection:'row',justifyContent:'space-around'}}>
                      <Text style={{fontSize:18,color:'#19AEEC',fontWeight:'bold',marginBottom:10}}>Visit # 3 </Text>
                      {/* <Text style={{color:'#19AEEC'}}>|</Text> */}
                      <Text style={{fontSize:18,color:'#19AEEC',fontWeight:'bold'}}>Week # 2</Text>
                     

                      </View>
                      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                      <Text style={{fontSize:18,color:'#19AEEC',fontWeight:'bold'}}>16-AUG-19</Text>
                      <Text style={{fontSize:18,marginRight:5,color:'#19AEEC',fontWeight:'bold'}}>16:35</Text>
                 
                     

                      </View>

                      
                 
                  </ImageBackground>
                  
                  </View>
                  

                
                  


                  
                  {/* polygon View ends here */}

                

            </ImageBackground>

            </View>
        )
    }
}

export default Header;