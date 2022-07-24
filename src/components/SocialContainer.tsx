import styled, {css} from 'styled-components';
import Image from 'next/image';
import Github from './Github';
import MirrorWhite from '../../public/assets/images/mirror-white.png';
import WhiteLogo from '../../public/assets/images/whitelogo.png';
import RelayReceiver from '../components/Receiver';
import { relative } from 'node:path/win32';
import { url } from 'node:inspector';

export default function MobileBetaStatus() {
  return (
    <Wrapper>
      <RelayReceiver 
        peerAddress='panel.eth' 
        receiverContainerStyle={receiverStyle} 
        launchButtonStyle={receiverButtonStyle} buttonText=''
      />
      <Spacer />
      <a
        href="https://www.github.com/daopanel"
        target="_blank"
        rel="noreferrer">
        <Github />
      </a>
      <Spacer />
      <MirrorLink
        href="https://www.mirror.xyz/panel.eth"
        target="_blank"
        rel="noreferrer"
      />
    </Wrapper>
  );
}

const receiverStyle = css`
  right: 160px;
`;

const receiverButtonStyle = css`
  background-image: url(${WhiteLogo.src});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  bottom: initial;
  right: initial;
  background-color: #7349e5;
  border: none;
  boxShadow: none;
  height: 20px;
  width: 22px;
  margin-right: 5px;
  margin-left: 0px;
`;

const Spacer = styled.span`
  width: 1px;
  height: 28px;
  background-color: #9771ff;
  margin-right: 10px;
`;

const MirrorLink = styled.a`
  display: block;
  background-image: url(${MirrorWhite.src});
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 18px;
  margin-left: 3px;
`;

const PublicBeta = styled.a`
  font-weight: 900;
  font-variant: small-caps;
  font-size: 16px;
  display: inline;
  cursor: pointer;
  text-decoration: none;
  color: #f77272;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #7349e5;
  border: 2px solid #9771ff;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 12px;

  & > a {
    margin-right: 0.5rem;
  }
`;
