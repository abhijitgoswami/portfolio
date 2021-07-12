import React from 'react'

const Certificate = () => {
    return (
        <React.Fragment>
            <CertificateContainer id={id}>
                <CertificateWrapper>
                    <CertificateRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Topline</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                            </TextWrapper>
                        </Column1>
                    </CertificateRow>
                </CertificateWrapper>
            </CertificateContainer>
        </React.Fragment>
    )
}

export default Certificate
