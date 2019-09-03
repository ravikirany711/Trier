import React from 'react'
import {ScrollView} from 'react-native'
import Header from '../components/Header'
import Vitals from '../components/Vitals'
import Remarks from '../components/Remarks'
import Footer from '../components/Footer'

class MainScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                
                <Header/>
                <Vitals/>
                <Remarks/>
                <Footer/>
                


            </ScrollView>
                
            
            
        )
    }
}

export default MainScreen;