import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import './style.css'

export default class myProjects extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Projects/>
                <Footer/>
            </div>
        )
    }
}
