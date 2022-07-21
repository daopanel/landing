import styled from 'styled-components';
import Image from 'next/image';
import PanelLogo from '../../public/assets/images/PanelLogo.png';
import LandingImage from '../../public/assets/images/LandingImage.png';
import SocialContainer from '../components/SocialContainer';
import OpaqueArtboard from '../../public/assets/images/OpaqueArtboard.png';
import Link from 'next/link';

export default function Home() {
  return (
    <Page>
      <Header>
        <TopLeftFlexRow>
          <TopLeftLogo>
            <Image height={27} width={29} src={PanelLogo.src} alt="logo" />
          </TopLeftLogo>
          <TopLeftTitle>Relay</TopLeftTitle>
          <From>from</From>
          <Panel>Panel</Panel>
        </TopLeftFlexRow>
        <TopRightContainer>
          <PublicBeta>Public Beta</PublicBeta>
          <Link href="https://relay.cc" passHref>
            <CallToActionButton
              style={{ height: '100%', width: '100%' }}
              target="_blank">
              Launch App
            </CallToActionButton>
          </Link>
        </TopRightContainer>
      </Header>
      <HeroSection>
        <FlexColumn>
          <Headline>Message Everywhere Using Your Web3 Identity</Headline>
          <SubHeadline>
            Your Web3 wallet is now even more powerful. Use it for any and all
            types of messaging —encrypted and decentralized!
          </SubHeadline>
        </FlexColumn>
        <SpacerDiv></SpacerDiv>
        <ImageContainer>
          <Image src={LandingImage} height={322} width={539} alt="Chatboxes" />
        </ImageContainer>
      </HeroSection>
      <BottomRight>
        <SocialContainer />
      </BottomRight>
    </Page>
  );
}

const TopLeftLogo = styled.div`
  min-height: 27px;
  min-width: 29px;
`;

const ImageContainer = styled.div`
  height: 332px;
  width: 539px;

  @media (max-width: 1288px) {
    display: none;
  }
`;

const SpacerDiv = styled.div`
  /* background: orange; */
  height: 100%;
  width: 5rem;
`;

const SubHeadline = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18.2339px;
  line-height: 150%;
  color: #5b5b5b;
`;

const Headline = styled.h1`
  color: #5a46c6;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 58px;
  display: flex;
  margin-bottom: 0.5rem;

`;

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10rem 6rem;

  @media (max-width: 1288px) {
    padding: 5rem 6rem;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const CallToActionButton = styled.a`
  padding: 0.5rem 0.75rem;
  background: #5a46c6;
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #fbfbfb;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;

const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModalHeader = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
  margin-bottom: 5px;
`;

const ModalParagraph = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 48px;
  text-align: center;
  color: #5b5b5b;
`;

const TopLeftTitle = styled.div`
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    height: 19px;
    width: 1px;
    display: inline-block;
    background-color: #d9d9d9;
    margin: 0rem 0.5rem;
  }
`;

const From = styled.span`
  color: #868686;
  font-weight: 500;
  font-size: 0.875rem;
`;

const Panel = styled.span`
  color: #868686;
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 0.25rem;
`;

const PublicBeta = styled.div`
  border-radius: 99rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  color: #5b5b5b;
  font-weight: 400;
  border: 1px solid #fbfbfb;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
  margin-right: 1rem;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    display: none;
  }

  &:before {
    content: '';
    display: inline-block;
    transform: translate(-50%, -50%);
    margin-right: 8px;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #84ffa7;
  }
`;

const TopLeftFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomRight = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
`;

const MaxContentWidth = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 48px;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 54px rgba(159, 159, 159, 0.25);
  background-color: white;
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${OpaqueArtboard.src}) repeat center center fixed;
  background-color: #f6f5ff;
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
`;

const ConnectorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 12px;
`;

const Connector = styled.li`
  color: white;
  list-style-type: none;
  cursor: pointer;
  width: 100%;
  min-height: 80px;
  border-radius: 8px;
`;

const MaybeHideOnMobileConnector = styled(Connector)<{ shouldHide: boolean }>`
  @media (pointer: coarse) {
    display: ${(p) => (p.shouldHide ? 'none' : 'flex')};
  }
`;

const Header = styled.header`
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1825rem 3rem;

  @media (max-width: 400px) {
    padding: 1.1825rem 1.5rem;
  }
`;
