import styled from 'styled-components'

export const CertificateContainer = styled.div`
    color: #fff;
    background: ${(lightBg) => (lightBg.lightBg ? 'black' : 'white')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const CertificateWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const CertificateRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${(imgstart) => (imgstart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${(imgstart) => (imgstart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TextLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color: #01bf71;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    color: ${(darkText) => (darkText.darkText ? '#010606' : '#fff')};
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
`

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`