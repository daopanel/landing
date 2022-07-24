import styled from 'styled-components';
import WhiteLogo from './../../../public/assets/images/white-logo.svg';
import CloseReceiverLine from './../../../public/assets/images/close-receiver-line.svg';
import Image from 'next/image';
import React from 'react'

interface HeaderProps {
  text?: string;
  showLinks?: boolean;
  visible: boolean;
  closeReceiver: () => unknown;
}

export default function RelayHeader({
  visible,
  text = 'Welcome to DaoPanel Receiver',
  showLinks = false,
  closeReceiver
}: HeaderProps) {

  let closeClass = visible ? 'visible' : 'collapsed';

  return (
    <Header className='receiver-header'>
       <TextContainer>
          {text}
       </TextContainer>
      
      { visible && 
      <CloseContainer className={closeClass} onClick={closeReceiver}>
        <Image
          src={CloseReceiverLine.src}
          width={22}
          height={20}
          alt="relay"
        />
      </CloseContainer>

      }
      
    </Header>
  );
}

const Header = styled.div`
  background-color: #5A46C6;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 24px;
  font-family: Inter;
  height: 62px;
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const TextContainer = styled.div`
  padding-top: 15px;
`;

const ImageContainer = styled.div`
  vertical-align: middle;
  display: inline-block;
`;

const CloseContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 22px;
  &:hover {
    cursor: pointer;
  }
`;
