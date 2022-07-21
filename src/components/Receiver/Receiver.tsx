import React, { useState } from 'react';
import { Interpolation } from 'styled-components';
import ChatBox from './ChatBox';
import Button from './Button';

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
    <div>
      <Button onClick={toggle} text={buttonText} style={buttonStyle}></Button>
      <ChatBox closeReceiver={toggle} peerAddress={'panel.eth'} visible={showBox}></ChatBox>
    </div>
  );
};

export default Receiver;
