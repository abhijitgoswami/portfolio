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
                <IntroP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </IntroP>
                <IntroBtnWrapper>
                    <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Contact me{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro
