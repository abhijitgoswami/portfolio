import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import Intro from '../Components/Introduction'
import Certificate from '../Components/Proficiency'
import {obj1} from '../Components/Proficiency/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Intro/>
            <Certificate {...obj1}/>
        </React.Fragment>
    )
}

export default Home
