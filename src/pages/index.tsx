import styled from 'styled-components';
import background from '../../public/assets/images/Artboard.png';
import FeatureContainer from 'components/FeatureContainer';
import Link from 'next/link';
import SocialIcons from 'components/SocialIcons';

export default function Home() {
  return (
      <Container>
        <Header>
          <SocialIcons />
          <HeaderButton>App Coming Soon</HeaderButton>
        </Header>
        <HeroSection>
          <Headline>
            Governance infrastructure for any DAO and every delegate
          </Headline>
          <SubHeadline>
            Open-source governance tools are a public good. The first piece is
            Hello, an encrypted and decentralized web3 chat built on XMTP
            protocol (beta).
          </SubHeadline>
          <ButtonContainer>
            <Link passHref href="https://www.daopanel.chat/">
              <LeftButton target="_blank">Try Hello</LeftButton>
            </Link>
            <Link passHref href="https://xmtp.com">
              <RightButton target="_blank">Learn about XMTP</RightButton>
            </Link>
          </ButtonContainer>
          <HelloMessageContainer>
            The Daopanel dashboard includes much more than Hello, described
            below and also in more detail on{' '}
            <Link passHref href="https://mirror.xyz/0xdaopanel.eth">
              <ColorSiteLink target="_blank">Mirror</ColorSiteLink>
            </Link>
          </HelloMessageContainer>
        </HeroSection>
        <FeatureSection>
          <FeatureContainer/>
        </FeatureSection>
        <Footer>
          <FooterSocialContainer>
            <Copyright>&copy; 2022 daopanel, inc</Copyright>
            <SocialIcons/>
          </FooterSocialContainer>
        </Footer>
      </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background.src}) repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 35px;
  font-family: montserrat;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (max-width: 700px) {
    padding: 50px 0px 0px 0px;
  }

  @media (max-width: 450px) {
    padding: 25px 0px 0px 0px;
  }

  &:after {
    background-image: linear-gradient(
      90deg,
      rgba(16, 8, 23, 94.5%) 0%,
      rgba(16, 8, 23, 93.5%) 38%,
      rgba(16, 8, 23, 83.5%) 50%,
      rgba(16, 8, 23, 93.5%) 72%,
      rgba(16, 8, 23, 94.5%) 100%,
      #100817
    );
    background-size: 400% 400%;
    display: block;
    content: '';
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    animation: slide 8s infinite;

    @keyframes slide {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
  }
`;

const ColorSiteLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  max-width: 1400px;
  padding: 0px 25px;

  @media (max-width: 600px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const HeaderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border: none;
  border-radius: 8px;
  color: #817f7f;
  padding: 16px;
  min-width: 100px;
  border: 2px solid #242526;
  font-size: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const HeroSection = styled.section`
  max-width: 775px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 25px;
`;

const Headline = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 35px;
  text-align: center;
  line-height: 1.25;

  @media (max-width: 475px) {
    font-size: 35px;
  }
`;

const SubHeadline = styled.span`
  color: ${({theme}) => theme.colors.opaqueWhite};
  font-size: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 200;
  line-height: 1.25;

  @media (max-width: 950px) {
    max-width: 700px;
  }
  @media (max-width: 525px) {
    line-height: 1.2;
    margin-top: -10px;
    margin-bottom: -50px;
  }
  @media (max-width: 625px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
  @media (max-width: 475px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
  @media (max-width: 400px) {
    margin-bottom: 0px;
  }
`;
const HelloMessageContainer = styled.span`
  color: ${({ theme }) => theme.colors.opaqueWhite};
  font-size: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 200;
  line-height: 1.25;
  width: 100%;
  padding-bottom: 25px;

  @media (max-width: 950px) {
    max-width: 700px;
  }
  @media (max-width: 625px) {
    font-size: 20px;
  }
  @media (max-width: 475px) {
    font-size: 18px;
  }
`;

const FeatureSection = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 0px 25px;
`;

const Footer = styled.footer`
  min-height: 150px;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 50px;

  @media (max-width: 450px) {
    padding: 0px 25px;
  }
`;

const Copyright = styled.div`
  color: #dad0e6;
`;

const RightButton = styled.a`
  padding: 15px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 400;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  //Width hard coded based on the content of the button with the most text
  min-width: 186px;
  text-align: center;

  @media (max-width: 400px) {
    min-width: 160px;
    font-size: 0.8rem;
  }
`;

const LeftButton = styled.a`
  margin-right: 15px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  cursor: pointer;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  //width hard coded based on the content of the button with the most text
  min-width: 186px;

  @media (max-width: 400px) {
    min-width: 160px;
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 45px 0px;
`;
