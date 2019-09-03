import React from 'react'
import {View} from 'react-native'
import Header from '../components/Header'
import Vitals from '../components/Vitals'
import Remarks from '../components/Remarks'
import Footer from '../components/Footer'

class MainScreen extends React.Component{
    render(){
        return(
            <View>
                <Header/>
                <Vitals/>
                <Remarks/>
                <Footer/>


            </View>
                
            
            
        )
    }
}

export default MainScreen;