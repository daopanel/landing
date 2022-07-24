import React, { useState } from 'react';
import { Interpolation } from 'styled-components';
import ChatBox from './ChatBox';
import LaunchButton from './LaunchButton';
import {
  Provider as WagmiProvider,
  chain,
  createClient,
  defaultChains,
} from 'wagmi';
import { providers } from 'ethers';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { XmtpContextProvider } from 'xmtp-react/context';
import CSS from 'csstype';

const alchemyKey = 'kmMb00nhQ0SWModX6lJLjXy_pVtiQnjx';

const chains = defaultChains;
const defaultChain = chain.mainnet;

// Set up connectors
const wagmi = createClient({
  autoConnect: false,
  connectors({ chainId }) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain;
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${alchemyKey}`
      : chain.rpcUrls.default;
    return [
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
          rpc: { [chain.id]: rpcUrl },
        },
      }),
      new InjectedConnector({
        chains,
        options: { shimDisconnect: true },
      }),
    ];
  },
  provider(config) {
    return new providers.AlchemyProvider(config.chainId, alchemyKey);
  },
});

interface ContainerProps {
  buttonText: string;
  launchButtonStyle?: Interpolation<React.CSSProperties>;
  receiverContainerStyle?: Interpolation<React.CSSProperties>;
  peerAddress?: string;
}

const Receiver = ({ buttonText, launchButtonStyle, peerAddress, receiverContainerStyle }: ContainerProps) => {
  const [showBox, setShowBox] = useState<boolean>(false);
  const [hasLaunched, setHasLaunched] = useState<boolean>(false);


  const toggle = () => {
    setShowBox(!showBox);
    if (!hasLaunched) setHasLaunched(true);
  };

  const chatBoxContainerStyle:CSS.Properties = {
    maxHeight: showBox ? '480px' : (hasLaunched ? '62px' : '0px'),
    height: '480px', 
    position: 'fixed', 
    bottom: '0px', 
    right: '150px',
    transition: 'max-height 0.25s ease-in',
    overflow: 'hidden',
    borderRadius: showBox ? '7px' : '7px 7px 0 0'
  }

  return (
    <WagmiProvider client={wagmi}>
      <XmtpContextProvider>
        <LaunchButton onClick={toggle} text={buttonText} style={launchButtonStyle}></LaunchButton>
        <div style={chatBoxContainerStyle}>
          <ChatBox style={receiverContainerStyle} closeReceiver={toggle} peerAddress={peerAddress} hasLaunched={hasLaunched} visible={showBox}></ChatBox>
        </div>
     </XmtpContextProvider>
    </WagmiProvider>
  );
};

export default Receiver;
