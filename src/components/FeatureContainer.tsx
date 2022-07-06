import Feature from './Feature';
import styled from 'styled-components';

interface FeatureContainerProps {
  primaryColor: string;
}

export default function FeatureContainer(props: FeatureContainerProps) {
  return (
    <Container>
      <Feature
        title="Panel"
        listTitle="All your XMTP conversations in one place"
        listItems={[
          'Token-gated group chats',
          'Profiles rich with on-chain data, including ENS, NFTs, Lens, and DAO membership',
          'Filter messages base d on sender, content, and message type',
          'Built-in anti-spam features',
        ]}></Feature>
      <Feature
        title="Artist Suite"
        listTitle=" Broadcast to NFT fans"
        listItems={[
          'Blasts: message all of the addresses holding a creator’s NFT',
          'No middlemen: share content directly to your fans',
          'Feature-rich creator profiles: What do you want fans to see?',
        ]}></Feature>
      <Feature
        title="Athens"
        listTitle=" Delegate & Proposal Dashboard"
        listItems={[
          'Designed for web3 discussion and debate',
          'Token-gated proposal drafting and commenting',
          'Delegate tracking, profiles, and voter guides',
        ]}></Feature>
      <Feature
        title="Panel Pro"
        listTitle="Embedded XMTP chats for any website with web3 users"
        listItems={[
          'Easy to use components for widespread use of the XMTP chatbox, hosted anywhere',
          'Web3 sites can add drop-in wallet messaging, including customer support & feedback',
          'Web2 sites can reach and support new users through their wallet addresses, enabling new business models',
        ]}></Feature>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1000px;
  padding-top: 30px;
`;
