import React, { useState } from 'react';
import { Interpolation } from 'styled-components';
import ChatBox from './ChatBox';
import LaunchButton from './LaunchButton';

interface ContainerProps {
  buttonText: string;
  buttonStyle?: Interpolation<React.CSSProperties>;
  peerAddress?: string;
}

const Receiver = ({ buttonText, buttonStyle, peerAddress }: ContainerProps) => {
  const [showBox, setShowBox] = useState<boolean>(false);

  const toggle = () => {
    setShowBox(!showBox);
  };

  return (
    <>
      <LaunchButton onClick={toggle} text={buttonText} style={buttonStyle}></LaunchButton>
      <ChatBox closeReceiver={toggle} peerAddress={'panel.eth'} visible={showBox}></ChatBox>
    </>
  );
};

export default Receiver;
