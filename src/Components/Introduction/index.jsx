import React, {useState} from 'react'
import intro from '../../Asssets/Videos/Intro.mp4';
import { ArrowForward, ArrowRight, Button, IntroBg, IntroBtnWrapper, IntroContainer, IntroContent, IntroH1, IntroP, VideoBg } from './IntroElement';

const Intro = () => {

     const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <IntroContainer id="intro">
            <IntroBg>
                <VideoBg autoPlay loop muted src={intro} type='video/mp4'/>
            </IntroBg>
            <IntroContent>
                <IntroH1>Hello, I am Abhijit Goswami</IntroH1>
                <IntroP>
                    I am Working as a Software Engineer in Cognizant Technology Solutions, Kolkata.
                </IntroP>
                <IntroBtnWrapper>
                    <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Contact me{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro
