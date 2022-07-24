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

const alchemyKey = 'kmMb00nhQ0SWModX6lJLjXy_pVtiQnjx';

const chains = defaultChains;
const defaultChain = chain.mainnet;

// Set up connectors
const wagmi = createClient({
  autoConnect: true,
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

  const toggle = () => {
    setShowBox(!showBox);
  };

  return (
    <WagmiProvider client={wagmi}>
      <XmtpContextProvider>
        <LaunchButton onClick={toggle} text={buttonText} style={launchButtonStyle}></LaunchButton>
        <div style={{height: showBox ? '480px' : '0px', position: 'fixed', bottom: '0px', right: '50px'}}>
          <ChatBox style={receiverContainerStyle} closeReceiver={toggle} peerAddress={peerAddress} visible={showBox}></ChatBox>
        </div>
     </XmtpContextProvider>
    </WagmiProvider>
  );
};

export default Receiver;
