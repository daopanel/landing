import styled from 'styled-components';
import background from '../../public/assets/images/Artboard.png';
import mirrorPurple from '../../public/assets/images/MirrorPurple.png';
import Github from 'components/Github';
import Twitter from 'components/Twitter';
import Discord from 'components/Discord';
import FeatureContainer from 'components/FeatureContainer';

const primaryColor = 'rgb(115, 73, 229)';

export default function Home() {
  return (
    <Container>
      <Section>
        <Header>
          <HeaderSocialContainer>
            <Ul>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/daopanel">
                <Github />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/5N3wpzNjTT">
                <Discord />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/daopanel">
                <Twitter />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mirror.xyz/0xdaopanel.eth">
                <Mirror />
              </a>
            </Ul>
          </HeaderSocialContainer>
          <LaunchAppButton>App Coming Soon</LaunchAppButton>
        </Header>
      </Section>
      <HeroSection>
        <HeroContainer>
          <Headline>
            Governance infrastructure for any DAO and every delegate
          </Headline>
          <SubHeadline>
            Open source tools for governance are a public good. The first piece
            is encrypted and decentralized web3 chat called Hello, built on XMTP
            protocol (in beta).
          </SubHeadline>
          <TryHelloSection>
            <ButtonContainer>
              <LeftButton>
                <LeftButtonLink
                  target="_blank"
                  href="https://www.daopanel.chat/">
                  Try Hello
                </LeftButtonLink>
              </LeftButton>
              <RightButton>
                <RightButtonLink target="_blank" href="https://xmtp.com">
                  Learn about XMTP
                </RightButtonLink>
              </RightButton>
            </ButtonContainer>
          </TryHelloSection>
        </HeroContainer>
      </HeroSection>
      <FeaturesSection>
        <FeatureSection>
          <FeatureContainer primaryColor={primaryColor} />
        </FeatureSection>
      </FeaturesSection>
      <Footer>
        <FooterSocialContainer>
          <Copyright>&copy; 2022 daopanel, inc</Copyright>
          <Ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/daopanel">
              <Github />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/5N3wpzNjTT">
              <Discord />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/daopanel">
              <Twitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mirror.xyz/0xdaopanel.eth">
              <Mirror />
            </a>
          </Ul>
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
  color: white;
  padding: 35px 50px 0px 50px;
  font-family: montserrat;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (max-width: 700px) {
    padding: 50px 50px 0px 50px;
  }

  @media (max-width: 450px) {
    padding: 25px 25px 0px 25px;
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
    /* background-position: 40% 40%; */
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

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 600px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const LaunchAppButton = styled.button`
  /* background: #635f67; */
  background: #100817;
  border: none;
  border-radius: 8px;
  color: #1a181c;
  color: #817f7f;
  padding: 16px;
  min-width: 100px;
  border: 2px solid #333234;
  border: 2px solid #242526;
  font-size: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1400px;
`;
const FeaturesSection = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroSection = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
`;

const HeroContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
`;

const Headline = styled.h1`
  color: white;
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
  color: rgb(255, 255, 255, 0.75);
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

const FeatureSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
`;

const Footer = styled.footer`
  min-height: 150px;
  margin-top: 100px;
  width: calc(100% + 150px);
  background: #100817;
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    width: calc(100%+ 50px);
  }
`;

const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: calc(100% - 150px);

  @media (max-width: 450px) {
    padding: 0px 25px;
  }
`;
const HeaderSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding: 0px 25px;
  }
`;

const Copyright = styled.div`
  color: #dad0e6;
`;

const Mirror = styled.div`
  background-image: url(${mirrorPurple.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 25px;
  width: 25px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;

  > * {
    margin: 15px;
    cursor: pointer;
  }

  > * > * > * {
    fill: ${primaryColor};
  }
`;

const TryHelloSection = styled.div`
  margin-top: 100px;
`;

const RightButton = styled.button`
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #100817;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  font-weight: 400;
  cursor: pointer;
  font-size: 1rem;
  //Width hard coded based on the content of the button with the most text
  width: 186px;

  @media (max-width: 400px) {
    width: 160px;
    font-size: 0.8rem;
  }
`;

const LeftButton = styled.button`
  margin-right: 15px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: ${primaryColor};
  border: 2px solid ${primaryColor};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  flex-grow: 1;
  //width hard coded based on the content of the button with the most text
  width: 186px;

  @media (max-width: 400px) {
    width: 160px;
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  margin-bottom: 75px;
  margin-top: -50px;
`;

const LeftButtonLink = styled.a`
  text-decoration: none;
  color: white;
`;

const RightButtonLink = styled.a`
  text-decoration: none;
  color: ${primaryColor};
`;
