import React from 'react'
import { Column1, Column2, Heading, Img, ImgWrap, CertificateContainer, CertificateRow, CertificateWrapper, Subtitle, TextWrapper, TopLine } from './CertificateElement'

const Certificate = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    return (
        <React.Fragment>
            <CertificateContainer lightBg={lightBg} id={id}>
                <CertificateWrapper >
                    <CertificateRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            {console.log(img)}
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
