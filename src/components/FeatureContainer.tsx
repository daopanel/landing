import Feature from './Feature';
import styled from 'styled-components';
import { useState } from 'react'


interface FeatureContainerProps {
  primaryColor: string;
}

export default function FeatureContainer(props: FeatureContainerProps) {
  const { primaryColor } = props;
  const [isActive, setIsActive] = useState(false)


  return (
    <Container>
      <Feature
        primaryColor={primaryColor}
        title="Delegate Profiles"
        content="Reputation matters. Public profiles for DAO delegates display relevant data including voting history, background & convictions, DAO memberships, and NFTs owned. Profiles are equipped with XMTP messaging and EPNS polling features that keep members informed and delegates accountable. DAO members will have the most clear picture of who they should delegate to on Daopanel."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Proposal Lifecycle Improvements"
        content="The quality and velocity of proposals determines a DAO’s ability to react to new circumstances.  There is a clear need for proposals to have different tracks and vote thresholds for different effects. Daopanel is adaptive to any governance framework or delegate voting flows, additionally improving the process with voter guides and token-weighted drafting and discussion."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Member Discussions"
        content="Core to DAO governance is thoughtful and rational discourse on what concerns the DAO.  Token-gated communications are a necessary start, and Daopanel will continue to innovate delegate comms systems to ensure DAOs have the tools needed to navigate contentious votes in a public, fair, and fruitful manner."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Priority Updates"
        content="In a world with hundreds of DAOs and thousands well on the way (each with marginal benefit for members), current platforms have a notification infestation.  Daopanel's customizable feed filters the noise by votes, events, and comments from specific DAOs or delegates you care most about."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Off-chain Voting"
        content="On-chain actions are expensive and use up scarce blockspace, leading DAOs to conduct many of their operations off-chain. Daopanel supports current Snapshot-like solutions with plans to incorporate zero-knowledge voting, and both Layer 2 and non-EVM chains."></Feature>
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
