import React from 'react'
import { Column1, Column2, Heading, Img, ImgWrap, CertificateContainer, CertificateRow, CertificateWrapper, Subtitle, TextWrapper, TopLine, BtnWrap } from './CertificateElement'
import { Button } from '../Introduction/IntroElement'

const Certificate = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, btnLabel, primary, dark, dark2}) => {
    return (
        <React.Fragment>
            <CertificateContainer lightBg={lightBg} id={id}>
                <CertificateWrapper >
                    <CertificateRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <BtnWrap>
                                    <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                                    primary={primary ? 1: 0}
                                    dark={dark ? 1 : 2}
                                    dark2={dark2 ? 1 : 2}>{btnLabel}</Button>
                                </BtnWrap>
                            </TextWrapper> 
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img.default} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </CertificateRow>
                </CertificateWrapper>
            </CertificateContainer>
        </React.Fragment>
    )
}

export default Certificate
